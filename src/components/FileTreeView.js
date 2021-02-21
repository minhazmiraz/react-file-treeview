import { Col, Container, Row } from "react-bootstrap";
import FileTree from "./FileTree";

const FileTreeView = (props) => {
  return (
    <div>
      <Container className="m-5">
        <Row>
          <Col className=""></Col>
          <Col className="border col-md-3">
            <FileTree data={props.data} />
          </Col>
          <Col className=""></Col>
        </Row>
      </Container>
    </div>
  );
};

export default FileTreeView;
