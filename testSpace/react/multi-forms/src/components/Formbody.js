import React, { useState } from "react";

const Formbody = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newData, setNewData] = useState([]);

  return (
    <>
      <div className="fluid-container text-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newEntry = {
              name: name,
              mobile: mobile,
              email: email,
              password: password,
            };
            setNewData([...newData, newEntry]);
            setName("");
            setMobile("");
            setEmail("");
            setPassword("");
          }}
        >
          <input
            type="text"
            value={name}
            className="w-50 p-2 m-2"
            placeholder="Enter Your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            value={mobile}
            className="w-50  p-2 m-2"
            placeholder="Enter Your Mobile NBumber"
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
          <input
            type="text"
            value={email}
            className="w-50 p-2 m-2"
            placeholder="Enter Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            value={password}
            className="w-50 p-2 m-2"
            placeholder="Enter a Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{" "}
          <br />
          <button type="submit" className="btn btn-outline-dark">
            Submit Details
          </button>
        </form>
        <div>
        <div class="col mb-3">
          {newData.map((value) => {
            return (
              <>
                <div className="card my-4">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: {value.name}</li>
                    <li class="list-group-item">
                      Mobile Number: {value.mobile}
                    </li>
                    <li class="list-group-item">Email: {value.email}</li>
                  </ul>
                  <div class="card-footer">
                    Your password is {value.password}
                  </div>
                </div>
              </>
            );
          })}
        </div>
        </div>
      </div>

    </>
  );
};

export default Formbody;
