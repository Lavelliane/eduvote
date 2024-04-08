import axios from 'axios'

export async function updateParty(data) {
    try {
      await axios.patch(`/api/party`, data)
    } catch (error) {
      console.error(error)
    }
}