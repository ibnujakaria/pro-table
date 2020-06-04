import ProTable from "./ProTable"

/**
 * Th Options
 * 
 * @typedef { Object } Th.Options
 * @property { Object } attrs - DOM attributes
 * @property { Number } attrs.colspan - colspan of this th
 */

/**
 * Th class
 *
 * @class Th
 */
class Th {
  /**
   * Creates an instance of Th.
   * 
   * @param { Object } payload
   * @param { string } payload.key
   * @param { string } payload.label
   * @param { ProTable } payload.proTable
   * @param { Th.Options } payload.options
   * @memberof Th
   */
  constructor ({ key, label, proTable, options }) {
    this.key = key
    this.label = label
    this.proTable = proTable
    this.$dom = document.createElement('th')

    /**
     * @type { Th.Options }
     */
    this.options = {
      attrs: {
        colspan: 1
      },
      orderabel: true,
      ...options
    }

    this._createContainer()
    this._createSpan()
    this._applyAttributes()
    this._applyClasses()
    this._applyOrderable()
  }

  _createContainer () {
    this.$container = document.createElement('div')
    this.$container.style.display = 'flex'
    this.$container.style.justifyContent = 'space-between'
    this.$container.style.alignItems = 'center'

    this.$dom.appendChild(this.$container)
  }

  _applyAttributes () {
    for (const attr in this.options.attrs) {
      this.$dom.setAttribute(attr, this.options.attrs[attr])
    }
  }

  _applyClasses () {
    if (this.options.classes?.length) {
      this.$dom.classList.add(...this.options.classes)
    }
  }

  _createSpan () {
    this.$spanLabel = document.createElement('span')
    this.$spanLabel.innerHTML = this.label || '-'
    this.$container.appendChild(this.$spanLabel)
  }

  _isOrderable () {
    return this.options.orderable && this.options.attrs.colspan === 1
  }

  _applyOrderable () {
    if (!this._isOrderable()) {
      return
    }

    this.$container.style.cursor = 'pointer'

    // caret top
    this.$spanTop = document.createElement('span')
    this.$spanTop.innerHTML = '▴'
    this.$spanTop.style.marginBottom = '-.3rem'
    // caret bottom
    this.$spanBottom = document.createElement('span')
    this.$spanBottom.innerHTML = '▾'
    this.$spanBottom.style.marginTop = '-.3rem'

    this.$orderDom = document.createElement('div')
    this.$orderDom.appendChild(this.$spanTop)
    this.$orderDom.appendChild(this.$spanBottom)
    this.$orderDom.style.display = 'inline-flex'
    this.$orderDom.style.flexDirection = 'column'
    this.$orderDom.style.justifyContent = 'center'
    this.$orderDom.style.fontSize = '80%'
    this.$orderDom.style.height = '1rem'
    this.$orderDom.style.opacity = 0.3
    this.$orderDom.style.marginLeft = '.5rem'
    this.$orderDom.style.userSelect = 'none'
    this.$container.appendChild(this.$orderDom)

    this.$dom.addEventListener('click', e => {
      this._toggleOrder()
    })
  }
  
  _toggleOrder () {
    const order = this.proTable.options.order
    let payload = {
      key: this.key,
      direction: 'asc'
    }

    if (order.key === this.key) {
      payload.direction = order.direction === 'desc' ? 'asc' : 'desc'
    }

    this.proTable.setOrder(payload)
  }

  render () {
    if (this._isOrderable()) {
      const order = this.proTable.options.order;
  
      this.$spanTop.style.visibility = order.key === this.key &&
        order.direction === 'desc' ? 'hidden' : ''
  
      this.$spanBottom.style.visibility = order.key === this.key &&
        order.direction === 'asc' ? 'hidden' : ''
    }
  }
}

export default Th
