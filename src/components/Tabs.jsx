import AddButton from "@/components/AddButton";
import { Card } from "antd";
import PartylistCard from "@/components/PartylistCard";
import React from "react";
import { Segmented, Tabs } from "antd";

const dummyPartylist = {
  title: "Atup",
};

const ButtonName = {
  buttonName: "Add",
};

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: "Partlist",
    children: (
      <>
       <div className="flex  gap-3 items-center mt-3">
          <h1 className="font-bold ">Partylist A</h1>
          <AddButton data={ButtonName} buttonName="Add Partylist" />
        </div>
        <PartylistCard data={dummyPartylist} title="Atup" />


        <div className="flex  gap-3 items-center mt-8">
          <h1 className="font-bold ">Partylist B</h1>
          <AddButton data={ButtonName} buttonName="Add Partylist" />
        </div>
        <PartylistCard data={dummyPartylist} title="Dibdib" />
        
        
      </>
    ),
  },
  {
    key: "2",
    label: "Candidates",
    children: (
      <>
        <div className="flex  gap-3 items-center mt-3">
          <h1 className="font-bold ">Partylist A</h1>
          <AddButton data={ButtonName} buttonName="Add Candidates" />
        </div>
        <PartylistCard data={dummyPartylist} title="Mary Joy Gumanid" />


        <div className="flex  gap-3 items-center mt-8">
          <h1 className="font-bold ">Partylist B</h1>
          <AddButton data={ButtonName} buttonName="Add Candidates" />
        </div>
        <PartylistCard data={dummyPartylist} title="Lourence Dada" />
        
      </>
    ),
  },
];

const App = () => {
  const [alignValue, setAlignValue] = React.useState("center");

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        indicator={{
          size: (origin) => origin - 20,
          align: alignValue,
        }}
      />
    </>
  );
};

export default App;
