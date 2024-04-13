import { leaderboardColumns } from '@/constants/leaderboard'
import { Table, Card } from 'antd'

function LeaderboardTable({ data, showTitle, position }) {
  const currentDate = new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });

  return (
    <>
      <Card className='mt-6 rounded-2xl border border-[#E6EDFF] flex flex-col w-full'>
        {showTitle && (
          <div className='flex items-center justify-between px-4 py-2'>
            <h1 className='font-bold text-lg '>Ranking</h1>
            <p className='text-[#7C8DB5] text-[12px]'>{currentDate}</p>
          </div>
        )}
        <div className='flex justify-center text-center m-auto'>
          <h4 className='mt-5 mb-5 text-small font-semibold font-sans '>{position}</h4>
        </div>
        <div className='flex justify-center'>
        <style>
            {`
              .custom-table .ant-table-cell {
                background-color: transparent !important;
              }

              th.ant-table-cell{
               color: #718EBF;
              }
            `}
          </style>
          <Table columns={leaderboardColumns} dataSource={data} pagination={false} style={{ width: '100%'  }} className="custom-table" />
          
        </div>
      </Card>
    </>
  )
}
export default LeaderboardTable;
