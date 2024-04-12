import { Component } from "react";
import "./style.css";

class State extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: "1",
          name: "azim",
          surname: "jon",
          age: "26",
        },
        {
          id: "2",
          name: "sardor",
          surname: "jon",
          age: "28",
        },
        {
          id: "3",
          name: "husan",
          surname: "khon",
          age: "25",
        },
      ],
    };
  }

  render() {
    const onEdit = () => {
      console.log("editing..");
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
                    <button onClick={onEdit}>edit</button>
                    <button>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <form>
          <input type="text" placeholder="ism kiriting" />
          <input type="text" placeholder="familiya kiriting" />
          <input type="text" placeholder="yosh kiriting" />
        </form>
      </div>
    );
  }
}

export default State;
