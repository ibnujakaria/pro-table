import ProTable from "../components/table/ProTable"

const fromDOMTable = (selector, options) => {
  const dom = document.querySelector(selector)
  const columns = getColumnsFromDom(dom)
  const rows = getRowsFromDom(dom, columns)

  console.log('fromTable', 'dom:', dom)
  console.log('fromTable', 'columns:', columns)
  console.log('fromTable', 'rows:', rows)

  const proTable = new ProTable(null, options)
  proTable.generateTable({
    columns,
    rows
  })

  console.log('fromTable', 'proTable:', proTable.$dom)

  // replace the dom input
  dom.replaceWith(proTable.$dom)
}

function getColumnsFromDom (table) {
  const firstTr = table.querySelector('thead tr')

  return Array.from(firstTr.children)
    .map(_child => _child.innerText)
}

function getRowsFromDom (table, columns) {
  const trs = table.querySelectorAll('tbody tr')

  return Array.from(trs)
    .map(_tr => {
      const row = {}

      columns.forEach((_column, _index) => {
        row[_column] = _tr.children[_index].innerText
      })

      return row
    })
}

export default fromDOMTable
