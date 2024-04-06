import { leaderboardColumns } from "@/constants/leaderboard";
import { Table, Card } from "antd";

function LeaderboardTable({ data, showTitle, position }) {
 return (
  <>
   <Card className="mt-6 rounded-md border border-[#E6EDFF] flex fontFamily-sans">
    <div>
     {showTitle && (
      <div className="flex items-center ">
       <h1 className="font-bold text-lg">Ranking</h1>
       <p className="text-[#7C8DB5] text-[12px] mr-auto">12:30 PM, May 7</p>
      </div>
     )}
     <div className="flex justify-center text-center m-auto">
      <h4>{position}</h4>
     </div>

     <Table
      columns={leaderboardColumns}
      dataSource={data}
      pagination={false}
     />
    </div>
   </Card>
  </>
 );
}
export default LeaderboardTable;
