import { Tag } from 'antd'

export const renderStatus = (status) => {
  switch (status) {
    case 'running':
      return <Tag color="green">{status}</Tag>
    case 'finished':
      return <Tag color="yellow">{status}</Tag>
    case 'idle':
      return <Tag color="grey">{status}</Tag>
    case 'errored':
      return <Tag color="red">{status}</Tag>
    case 'repaired':
      return <Tag color="cyan">{status}</Tag>
    default:
      return <Tag>{status}</Tag>
  }
}
