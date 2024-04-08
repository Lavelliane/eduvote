import axios from 'axios'

export async function deleteParty(data) {
    try {
      await axios.delete("/api/party", {
        data
      })
    } catch (error) {
      console.error(error)
    }
}