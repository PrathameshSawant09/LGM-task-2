import React from "react";
import "../styles.css";

const Users = ({ loading, users }) => {
  return loading ? (
    <div id="main">
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bea83775357853.5c4a1808c8a7b.gif"
        alt="Loading"
        className="loading"
      />
    </div>
  ) : (
    <div id="main">
      {users.map((user) => (
        <div className="column3">
          {console.log(user)}
          <div className="box">
            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <h1 className="name">
              {user.first_name} {user.last_name}
            </h1>
            <p className="email">{user.email}</p>
            <p className="id">USER ID: {user.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;