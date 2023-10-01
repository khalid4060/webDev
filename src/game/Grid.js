import { useEffect, useState } from "react";

const Grid = () => {
  const ans = "HOUSE";
  const [Gridinput, setGridinput] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
  const [color, setcolor] = useState("colum");
  const handleOnchange = (event, rowindex, colindex) => {
    const newSate = [...Gridinput];
    newSate[rowindex][colindex] = event.target.value;

    setGridinput(newSate);
  };
  const checkans = (colindex, rowindex) => {
    const rowvalue = [...Gridinput[rowindex]];
    const userans = rowvalue.reduce((acc, curr) => {
      return acc + curr;
    });
    console.log(userans);
    if (userans === ans) {
      const newcolor = "Green";
      setcolor(newcolor);
      console.log(newcolor);
    }
  };

  const handleKeyPress = (e) => {};
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);
  return (
    <>
      <div className="GridContainer">
        {Gridinput.map((row, rowindex) => {
          return row.map((col, colindex) => {
            return (
              <div className={color}>
                <input
                  onKeyDown={(e) => {
                    if (e.key === "Enter") checkans(colindex, rowindex);
                  }}
                  value={col}
                  onChange={(e) => {
                    handleOnchange(e, rowindex, colindex);
                  }}
                />
              </div>
            );
          });
        })}
      </div>
    </>
  );
};
export default Grid;
