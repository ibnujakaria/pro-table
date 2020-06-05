[![](https://img.shields.io/npm/v/protable)](https://www.npmjs.com/package/protable)
[![](https://img.shields.io/npm/dt/protable)](https://www.npmjs.com/package/protable)
[![](https://img.shields.io/jsdelivr/npm/hm/protable)](https://www.jsdelivr.com/package/npm/protable)
[![](https://img.shields.io/github/size/ibnujakaria/protable/dist/protable.min.js)]()
[![](https://img.shields.io/github/release-date/ibnujakaria/protable)](https://github.com/ibnujakaria/protable/)
[![](https://img.shields.io/npm/l/protable)](https://www.npmjs.com/package/protable)

# ProTable
A data-table alternative written with modern javascript.

## Docs

Open [Full Documentation](https://protable.jagongoding.com).

## Basic Usage

### Installation

```bash
npm i protable
```

### Create From Array

HTML container:
```html
<div id="table-from-array"></div>
```

Js: 
```js
import { fromArray } from 'protable'

fromArray('#table-from-array', [
  {
    name: 'Nurul Huda',
    relationship: 'Married',
    blog: 'https://jagongoding.com'
  },
  {
    name: 'Abdullah Wahid',
    city: 'Bangkalan'
  },
  {
    city: 'Lamongan',
    name: 'Lendis Fabri',
    blog: 'https://kopiding.in'
  },
  {
    name: 'Elmo Bachtiar',
    relationship: 'Single'
  }
])
```

Table Output:

<table><thead><tr><th>Name</th><th>Relationship</th><th>Blog</th><th>City</th></tr></thead><tbody><tr><td>Nurul Huda</td><td>Married</td><td><a href="https://jagongoding.com">https://jagongoding.com</a></td><td>-</td></tr><tr><td>Abdullah Wahid</td><td>-</td><td>-</td><td>Bangkalan</td></tr><tr><td>Lendis Fabri</td><td>-</td><td><a href="https://kopiding.in">https://kopiding.in</a></td><td>Lamongan</td></tr><tr><td>Elmo Bachtiar</td><td>Single</td><td>-</td><td>-</td></tr></tbody></table>

### Create Complex Table From Array

```js
import { fromArray } from 'protable'

fromArray('#table-from-array-2', [
  {
    name: 'Nurul Huda',
    birth: {
      day: 1,
      month: 'January',
      year: 1996
    },
    city: 'Surabaya'
  },
  {
    name: 'Wahid Abdullah',
    birth: {
      day: 2,
      month: 'February',
      year: 1996
    },
    city: 'Bangkalan'
  },
  {
    name: 'Lendis Fabri',
    birth: {
      day: 3,
      month: 'Maret',
      year: 1996
    },
    city: 'Lamongan'
  }
])
```

Table Output:

<table><thead><tr><th rowspan="2">Name</th><th colspan="3">Birth</th><th rowspan="2">City</th></tr><tr><th>Day</th><th>Month</th><th>Year</th></tr></thead><tbody><tr><td>Nurul Huda</td><td>1</td><td>January</td><td>1996</td><td>Surabaya</td></tr><tr><td>Wahid Abdullah</td><td>2</td><td>February</td><td>1996</td><td>Bangkalan</td></tr><tr><td>Lendis Fabri</td><td>3</td><td>Maret</td><td>1996</td><td>Lamongan</td></tr></tbody></table>

## License

The Pro Table library is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
