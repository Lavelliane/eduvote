import axios from 'axios'

export async function submitVote(data) {
  try {
    await axios.post('/api/vote', data)
  } catch (e) {
    console.error(e)
  }
}
