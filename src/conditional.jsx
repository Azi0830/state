import { Component } from "react";

class Con extends Component {
  constructor() {
    super();
    this.state = {
      theme: "light",
    };
  }

  render() {
    const swichThere = () => {
      if (this.state.theme === "dark")
        this.setState({
          theme: "light",
        });
      else
        this.setState({
          theme: "dark",
        });
    };

    return (
      <div className={this.state.theme === "light" ? "light" : "dark"}>
        <h1>hello</h1>
        {this.state.theme}
        <button onClick={swichThere}>
          swich to {this.state.theme === "light" ? "dark" : "light"}
        </button>
      </div>
    );
  }
}

export default Con;
