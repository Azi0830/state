import { Component } from "react";

class Antd extends Component {
  constructor() {
    super();
    this.state = {
      person: [
        {
          id: 1,
          name: "jon",
          age: 26,
          skill: "react",
          tags: ["java", "and"],
        },
        {
          id: 2,
          name: "doe",
          age: 33,
          skill: "java",
          tags: ["java", "vaqachon"],
        },
        {
          id: 3,
          name: "azi",
          age: 25,
          skill: "html",
          tags: ["javasprimt", "and"],
        },
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <h1>jim turing</h1>
        {this.state.person.map(({ name, age, skill, id, tags }) => {
          return (
            <div key={id}>
              <h1>{name}</h1>
              <h1>{age}</h1>
              <h1>{skill}</h1>
              <h2>
                {tags.map((value, index) => {
                  return <div key={index}>{value}</div>;
                })}
              </h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Antd;
