import { Component } from "react";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: "1",
          no: "1",
          name: "a",
          surname: "a",
          age: "a",
        },
        {
          id: "2",
          no: "2",
          name: "b",
          surname: "b",
          age: "b",
        },
        {
          id: "3",
          no: "3",
          name: "c",
          surname: "c",
          age: "c",
        },
      ],
      selevtedColum: null,
    };
  }
  render() {
    const onEdit = (value) => {
      this.setState({
        selevtedColum: value,
      });
    };
    const onSave = () => {
      console.log("save...");
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
                  <td>{value.no}</td>
                  <td>
                    {this.state.selevtedColum &&
                    value.id === this.state.selevtedColum.id ? (
                      <input
                        type="text"
                        defaultValue={value.name}
                        onChange={(e) => {
                          this.setState({
                            selevtedColum: {
                              name: e.target.value,
                              id: this.state.selevtedColum.id,
                              surname: this.state.selevtedColum.surname,
                              age: this.state.selevtedColum.age,
                            },
                          });
                        }}
                      />
                    ) : (
                      value.name
                    )}
                  </td>
                  <td>
                    {this.state.selevtedColum &&
                    value.id === this.state.selevtedColum.id ? (
                      <input type="text" defaultValue={value.surname} />
                    ) : (
                      value.surname
                    )}
                  </td>
                  <td>
                    {this.state.selevtedColum &&
                    value.id === this.state.selevtedColum.id ? (
                      <input type="text" defaultValue={value.age} />
                    ) : (
                      value.age
                    )}
                  </td>
                  <td>
                    {this.state.selevtedColum &&
                    value.id === this.state.selevtedColum.id ? (
                      <button onClick={onSave}>save</button>
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
          <input type="text" placeholder="ism yozing" />
          <input type="text" placeholder="familya yozing" />
          <input type="text" placeholder="yoshni yozing" />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default App;
