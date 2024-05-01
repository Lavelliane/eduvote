import { Progress } from 'antd'

export const leaderboardColumns = [
  {
    title: 'No',
    dataIndex: 'number',
    width: 200,
    key: 'number'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 200,
    key: 'name'
  },
  {
    title: 'Party',
    dataIndex: 'party',
    width: 200,
    key: 'party',
    render: (text) => (
      <span
        style={{
          color: '#5BBCFF',
          borderColor: '#41C9E2',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderRadius: '6px',
          paddingLeft: '10px',
          paddingRight: '10px',
          backgroundColor: '#F6F5F5'
        }}
      >
        {text}
      </span>
    )
  },
  {
    dataIndex: 'votePercentage',
    key: 'votePercentage',
    width: 200,
    render: (text, record) => {
      const isWinning = record.isWinning
      return <Progress percent={Number.parseInt(text)} strokeColor={isWinning ? '#00ac4f' : '#FA7070'} />
    }
  },
  {
    title: 'Total Votes',
    dataIndex: 'totalVotes',
    width: 200,
    key: 'totalVotes'
  }
]
