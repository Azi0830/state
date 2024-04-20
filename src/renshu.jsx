import { Component } from "react";
import "./style.css";
//mondai1: input 0 xolatiga qaytishi kerak
//mondai2: inputni id yi uchurib yana qushsaham bir xil son paydo bulib qolmasligi kerak
//mondai3: input 0 holda qushilmasligi kerak (OK)

class Renshu extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "azim",
          surname: "jon",
          age: "26",
        },
        {
          id: 2,
          name: "sardor",
          surname: "jon",
          age: "28",
        },
        {
          id: 3,
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
      this.setState({ selectedRow: value });
    };

    const onSave = () => {
      this.setState({
        data: this.state.data.map((value) => {
          return value.id === this.state.selectedRow.id
            ? this.state.selectedRow
            : value;
        }),
        selectedRow: null,
      });
    };

    const onDelete = (value) => {
      this.setState({
        data: this.state.data.filter((item) => item.id !== value.id),
      });
    };

    const deleteSub = (value) => {
      const newData = this.state.data.filter((item) => item.id !== value.id);
      this.setState({ data: newData });
    };

    const onAdd = (event) => {
      event.preventDefault();
      var newData = {
        name: event.target[0].value,
        surname: event.target[1].value,
        age: event.target[2].value,
        id:
          this.state.data.length > 0
            ? parseInt(this.state.data[this.state.data.length - 1].id) + 1
            : 1,
        // yuqorida yangi muammo bor
      };
      this.setState({
        data: [...this.state.data, newData],
      });
      //inputni tozalash bu qanday ishlayabdi??
      event.target[0].value = "";
      event.target[1].value = "";
      event.target[2].value = "";
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
                  <td>{value.id}</td>
                  <td>
                    {this.state.selectedRow &&
                    value.id === this.state.selectedRow.id ? (
                      <input
                        type="text"
                        defaultValue={this.state.selectedRow.name}
                        onChange={(e) => {
                          this.setState({
                            selectedRow: {
                              id: this.state.selectedRow.id,
                              age: this.state.selectedRow.age,
                              surname: this.state.selectedRow.surname,
                              name: e.target.value,
                            },
                          });
                        }}
                      />
                    ) : (
                      value.name
                    )}
                  </td>
                  <td>
                    {" "}
                    {this.state.selectedRow &&
                    value.id === this.state.selectedRow.id ? (
                      <input
                        type="text"
                        defaultValue={value.surname}
                        onChange={(e) => {
                          this.setState({
                            selectedRow: {
                              id: this.state.selectedRow.id,
                              name: this.state.selectedRow.name,
                              age: this.state.selectedRow.age,
                              surname: e.target.value,
                            },
                          });
                        }}
                      />
                    ) : (
                      value.surname
                    )}
                  </td>
                  <td>
                    {" "}
                    {this.state.selectedRow &&
                    value.id === this.state.selectedRow.id ? (
                      <input
                        type="text"
                        defaultValue={value.age}
                        onChange={(e) => {
                          this.setState({
                            selectedRow: {
                              id: this.state.selectedRow.id,
                              name: this.state.selectedRow.name,
                              surname: this.state.selectedRow.surname,
                              age: e.target.value,
                            },
                          });
                        }}
                      />
                    ) : (
                      value.age
                    )}
                  </td>
                  <td>
                    {this.state.selectedRow &&
                    value.id === this.state.selectedRow.id ? (
                      <button onClick={onSave}>Save</button>
                    ) : (
                      <button
                        onClick={() => {
                          onEdit(value);
                        }}
                      >
                        edit
                      </button>
                    )}
                    <button
                      onClick={() => {
                        onDelete(value);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <form onSubmit={onAdd}>
          <input required type="text" placeholder="ism kiriting" />
          <input required type="text" placeholder="familiya kiriting" />
          <input required type="text" placeholder="yosh kiriting" />
          <button
            onClick={(value) => {
              deleteSub(value);
            }}
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default Renshu;
