import React from 'react'

import { ExampleComponent, Table } from 'b14-table'
import 'b14-table/dist/index.css'

const App = () => {
  const columns = [
    {
      Header: 'First Name',
      accessor: 'firstName'
    },
    {
      Header: 'Last Name',
      accessor: 'lastName'
    }
  ]
  const data = [
    {
      id: 1,
      firstName: 'Amanda',
      lastName: 'Linasta',
      dateOfBirth: '02/04/1980',
      street: '43 8th Adison',
      city: 'Addison',
      state: 'Alabama',
      stateAbbrev: 'AL',
      zipCode: '35083',
      startDate: '02/05/2023',
      department: 'Sales'
    }
  ]
  return (
    <div>
      <ExampleComponent text='Create React Library Example 😄' />
      <Table columns={columns} data={data} />
    </div>
  )
}

export default App
