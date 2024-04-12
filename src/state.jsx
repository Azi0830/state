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
      selected: null,
    };
  }
  render() {
    const onEdit = (value) => {
      this.setState({
        selected: value,
      });
      console.log(value);
      console.log("edit");
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
                <tr key={value.id}>
                  <tr>{value.id}</tr>
                  <td>
                    {this.state.selected === value ? (
                      <input type="text" defaultValue={value.name} />
                    ) : (
                      value.name
                    )}
                  </td>
                  <td>
                    {" "}
                    {this.state.selected === value ? (
                      <input type="text" defaultValue={value.surname} />
                    ) : (
                      value.surname
                    )}
                  </td>
                  <td>
                    {" "}
                    {this.state.selected === value ? (
                      <input type="text" defaultValue={value.age} />
                    ) : (
                      value.age
                    )}
                  </td>
                  <td>
                    {this.state.selected ? (
                      <button>save</button>
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
        <form action="">
          <input type="text" placeholder="ism kiriting" />
          <input type="text" placeholder="familya kiriting" />
          <input type="text" placeholder="yoshni kiriting" />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default State;
