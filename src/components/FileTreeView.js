import React, { useState } from "react";
import FileTree from "./FileTree";
import collapseArrow from "./assets/collapse-arrow.png";

const FileTreeView = (props) => {
  const [collapseAll, setCollapseAll] = useState(false);

  const handleCollapseAll = (value) => setCollapseAll(value);

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
    <div className="border rounded-top">
      <div className="alert">
        <span>
          <b>{props.data.name}</b>
        </span>
        {props.decorator.showCollapseAll && collapseAllButton()}
      </div>
      <div className="px-4 pb-3">
        <FileTree
          data={props.data}
          action={props.action}
          collapseAll={{ collapseAll, handleCollapseAll }}
          decorator={props.decorator}
        />
      </div>
    </div>
  );
};

export default FileTreeView;
