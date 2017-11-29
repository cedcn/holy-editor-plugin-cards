import style from './style.scss'

const defaults = {
  tooltip: '卡片'
}

const sciprt = options => ({ el, widget, __S_, $selector, util }) => {
  const opts = Object.assign({}, defaults, options)
  const modal = new widget.Modal($selector, {
    panel: (
      <div class={__S_['cards-panel']}>123</div>
    )
  })

  const menu = new widget.Menu($selector, {
    icon: 'modules',
    tooltip: opts.tooltip,
    onMouseDown: () => {
      modal.open()
    }
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
