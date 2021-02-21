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
          { name: "file1", id: 3, child: [] },
          { name: "file2", id: 4, child: [] },
        ],
      },
      {
        name: "folder2",
        id: 5,
        child: [
          { name: "file3", id: 6, child: [] },
          { name: "file4", id: 7, child: [] },
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

  return (
    <div className="App">
      <FileTreeView data={data} action={action} />
    </div>
  );
}

export default App;
