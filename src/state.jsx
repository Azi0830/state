import { Component } from "react";
import "./style.css";

class State extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: "1",
          name: "a",
          surname: "a",
          age: "a",
        },
        {
          id: "2",
          name: "b",
          surname: "b",
          age: "b",
        },
        {
          id: "3",
          name: "c",
          surname: "c",
          age: "c",
        },
      ],
    };
  }

  render() {
    const onEdit = (value) => {
      const setState = () => {
        this.state.data;
      };
      console.log("edut");
    };
    return (
      <div className="container">
        <table border={1}>
          <thead>
            <tr>
              <th>no/</th>
              <th>name</th>
              <th>surname</th>
              <th>age</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((value) => {
              return (
                <tr>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.surname}</td>
                  <td>{value.age}</td>
                  <td>
                    <button
                      onClick={(value) => {
                        onEdit(value);
                      }}
                    >
                      edit
                    </button>
                    <button>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default State;
