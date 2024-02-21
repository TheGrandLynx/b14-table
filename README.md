# table-plugin - P14 OpenClassrooms

https://github.com/TheGrandLynx/b14-table.git
_Formation Développeur d'application - JavaScript React_

## Description:

p14-table-plugin is a react component built to make the creation of dynamic table easier. it allows the possibility to sort, filter and pagine your data.

## Prerequisites:

- [Node.js](https://nodejs.org/en/) > v16
- [VS Code](https://code.visualstudio.com/) recommended IDE
- A bash terminal ex : [windows cmd]

## Installation

You can install p14-table-plugin by use npm :

### with npm:

```bash
npm install p14-table-plugin
```

## Use:

```javascript
import React from 'react'
import Table from 'p14-table-plugin'

const App = () => {
  const colums = [
    {
      /* The columns of your table */
    }
  ]
  const data = [
    {
      /* The data of your table */
    }
  ]

  return <p14-table-plugin columns={columns} data={data} />
}

export default App
```

## Props :

| Prop    | Type  | Description                                |
| ------- | ----- | ------------------------------------------ |
| columns | Array | The names of your table's columns          |
| data    | Array | The data you want to display in your table |

## Personalization:

You can customize the style of the p14-table-plugin by overriding CSS classes. Check the style file to see the available classes.

## Contribute:

Contributions are always welcome! To contribute, please fork the repository, create a branch, make your changes, and submit a pull request.

## License:

[MIT](https://opensource.org/licenses/MIT)
