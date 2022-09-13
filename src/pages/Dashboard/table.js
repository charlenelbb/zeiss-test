import { Space, Table, Tag } from 'antd'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { machineListRequest } from '../../utils/request'
import * as ROUTES from '../../routes/constant'
import { renderStatus } from '../utils'

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'floor',
    dataIndex: 'floor',
    key: 'floor',
  },
  {
    title: 'install_date',
    dataIndex: 'install_date',
    key: 'install_date',
  },
  {
    title: 'last_maintenance',
    key: 'last_maintenance',
    dataIndex: 'last_maintenance',
  },
  {
    title: 'latitude',
    key: 'latitude',
    dataIndex: 'latitude',
  },
  {
    title: 'longitude',
    key: 'longitude',
    dataIndex: 'longitude',
  },
  {
    title: 'machine_type',
    key: 'machine_type',
    dataIndex: 'machine_type',
  },
  {
    title: 'status',
    key: 'status',
    dataIndex: 'status',
    render: renderStatus,
  },
]
const ListTable = () => {
  const { data } = useQuery('machineList', machineListRequest)
  const navigate = useNavigate()
  return (
    <Table
      columns={columns}
      dataSource={data?.data?.data || []}
      onRow={(record) => ({
        onClick: (e) => navigate(`${ROUTES.DETAIL}/${record.id}`),
      })}
    />
  )
}
export default ListTable
