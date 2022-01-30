import Users from "./Components/Cards";
import "./styles.css";
import logo from "./image/logo.png";


import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { users_data: [], loading: true };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    // document.getElementById("main").style.display='flex';
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <nav>
          <div className="navbar">
            <div className="row">
              <div className="column1">
              <img src = {logo} alt = "logo" height="80" width="200" className="logo" />
              </div>
              <div className="column2">
                <button onClick= {this.updateState}>Get Users</button>
              </div>
            </div>
          </div>
        </nav>
        <div className="box-container">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
      </>
    );
  }
}

export default App;