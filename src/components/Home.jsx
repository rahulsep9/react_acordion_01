import { useState } from "react";
import Panel from "./Panel";

const accordionOptions = [
  {
    title: "option 1",
    description: "option 1 description",
  },
  {
    title: "option 2",
    description: "option 2 description",
  },
  {
    title: "option 3",
    description: "option 3 description",
  },
];

const Home = () => {
  const [openPanel, setOpenPanel] = useState(null);
  return (
    <div>
      <div>Acordion Example</div>
      <p>This is its parent page</p>
      {accordionOptions.map((option, index) => {
        return (
          <Panel
            key={option.title}
            data={option}
            isOpen={openPanel === index}
            setOpenPanel={() =>
              setOpenPanel((prev) => {
                return prev === index ? null : index;
              })
            }
          />
        );
      })}
    </div>
  );
};
export default Home;
