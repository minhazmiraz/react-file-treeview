import { Col, Container, Row } from "react-bootstrap";
import TreeView from "./components/TreeView";

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
  return (
    <div className="App">
      <Container className="m-5">
        <Row>
          <Col className=""></Col>
          <Col className="border col-md-3">
            <TreeView data={data} />
          </Col>
          <Col className=""></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
