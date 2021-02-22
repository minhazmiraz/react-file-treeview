import FileTreeView from "./components/FileTreeView";
import { Container } from "react-bootstrap";

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

  return (
    <div className="App">
      <Container className="mx-auto mt-5" style={{ width: "300px" }}>
        <FileTreeView data={data} action={action} />
      </Container>
    </div>
  );
}

export default App;
