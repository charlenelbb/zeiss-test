import { Layout, notification } from 'antd'
import { useNavigate } from 'react-router-dom'
import './style.css'
import * as ROUTES from '../../routes/constant'
import { websocketClient } from '../../utils/request'
import React from 'react'
import ListTable from './table'
import { renderStatus } from '../utils'

const { Header, Content } = Layout

const Dashboard = () => {
  const navigate = useNavigate()
  const openNotification = (data) => {
    const { id, machine_id, status } = data
    const args = {
      key: id,
      message: 'machine status updates',
      description: (
        <div>
          machine id: <a>{machine_id}</a>, <br />
          status: {renderStatus(status)}
        </div>
      ),
      onClick: () => navigate(`${ROUTES.DETAIL}/${machine_id}`),
      // duration: 0,
    }
    notification.open(args)
  }

  websocketClient.onmessage = (event) => {
    const json = JSON.parse(event.data)
    console.log('json.payload', json.payload)
    openNotification(json.payload)
  }

  return (
    <Layout>
      <Header className="header">ZEISS MachineStream</Header>
      <Content style={{ padding: '20px' }}>
        <ListTable />
      </Content>
    </Layout>
  )
}
export default Dashboard
