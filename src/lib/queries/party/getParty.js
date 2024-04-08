import axios from 'axios'

export async function getParties() {
  try {
    const partyData = await axios.get('/api/party')
    return partyData.data.parties
  } catch (error) {
    console.error(error)
  }
}
