import { Component } from "react";
import { Button, Modal } from "antd";

class Con extends Component {
  constructor() {
    super();
    this.state = {
      isMadal: false,
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Mapping</h1>
        <h1>{this.state.isMadal}</h1>
        <Modal title={"I'm title"} open={false}>
          <h1>Modal</h1>
        </Modal>
        <Button onClick={this.setState({ isMadal: true })}>
          Open to Madal
        </Button>
      </div>
    );
  }
}

export default Con;
