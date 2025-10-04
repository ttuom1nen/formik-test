import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table'
import type { ColumnDef } from '@tanstack/react-table'
import BootstrapTable from 'react-bootstrap/Table'
import styles from './index.module.scss'
import { FieldArray } from 'formik'

interface ReactTableProps<T extends object> {
  data: T[]
  columns: ColumnDef<T>[]
  name?: string
}

export const Table = <T extends object>({
  data,
  columns,
  name
}: ReactTableProps<T>) => {

  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <BootstrapTable
      striped
      bordered
      hover
      responsive
    >
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                {...{
                  key: header.id,
                  colSpan: header.colSpan,
                  style: {
                    width: header.getSize(),
                  },
                }}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        <FieldArray
          name={name ?? ''}
          render={arrayHelpers => (
            <>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      {...{
                        key: cell.id,
                        style: {
                          width: cell.column.getSize(),
                        },
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </>
          )} />
      </tbody>
    </BootstrapTable>
  )
}
