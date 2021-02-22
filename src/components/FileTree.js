import { useState } from "react";
import { Collapse } from "react-bootstrap";
import { InlineIcon } from "@iconify/react-with-api";
import {
  getIconForFile,
  getIconForFolder,
  getIconForOpenFolder,
} from "vscode-icons-js";

const FileTree = (props) => {
  const [isToggled, setIsToggled] = useState(
    props.data.toggled === undefined ? false : props.data.toggled
  );

  const collapseAll = props.data.id > 1 ? props.collapseAll.collapseAll : false;

  if (collapseAll && isToggled) setIsToggled(false);

  const handleOnClick = () => {
    props.collapseAll.handleCollapseAll(false);
    if (props.data.child.length) setIsToggled(!isToggled);
    else props.action.fileOnClick(props.data);
  };

  const getFolderIcon = (folderName, open = 0) => {
    return (
      <InlineIcon
        icon={
          "vscode-icons:" +
          (open
            ? getIconForOpenFolder(folderName)
                .split(".")
                .shift()
                .replace(/_/g, "-")
            : getIconForFolder(folderName)
                .split(".")
                .shift()
                .replace(/_/g, "-"))
        }
      />
    );
  };

  const getFileIcon = (fileName) => {
    return (
      <InlineIcon
        icon={
          "vscode-icons:" +
          getIconForFile(fileName).split(".").shift().replace(/_/g, "-")
        }
      />
    );
  };

  const treeName = (
    <div onClick={() => handleOnClick()} role="button">
      {props.data.child.length && !isToggled ? (
        <span>
          <img src="right-arrow.png" alt="" width="8" />
          <span className="m-1">{getFolderIcon(props.data.name)}</span>
        </span>
      ) : props.data.child.length ? (
        <span>
          <img src="down-arrow.png" alt="" width="8" />
          <span className="m-1">{getFolderIcon(props.data.name, 1)}</span>
        </span>
      ) : (
        <span className="m-1">{getFileIcon(props.data.name)}</span>
      )}
      <span style={{ fontSize: "15px" }}>{props.data.name}</span>
    </div>
  );

  const treeChild =
    props.data.child.length > 0 &&
    props.data.child.map((item) => (
      <div style={props.data.id > 1 ? { margin: "10px" } : {}} key={item.id}>
        <FileTree
          data={item}
          action={props.action}
          collapseAll={props.collapseAll}
        />
      </div>
    ));

  return (
    <div className="tree" id={"tree" + props.data.id}>
      {props.data.id > 1 && <div className="treeName">{treeName}</div>}
      <Collapse in={isToggled && !collapseAll}>
        <div className="treeChild" id={"tree-" + props.data.id + "-child"}>
          {treeChild}
        </div>
      </Collapse>
    </div>
  );
};

export default FileTree;
