import React from "react";
import "./Edit.css";

const Edit = () => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
          <div className="card mb-5">
            <div className="card-body p-sm-5">
              <form>
                <div className="mb-3">
                  <input
                    id="name-2"
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    id="message-2"
                    className="form-control"
                    type="text"
                    name="message"
                    placeholder="User Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    id="email-2"
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <button className="btn btn-primary d-block w-100">
                    Update{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
