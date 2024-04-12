'use client'
import AddButton from '@/components/AddButton'
import { Card } from 'antd'
import PartylistCard from '@/components/PartylistCard'
import React from 'react'
import { Segmented, Tabs } from 'antd'
import Party from '@/components/Party'
import Candidate from '@/components/Candidate'
import CandidateLayout from '@/components/Layouts/CandidateLayout'

const dummyCandidates = [
  { name: 'Jhury', position: 'Governor' },
  { name: 'Fretchel', position: 'Vice Governor' },
  { name: 'Jhury', position: 'Secretary' },
  { name: 'Jhury', position: 'Treasurer' },
  { name: 'Jhury', position: 'Governor' },
  { name: 'Jhury', position: 'Governor' }
]
const dummyCandidates2 = [
  { name: 'Mark', position: 'Governor' },
  { name: 'Vince', position: 'Governor' },
  { name: 'Jhury', position: 'Governor' },
  { name: 'Jhury', position: 'Governor' },
  { name: 'Jhury', position: 'Governor' },
  { name: 'Jhury', position: 'Governor' }
]

const parties = [{ name: 'Atup' }, { name: 'Dibdib' }]

const onChange = (key) => {
  console.log(key)
}

const App = () => {
  const [alignValue, setAlignValue] = React.useState('center')

  const items = [
    {
      key: '1',
      label: 'Partylist',
      children: (
        <>
          <Party />
        </>
      )
    },
    {
      key: '2',
      label: 'Candidates',
      children: (
        <>
          <CandidateLayout />
        </>
      )
    }
  ]

  return (
    <>
    <div className='w-auto bg-white h-screen px-10 py-6 rounded-lg'>
    <Tabs
        defaultActiveKey='1'
        items={items}
        onChange={onChange}
        indicator={{
          size: (origin) => origin - 20,
          align: alignValue
        }}
      />
    </div>
      
    </>
  )
}

export default App
