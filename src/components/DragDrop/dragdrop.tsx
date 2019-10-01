import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";

class DropzoneAreaExample extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files: any) {
    this.setState({
      files: files
    });
  }
  render() {
    return <DropzoneArea onChange={this.handleChange.bind(this)} />;
  }
}

export default DropzoneAreaExample;
