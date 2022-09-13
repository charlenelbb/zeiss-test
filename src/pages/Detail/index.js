import { Descriptions, Table } from 'antd'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { machineDetailRequest } from '../../utils/request'
import { renderStatus } from '../utils'

const columns = [
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
    render: renderStatus,
  },
  {
    title: 'timestamp',
    dataIndex: 'timestamp',
    key: 'timestamp',
  },
]

const Detail = () => {
  const { id } = useParams()
  const { data } = useQuery('machine detail', () => machineDetailRequest(id))
  const {
    events,
    floor,
    install_date,
    last_maintenance,
    latitude,
    longitude,
    machine_type,
    status,
  } = data?.data?.data || {}
  return (
    <div>
      <Descriptions title={id} bordered layout="vertical" size="middle">
        <Descriptions.Item label="id">{id}</Descriptions.Item>
        <Descriptions.Item label="floor">{floor}</Descriptions.Item>
        <Descriptions.Item label="install_date">
          {install_date}
        </Descriptions.Item>
        <Descriptions.Item label="last_maintenance">
          {last_maintenance}
        </Descriptions.Item>
        <Descriptions.Item label="latitude">{latitude}</Descriptions.Item>
        <Descriptions.Item label="longitude">{longitude}</Descriptions.Item>
        <Descriptions.Item label="machine_type">
          {machine_type}
        </Descriptions.Item>
        <Descriptions.Item label="status" span={2}>
          {renderStatus(status)}
        </Descriptions.Item>
        <Descriptions.Item label="events" span={3}>
          <div>
            <Table columns={columns} dataSource={events} showHeader={false} />
          </div>
        </Descriptions.Item>
        {/* {Object.entries(restProps).forEach(([key, value]) => {
            console.log('key', key)
            console.log('value', value)
            return <Descriptions.Item label={key}>{value}</Descriptions.Item>
          })} */}
      </Descriptions>
    </div>
  )
}

export default Detail
