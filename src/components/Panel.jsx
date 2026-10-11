import { useState } from "react";

const Panel = ({ data, isOpen, setOpenPanel }) => {
  const toggleAccordion = () => {
    setOpenPanel();
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: "beige",
          cursor: "pointer",
        }}
        onClick={toggleAccordion}
      >
        {data.title}
      </div>
      {isOpen && <div>{data.description}</div>}
    </div>
  );
};

export default Panel;
