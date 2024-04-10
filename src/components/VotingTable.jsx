import { Button, Table } from 'antd'
import { useState } from 'react'

const dataSource = [
  {
    key: '1',
    no: 1,
    name: 'John Doe',
    partylist: 'Sample Party A',
    action: <Button type='link'>View Details</Button>
  },
  {
    key: '2',
    no: 2,
    name: 'Jane Smith',
    partylist: 'Sample Party B',
    action: <Button type='link'>View Details</Button>
  }
  // Add more data objects as needed
]

const columns = [
  {
    title: 'No',
    key: 'no',
    dataIndex: 'no'
  },
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name'
  },
  {
    title: 'Partylist',
    key: 'partylist',
    dataIndex: 'partylist'
  },
  {
    key: 'action',
    dataIndex: 'action'
  }
]

export default function VotingTable({ position, data, handleVoteChange, index }) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const onSelectChange = (newSelectedRowKeys) => {
    handleVoteChange({ ...newSelectedRowKeys, position }, index)
  }

  return (
    <>
      <p className='flex items-center justify-center text-lg font-semibold mb-4 mt-5'>{position}</p>
      <style>
            {`
              .custom-table .ant-table-cell {
                background-color: transparent !important;
              }

              .ant-table-cell::before{
             
              }
            `}
          </style>
      <Table
        columns={columns}
        rowSelection={{
          type: 'radio',
          onSelect: onSelectChange
        }}
        dataSource={data}
        pagination={false}
        className="custom-table"
      />
    </>
  )
}
