import React from "react";
// layout이 있으면 , 무조건 layout이 먼저 적용(감싸짐)
function layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      layout
      {children}
    </div>
  );
}

export default layout;
