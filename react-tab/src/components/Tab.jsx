import React, { useState } from "react";
import TabHeader from './TabHeader';

const TabComponent = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState('tab1');

  const renderActiveTabContent = () => {
    const activeTabObject = tabsData.find(tab => tab.id === activeTab);
    const { component: ActiveComponent, data: activeTabData } = activeTabObject;
    return <ActiveComponent data={activeTabData} />;
  };
  // console.log(tabsData, 'hello');

  return (
    <>
      <div className="tabs">
        {tabsData.map((tab, index) => (
          <TabHeader
            key={index}
            id={tab.id}
            title={tab.title}
            isActive={activeTab === tab.id}
            handleTabHeaderClick={setActiveTab}
          />
        ))}
      </div>
      <div>{renderActiveTabContent()}</div>
    </>
  );
};

export default TabComponent;


// import React, { useState } from "react";
// import TabHeader from './TabHeader';

// const TabComponent = ({ tabsData }) => {
//   const renderActiveTabContent = () => {
//     // add the logic to read active tab's component from data and render it on page
//   };

//   const handleTabHeaderClick = (id) => {
//     // add the logic to update active tab based on selected tab's id
//   };

//   return (
//     <>
//       <div className="tabs">
//         {/* Render TabHeader dynamically based on tabsData recieved in props  */}
//           <TabHeader
//             key={1}
//             id={1}
//             title={"test"}
//             isActive={true}
//             handleTabHeaderClick={handleTabHeaderClick}
//           />
//       </div>
//       <div>{renderActiveTabContent()}</div>
//     </>
//   );
// };

// export default TabComponent;
