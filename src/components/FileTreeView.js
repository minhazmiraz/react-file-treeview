import { useState } from "react";
import FileTree from "./FileTree";

const FileTreeView = (props) => {
  const [collapseAll, setCollapseAll] = useState(false);

  const handleCollapseAll = (value) => setCollapseAll(value);

  return (
    <div className="border rounded-top">
      <div className="alert">
        <span>
          <b>{props.data.name}</b>
        </span>
        <span className="float-right" onClick={() => setCollapseAll(true)}>
          <img src="collapse-arrow.png" alt="" width="12" />
        </span>
      </div>
      <div className="px-4 pb-3">
        <FileTree
          data={props.data}
          action={props.action}
          collapseAll={{ collapseAll, handleCollapseAll }}
        />
      </div>
    </div>
  );
};

export default FileTreeView;
