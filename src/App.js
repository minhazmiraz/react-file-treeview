import FileTreeView from "./components/FileTreeView";

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

  return (
    <div className="App">
      <div className="container mx-auto mt-5" style={{ width: "300px" }}>
        <FileTreeView data={data} action={action} decorator={treeDecorator} />
      </div>
    </div>
  );
}

export default App;
