import { Button, Card } from "antd";
import { EditOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';

function PartylistCard({ title, data }) {
  return (
   <>
  <Card className="mt-10 w-[70%]">
          <div className="flex items-center">
          <div className="flex items-center">
          <h1>{title}</h1>
          </div>
          <div className="flex items-center ml-auto gap-6">
          <EditOutlined />
          <DeleteOutlined />
          </div>
          </div>
          
         
        </Card>
   </>
  );
 }
 export default PartylistCard;
 