import React from "react";
import { DropzoneArea } from "material-ui-dropzone";

const DropzoneAreaExample = (props: { onchange: any }) => {
  return (
    <DropzoneArea
      filesLimit={1}
      dropzoneText="Drag and drop une image ou cliquer"
      showPreviews={true}
      acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
      showPreviewsInDropzone={false}
      onChange={props.onchange}
    ></DropzoneArea>
  );
};

export default DropzoneAreaExample;
