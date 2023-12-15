import React, { useMemo } from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import { Table } from '../../components/common/Table'

// interface FeatureToggle {
//   id: string
//   title: string
//   description: string
//   isOn: boolean
//   toggleDate: string | null
//   toggledBy: string | null
// }

// const mockData: FeatureToggle[] = [
//   {
//     id: '890dd04c-6d03-5463-a82b-cce5bacff101',
//     title: 'New toggle',
//     description:
//       'fresh short dull wore skin call mouth seven cannot program get goose hardly class larger war are musical better industrial stranger horse similar run',
//     isOn: false,
//     toggleDate: null,
//     toggledBy: null,
//   },
// ]

type Item = {
  name: string
  price: number
  quantity: number
}

const FeatureToggles = () => {
  const cols = useMemo<ColumnDef<Item>[]>(
    () => [
      {
        header: 'Name',
        cell: (row) => row.renderValue(),
        accessorKey: 'name',
      },
      {
        header: 'Price',
        cell: (row) => row.renderValue(),
        accessorKey: 'price',
      },
      {
        header: 'Quantity',
        cell: (row) => row.renderValue(),
        accessorKey: 'quantity',
      },
    ],
    []
  )

  const dummyData = () => {
    const items = []
    for (let i = 0; i < 10; i++) {
      items.push({
        id: i,
        name: `Item ${i}`,
        price: 100,
        quantity: 1,
      })
    }
    return items
  }

  return <Table data={dummyData()} columns={cols} />
}

export default FeatureToggles
