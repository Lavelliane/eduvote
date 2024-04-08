import axios from 'axios'

export async function createParty(data) {
  try {
    await axios.post('/api/party', data)
  } catch (error) {
    console.error(error)
  }
}
