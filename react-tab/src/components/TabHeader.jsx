import React, { useState } from "react";

const TabHeader = ({ id, title, index, isActive, handleTabHeaderClick }) => {
  return (
    <button data-testid={id} onClick={() => handleTabHeaderClick(id)} className={isActive ? "active" : ""}>
      {title}
    </button>
  );
};

export default TabHeader;


// import React, { useState } from "react";

// const TabHeader = ({ id, title, index, isActive, handleTabHeaderClick }) => {
//   return (
//     // add "active" class to the button if isActive is true
//     <button data-testid={id}>
//       {title}
//     </button>
//   );
// };

// export default TabHeader;
