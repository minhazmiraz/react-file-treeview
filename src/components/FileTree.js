import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import {
  getMaterialFolderIcon,
  getMaterialFileIcon,
} from "file-extension-icon-js";
import rightArrow from "./assets/right-arrow.png";
import downArrow from "./assets/down-arrow.png";

const FileTree = (props) => {
  const treeData = props.data;
  const treeAction = props.action;
  const treeDecorator = props.decorator;
  const collapseAll = treeData.id > 1 ? props.collapseAll.collapseAll : false;

  const [isToggled, setIsToggled] = useState(
    treeData.toggled === undefined ? false : treeData.toggled
  );

  if (collapseAll && isToggled) setIsToggled(false);

  const handleOnClick = () => {
    props.collapseAll.handleCollapseAll(false);
    if (treeData.child.length) setIsToggled(!isToggled);
    else if (treeAction.fileOnClick) treeAction.fileOnClick(treeData);
  };

  const treeIcon = (name, type) => {
    //type: 0 - file, 1 - folder, 2 - open folder
    let iconSrc = "";
    let iconAlt = "";
    switch (type) {
      case 0:
        iconSrc = getMaterialFileIcon(name);
        iconAlt = "file-" + name;
        break;
      case 1:
        iconSrc = getMaterialFolderIcon(name);
        iconAlt = "folder-" + name;
        break;
      case 2:
        iconSrc = getMaterialFolderIcon(name, 1);
        iconAlt = "folder-" + name;
        break;

      default:
        break;
    }

    const icon = (
      <img src={iconSrc} alt={iconAlt} width={treeDecorator.iconSize} />
    );

    return <span className="m-1">{icon}</span>;
  };

  const treeName = (
    <div onClick={() => handleOnClick()} role="button">
      {treeData.child.length && !isToggled ? (
        <span>
          <img src={rightArrow} alt="" width="8" />
          {treeDecorator.showIcon && treeIcon(treeData.name, 1)}
        </span>
      ) : treeData.child.length ? (
        <span>
          <img src={downArrow} alt="" width="8" />
          {treeDecorator.showIcon && treeIcon(treeData.name, 2)}
        </span>
      ) : (
        treeDecorator.showIcon && treeIcon(treeData.name, 0)
      )}
      <span className="m-1" style={{ fontSize: treeDecorator.textSize }}>
        {treeData.name}
      </span>
    </div>
  );

  const treeChild =
    treeData.child.length > 0 &&
    treeData.child.map((item) => (
      <div style={treeData.id > 1 ? { margin: "10px" } : {}} key={item.id}>
        <FileTree
          data={item}
          action={treeAction}
          collapseAll={props.collapseAll}
          decorator={treeDecorator}
        />
      </div>
    ));

  return (
    <div className="tree" id={"tree" + treeData.id}>
      {treeData.id > 1 && <div className="treeName">{treeName}</div>}
      <Collapse in={isToggled && !collapseAll}>
        <div className="treeChild" id={"tree-" + treeData.id + "-child"}>
          {treeChild}
        </div>
      </Collapse>
    </div>
  );
};

export default FileTree;
