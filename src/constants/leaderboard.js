import { Progress } from 'antd'

export const leaderboardColumns = [
  {
    title: 'No',
    dataIndex: 'number',
    key: 'number'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Party',
    dataIndex: 'party',
    key: 'party'
  },
  {
    dataIndex: 'votePercentage',
    key: 'votePercentage',
    render: (text, record) => {
      const isWinning = record.isWinning
      return <Progress percent={Number.parseInt(text)} strokeColor={isWinning ? '#00ac4f' : '#FA7070'} />
    }
  },
  {
    title: 'Total Votes',
    dataIndex: 'totalVotes',
    key: 'totalVotes'
  }
]
