import style from './style.scss'
import { render } from 'deku/lib/string'

const getRange = () => {
  const selection = window.getSelection()

  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0)
    return range
  } else {
    return null
  }
}

export const setSelection = range => {
  const selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)

  return selection
}

const defaults = {
  tooltip: '卡片',
  host: window.location.host
}

const sciprt = options => ({ el, widget, __S_, $selector, util }) => {
  console.log(options)
  const opts = Object.assign({}, defaults, options)

  const getTemplete = data => {
    return (
      <ul class={__S_['cards-panel__list']}>
        {
          data.map((item, index) => (
            <li>
              <a href="javascript:;" class={__S_['cards-panel__insert']} data-id={item.id}>{item.title}</a>
            </li>
          ))
        }
      </ul>
    )
  }

  let timer
  let category = 'articles'

  const onChange = val => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      $.ajax({
        method: 'GET',
        url: `//${opts.host}/${category}?q=${val}`
      })
        .done(data => {
          console.log(data[category])
          const jsx = getTemplete(data[category])
          const html = render(jsx)
          const point = document.getElementById('js-cards-panel-list')
          $(point).html(html)
        })
        .fail(xhr => {
          alert('请求失败')
        })
    }, 300)
  }

  const modal = new widget.Modal($selector, {
    panel: (
      <div class={__S_['cards-panel']}>
        <div class={__S_['cards-panel__search']}>
          <select id="js-cards-panel-select">
            <option value="articles" selected={category === 'articles'}>文章</option>
            <option value="usages" selected={category === 'usages'}>用户</option>
          </select>
          <input id="js-cards-panel-input" class={__S_['cards-panel__input']} placeholder="输入关键字"></input>
        </div>
        <div id="js-cards-panel-list" />
      </div>
    )
  })

  function insertCard (url, id) {
    const random = Math.random().toString(36).substr(2)
    modal.close()
    document.execCommand('insertHTML', false, `<iframe data-iframe-id="${id}" data-iframe-category="${category}" name="${category}${random}" width="100%" onload="this.height=${category}${random}.document.body.scrollHeight" frameborder="0" src="${url}" />`)
  }

  const menu = new widget.Menu($selector, {
    icon: 'cards',
    tooltip: opts.tooltip,
    onMouseDown: () => {
      modal.open()
    }
  })

  const vars = {
    cacheRange: null
  }

  modal.on('open:before', () => {
    const range = getRange()
    if (range === null) return
    vars.cacheRange = range
  })
  modal.on('open:after', () => {
    $('#js-cards-panel-input').trigger('input')
  })

  modal.on('close:before', () => {
    setSelection(vars.cacheRange)
  })

  $('#js-cards-panel-list').on('click', 'a', function () {
    const id = $(this).data('id')
    insertCard(`//${opts.host}/card/${category}/${id}`, id)
  })

  $('#js-cards-panel-select').on('change', function () {
    category = this.value
    $('#js-cards-panel-input').trigger('input')
  })

  $('#js-cards-panel-input').on('input', function () {
    onChange(this.value)
  })

  util.addSelectionChangeEvent(isInArea => {
    if (isInArea) {
      util.toEnable(() => menu.enable())
    } else {
      util.toDisable(() => menu.disable())
    }
  })
}

const holyEditorPluginCards = {
  name: 'cards',
  run: sciprt,
  style
}

export default holyEditorPluginCards
