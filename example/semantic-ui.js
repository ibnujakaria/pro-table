import { fromArray, fromTable, templateOptions } from '../src/index'
import ProTable from '../src/components/table/ProTable'
import data from './data/employee-dummy.json'

let proTable = fromArray('#table', {
  columns: ['no', 'name', 'email', 'gender', 'phone'],
  rows: data
}, {
  ...templateOptions.semanticUI,
  contents: {
    no: content => ++content,
    gender: content => {
      return content === 'female' ?
        `<span class="badge badge-success">${content}</span>` :
        `<span class="badge badge-info">${content}</span>`
    },
    email: content => {
      return `<a href="mailto:${content}">${content}</a>`
    }
  }
})

console.log('proTable', proTable)