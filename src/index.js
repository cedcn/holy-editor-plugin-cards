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
  apiUrl: 'https://easy-mock.com/mock/5a251614420a172ca90cb832/cards/cards'
}

const sciprt = options => ({ el, widget, __S_, $selector, util }) => {
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

  const onChange = val => {
    $.get(opts.apiUrl)
      .done(({ data }) => {
        const jsx = getTemplete(data)
        const html = render(jsx)
        const point = document.getElementById('js-cards-panel-list')
        $(point).html(html)
      })
  }

  const modal = new widget.Modal($selector, {
    panel: (
      <div class={__S_['cards-panel']}>
        <div class={__S_['cards-panel__search']}>
          <select>
            <option>文章</option>
            <option>用户</option>
          </select>
          <input class={__S_['cards-panel__input']} onInput={e => onChange(e.target.value)} placeholder="输入关键字"></input>
        </div>
        <div id="js-cards-panel-list" />
      </div>
    )
  })

  function insertCard (url) {
    modal.close()
    document.execCommand('insertHTML', false, `<iframe src="${url}" width="100%"/>`)
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

  modal.on('close:before', () => {
    setSelection(vars.cacheRange)
  })

  $('#js-cards-panel-list').on('click', 'a', function () {
    const id = $(this).data('id')
    insertCard(`https://www.jiqizhixin.com/articles/${id}/card`)
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
