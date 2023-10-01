import React, { useState } from "react";
import { json } from "stream/consumers";

const Suduko = () => {
  const [Grid, setGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const handleClick = async () => {
    const url = "http://127.0.0.1:5000";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sudoku: [
          "9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254",
        ],
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  const handleinput = (num, rowindex, colindex) => {
    console.log(num, rowindex, colindex);
    const newgrid = [...Grid];
    newgrid[rowindex][colindex] = num;
    // for (let rindex = 0; rindex < newgrid.length; rindex++) {
    //     for (let cindex = 0; cindex < newgrid[rindex].length; cindex++) {

    //   }
    // }

    setGrid(newgrid);
  };
  return (
    <>
      <div className="Grid">
        {Grid.map((row, rowindex) => {
          return row.map((col, colindex) => {
            return (
              <div className="cell">
                <input
                  type="text"
                  value={col}
                  onChange={(e) => {
                    handleinput(e.target.value, rowindex, colindex);
                  }}
                />
              </div>
            );
          });
        })}
      </div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Solve
      </button>
    </>
  );
};

export default Suduko;
