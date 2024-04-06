import { Card } from "antd";
import { Space, Table, Tag } from "antd";


function DashboardPage() {
  return (
    <>
  
      <Card className="h-40 w-[54%] flex items-center rounded-md border border-[#E6EDFF] font-sans">
        <div className="flex items-center">
          <div className="flex items-center flex-col mr-8 p-6">
            <h1 className="mr-2 font-semibold text-3xl">300</h1>
            <p className="text-sm whitespace-nowrap">Total votes</p>
          </div>
          <div className="ml-8 mb-10">
            <img className="w-24 h-24" src="icon.svg" alt="users" />
          </div>
          <hr className="h-30 w-28 transform rotate-90 bg-[#E6EDFF]" />
          <div className="flex items-center flex-col ml-8">
            <h1 className="font-semibold text-3xl mr-auto">0</h1>
            <p className="text-sm whitespace-nowrap">Registered Voters</p>
          </div>
          <div className="ml-10 mb-10">
            <img className="w-24 h-24" src="registervoter.svg" alt="register" />
          </div>
          <hr className="h-30 w-28 transform rotate-90 bg-[#E6EDFF]" />
        </div>
      </Card>

      <Card className="mt-6 rounded-md border border-[#E6EDFF] flex fontFamily-sans">
        <div>
          <div className="flex items-center ">
            <h1 className="font-bold text-lg">Ranking</h1>
            <p className="text-[#7C8DB5] text-[12px] mr-auto">12:30 PM, May 7</p>
          </div>
          <div className="flex justify-center text-center m-auto">
            <h4>Governor</h4>
          </div>
          <Table>
          
       
    
          </Table>
        </div>
      </Card>
    </>
  );
}
export default DashboardPage;
