import axios from 'axios'

export async function getPartyById(id) {
  try {
    const partyData = await axios.get(`/api/party/${id}`)
    return partyData.data.parties
  } catch (error) {
    console.error(error)
  }
}
