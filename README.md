# React File TreeView

A simple, flexible file hierarchy tree component for react.

## Usage

```javascript
import FileTreeView from "react-file-treeview";

//create tree data
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
          name: "folder2",
          id: 5,
          child: [
            { name: "file3.py", id: 6, child: [] },
            { name: "file4.cpp", id: 7, child: [] },
          ],
        },
        { name: "file1.js", id: 3, child: [] },
        { name: "file2.ts", id: 4, child: [] },
      ],
    },
  ],
};

//Create action data
const handleFileOnClick = (file) => {
  console.log(file);
};

const action = {
  fileOnClick: handleFileOnClick,
};

//Create Decoration data
const treeDecorator = {
  showIcon: true,
  iconSize: 18,
  textSize: 15,
  showCollapseAll: true,
};

//Call the FileTreeView Component
<FileTreeView data={data} action={action} decorator={treeDecorator} />;
```

### Package Used

- `create react app`
- `react-bootstraps`
- `bootstrap`
- `file-extension-icon-JS`

### Demo

![react-file-treeview.gif](./react-file-treeview.gif)
