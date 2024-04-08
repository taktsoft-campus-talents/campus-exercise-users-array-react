import { useState } from "react";
import { users } from "./data/usersComplete";
import "./App.css";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");

  function handleFilter(filter) {
    setActiveFilter(filter);
  }

  let filteredUsers = users;

  if (activeFilter === "men") {
    filteredUsers = users.filter((user) => user.gender === "male");
  } else if (activeFilter === "women") {
    filteredUsers = users.filter((user) => user.gender === "female");
  } else if (activeFilter === "by-age") {
    filteredUsers = users.slice().sort((a, b) => a.dob.age - b.dob.age);
  } else if (activeFilter === "by-name") {
    filteredUsers = users
      .slice()
      .sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
  }

  return (
    <>
      <h1>People</h1>
      <header className="💪 buttons">
        <button
          className={activeFilter === "all" ? "selected" : ""}
          onClick={() => {
            handleFilter("all");
          }}
        >
          All
        </button>
        <button
          className={activeFilter === "men" ? "selected" : ""}
          onClick={() => {
            handleFilter("men");
          }}
        >
          Men
        </button>
        <button
          className={activeFilter === "women" ? "selected" : ""}
          onClick={() => {
            handleFilter("women");
          }}
        >
          Women
        </button>
        <button
          className={activeFilter === "by-age" ? "selected" : ""}
          onClick={() => {
            handleFilter("by-age");
          }}
        >
          By Age
        </button>
        <button
          className={activeFilter === "by-name" ? "selected" : ""}
          onClick={() => {
            handleFilter("by-name");
          }}
        >
          By Name
        </button>
      </header>
      <section className="cards">
        {filteredUsers.map((user) => {
          return (
            <div className="card" key={user.login.uuid}>
              <img
                src={user.picture.large}
                alt={`picture of ${user.name.title} ${user.name.first} ${user.name.last}`}
              />
              <h3>
                {user.name.first} {user.name.last}
              </h3>
              <h4>{user.location.country}</h4>
              <h5>age: {user.dob.age}</h5>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default App;
