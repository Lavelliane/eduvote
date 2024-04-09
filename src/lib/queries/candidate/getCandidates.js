import axios from 'axios'

export async function getCandidates() {
  try {
    const data = await axios.get('/api/candidate')
    return data.data.candidates
  } catch (e) {
    console.error(e)
  }
}
