import { useState } from "react";
import { Collapse } from "react-bootstrap";
import {
  BsArrowRightShort,
  BsArrowDownShort,
  BsFileEarmarkCode,
} from "react-icons/bs";

const FileTree = (props) => {
  const [isToggled, setIsToggled] = useState(props.data.toggled ?? false);
  const treeChild =
    props.data.child.length > 0 &&
    props.data.child.map((item) => (
      <div style={{ margin: "10px" }} key={item.id}>
        <FileTree data={item} />
      </div>
    ));
  return (
    <div>
      <div
        className="treeName"
        onClick={() => setIsToggled(!isToggled)}
        aria-controls={props.data.id}
        aria-expanded={isToggled}
      >
        {props.data.child.length && !isToggled ? (
          <BsArrowRightShort />
        ) : props.data.child.length ? (
          <BsArrowDownShort />
        ) : (
          <BsFileEarmarkCode />
        )}
        <span style={{ margin: "10px" }}>{props.data.name}</span>
      </div>
      <Collapse in={isToggled}>
        <div
          className={"treeChild " + isToggled ? ".visible" : ".invisible"}
          id={props.data.id}
        >
          {treeChild}
        </div>
      </Collapse>
    </div>
  );
};

export default FileTree;
