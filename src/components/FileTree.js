import { useState } from "react";
import { Collapse } from "react-bootstrap";
import {
  BsArrowRightShort,
  BsArrowDownShort,
  BsFileEarmarkCode,
} from "react-icons/bs";

const FileTree = (props) => {
  const [isToggled, setIsToggled] = useState(
    props.data.toggled === undefined ? false : props.data.toggled
  );

  const collapseAll = props.data.id > 1 ? props.collapseAll.collapseAll : false;

  if (collapseAll && isToggled) setIsToggled(false);

  const treeChild =
    props.data.child.length > 0 &&
    props.data.child.map((item) => (
      <div style={{ margin: "10px" }} key={item.id}>
        <FileTree
          data={item}
          action={props.action}
          collapseAll={props.collapseAll}
        />
      </div>
    ));

  const handleOnClick = () => {
    if (props.data.id > 1) {
      props.collapseAll.handleCollapseAll(false);
      if (props.data.child.length) setIsToggled(!isToggled);
      else props.action.fileOnClick(props.data);
    }
  };

  return (
    <div className="tree" id={"tree" + props.data.id}>
      <div className="treeName" onClick={() => handleOnClick()} role="button">
        {props.data.child.length && !isToggled ? (
          <BsArrowRightShort />
        ) : props.data.child.length ? (
          <BsArrowDownShort />
        ) : (
          <BsFileEarmarkCode />
        )}
        <span style={{ margin: "10px" }}>{props.data.name}</span>
      </div>

      <Collapse in={isToggled && !collapseAll}>
        <div className="treeChild" id={"tree-" + props.data.id + "-child"}>
          {treeChild}
        </div>
      </Collapse>
    </div>
  );
};

export default FileTree;
