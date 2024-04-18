import axios from 'axios'

export async function createCandidate(data) {
  try {
    const res = await axios.post('/api/candidate', data)
    return res.data
  } catch (e) {
    console.error(e)
  }
}

export async function updateCandidate(data) {
  try {
    await axios.patch('/api/candidate', data)
  } catch (e) {
    console.error(e)
  }
}

export async function deleteCandidate(data) {
  try {
    await axios.delete('/api/candidate', {
      data
    })
  } catch (error) {
    console.error(error)
  }
}
