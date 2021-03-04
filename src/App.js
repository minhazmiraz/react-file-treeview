import { useState } from "react";
import FileTree from "./components/FileTree";
import collapseArrow from "./components/assets/collapse-arrow.png";

function App() {
  const data = {
    name: "treeview",
    id: 1,
    toggled: true,
    child: [
      {
        name: "folder1",
        id: 2,
        child: [
          {
            name: "folder3",
            id: 8,
            child: [
              { name: "file5.c", id: 9, child: [] },
              { name: "file6.jl", id: 10, child: [] },
            ],
          },
          { name: "file1.js", id: 3, child: [] },
          { name: "file2.ts", id: 4, child: [] },
        ],
      },
      {
        name: "folder2",
        id: 5,
        child: [
          { name: "file3.py", id: 6, child: [] },
          { name: "file4.cpp", id: 7, child: [] },
        ],
      },
    ],
  };

  const [collapseAll, setCollapseAll] = useState(false);

  const handleCollapseAll = (value) => setCollapseAll(value);

  const handleFileOnClick = (file) => {
    console.log(file);
  };

  const action = {
    fileOnClick: handleFileOnClick,
  };

  const treeDecorator = {
    showIcon: true,
    iconSize: 18,
    textSize: 15,
    showCollapseAll: true,
  };

  const collapseAllButton = () => {
    return (
      <span
        className="float-right"
        onClick={() => setCollapseAll(true)}
        role="button"
      >
        <img src={collapseArrow} alt="collapse-arrow" width="12" />
      </span>
    );
  };

  return (
    <div className="App">
      <div className="container mx-auto mt-5" style={{ width: "300px" }}>
        <div className="border rounded-top">
          <div className="alert">
            <span>
              <b>{data.name}</b>
            </span>
            {treeDecorator.showCollapseAll && collapseAllButton()}
          </div>
          <div className="px-4 pb-3">
            <FileTree
              data={data}
              action={action}
              collapseAll={{ collapseAll, handleCollapseAll }}
              decorator={treeDecorator}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
