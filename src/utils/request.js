import axios from 'axios'

const baseURL = 'codingcase.zeiss.services'

const apiClient = axios.create({
  baseURL: `http://${baseURL}/api/v1`,
  headers: {
    'Content-type': 'application/json',
  },
})

export const websocketClient = new WebSocket(`ws://${baseURL}/ws`)

export const machineListRequest = async () => await apiClient.get(`/machines`)

export const machineDetailRequest = async (machine_id) =>
  await apiClient.get(`/machines/${machine_id}`)
