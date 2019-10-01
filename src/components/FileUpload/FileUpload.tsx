import React from "react";
import { DropzoneArea } from "material-ui-dropzone";

const FileUpload = (props: { onchange: any }) => {
  const convertisseur = (img: File[]) => {
    const reader = new FileReader();
    reader.readAsDataURL(img![0]);
    reader.onload = evt => {
      // SEND TO AddModal
      let image = evt.target!;
      if (image && typeof image.result === "string") {
        props.onchange(image.result.split(",")[1]);
      }
    };
  };

  return (
    <DropzoneArea
      filesLimit={1}
      dropzoneText="Drag and drop une image ou cliquer"
      showPreviews={true}
      acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
      showPreviewsInDropzone={false}
      onChange={convertisseur}
    ></DropzoneArea>
  );
};

export default FileUpload;
