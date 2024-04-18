import { Component } from "react";
import "./style.css";

class Antd extends Component {
  constructor() {
    super();
    this.state = {
      theme: "oq",
    };
  }
  render() {
    const switchTheme = () => {
      if (this.state.theme === "oq") {
        this.setState({ theme: "qora" });
      } else {
        this.setState({ theme: "oq" });
      }
    };
    return (
      <div className={this.state.theme === "oq" ? "light" : "dark"}>
        <h1>Mapping</h1>
        {this.state.theme}
        <button onClick={switchTheme}>
          Uzgartirish {this.state.theme === "oq" ? "qora" : "oq"}
        </button>
      </div>
    );
  }
}

export default Antd;
