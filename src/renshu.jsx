import { Component } from "react";
import "./style.css";

class Renshu extends Component {
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
      selectedRow: null,
    };
  }

  render() {
    const onEdit = (value) => {
      console.log(value);
      this.setState({ selectedRow: value });
      console.log("editing.. ");
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
                  <td>
                    {this.state.selectedRow &&
                    value.id === this.state.selectedRow.id ? (
                      <input type="text" defaultValue={value.name} />
                    ) : (
                      value.name
                    )}
                  </td>
                  <td>
                    {" "}
                    {this.state.selectedRow &&
                    value.id === this.state.selectedRow.id ? (
                      <input type="text" defaultValue={value.surname} />
                    ) : (
                      value.surname
                    )}
                  </td>
                  <td>
                    {" "}
                    {this.state.selectedRow &&
                    value.id === this.state.selectedRow.id ? (
                      <input type="text" defaultValue={value.age} />
                    ) : (
                      value.age
                    )}
                  </td>
                  <td>
                    {this.state.selectedRow &&
                    value.id === this.state.selectedRow.id ? (
                      <button>Save</button>
                    ) : (
                      <button
                        onClick={() => {
                          onEdit(value);
                        }}
                      >
                        edit
                      </button>
                    )}
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
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Renshu;
