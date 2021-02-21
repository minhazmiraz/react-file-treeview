import { useState } from "react";
import { BsArrowsCollapse } from "react-icons/bs";
import FileTree from "./FileTree";

const FileTreeView = (props) => {
  const [collapseAll, setCollapseAll] = useState(false);

  const handleCollapseAll = (value) => setCollapseAll(value);

  return (
    <div className="border border-primary rounded-top">
      <div className="alert alert-primary">
        <span>File Tree View</span>
        <span className="float-right" onClick={() => setCollapseAll(true)}>
          <BsArrowsCollapse />
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
