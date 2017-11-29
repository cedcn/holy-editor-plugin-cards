import style from './style.scss'

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
  tooltip: '卡片'
}

const sciprt = options => ({ el, widget, __S_, $selector, util }) => {
  const opts = Object.assign({}, defaults, options)

  const modal = new widget.Modal($selector, {
    panel: (
      <div class={__S_['cards-panel']}>
        <div class={__S_['cards-panel__search']}>
          <select>
            <option>文章</option>
            <option>用户</option>
          </select>
          <input></input>
        </div>
        <ul class={__S_['cards-panel__list']}>
          <li>
            <a href="javascript:;" class={__S_['cards-panel__insert']} onClick={() => inserCard('https://www.jiqizhixin.com/categories/shen-du')}>报名 | 百度AI开发者实战营重回广东，AI旋风即将席卷「羊城」</a>
          </li>
          <li>
            <a href="javascript:;" class={__S_['cards-panel__insert']} onClick={() => inserCard('https://www.jiqizhixin.com/categories/shen-du')}>文章标题...</a>
          </li>
          <li>
            <a href="javascript:;" class={__S_['cards-panel__insert']} onClick={() => inserCard('https://www.jiqizhixin.com/categories/shen-du')}>报名 | 百度AI开发者实战营重回广东，AI旋风即将席卷「羊城」</a>
          </li>
          <li>
            <a href="javascript:;" class={__S_['cards-panel__insert']} onClick={() => inserCard('https://www.jiqizhixin.com/categories/shen-du')}>文章标题...</a>
          </li>
        </ul>
      </div>
    )
  })

  function inserCard (url) {
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
