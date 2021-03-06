import test from 'ava'
import { fromArray, templateOptions, fromServer } from 'protable'
import data from '../example/data/employee-dummy.json'

test('create proTable from array', t => {
	const data = [
		{ id: 1, name: 'Nurul Huda' },
		{ id: 2, name: 'Lendis Fabri' },
		{ id: 3, name: 'Wahid Abdullah' },
	]
	const proTable = fromArray(null, data)

	proTable.tbody.trs.forEach((_tr, i) => {
		_tr.childs.forEach((_child) => {
			t.true(
				data[i][_child.key] == _child.$dom.innerHTML
			)
		})
	})
})

// from server
test.todo('create a test for proTable from server')
// test('create proTable from server', t => {
// 	t.pass()
// })

// foundation
test('foundationTemplate', t => {
	const proTable = fromArray(null, {
		columns: ['no', 'name', 'email', 'gender', 'phone'],
		rows: data
	}, {
		...templateOptions.foundation,
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

	t.pass()
})

test.todo('Test from table')