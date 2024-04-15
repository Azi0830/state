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
        <Modal
          onCancel={() => {
            this.setState({ isMadal: false });
          }}
          title={"menman usha"}
          open={this.state.isMadal ? true : false}
        >
          MODAL
        </Modal>
        <Button
          onClick={() => {
            this.setState(() => {
              this.setState({ isMadal: true });
            });
          }}
          type="primary"
        >
          Open Modal
        </Button>
      </div>
    );
  }
}

export default Con;
