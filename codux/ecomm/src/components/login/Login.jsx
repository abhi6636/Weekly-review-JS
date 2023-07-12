import React from "react";
import "./Login.css";

const Login = () => {
  return (
<div>
  <section className="py-5" style={{marginTop: 26, paddingTop: 76}}>
    <div className="container py-5">
      <div className="row mb-4 mb-lg-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <p className="fw-bold text-success mb-2">Login</p>
          <h2 className="fw-bold">Welcome back</h2>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body text-center d-flex flex-column align-items-center">
              <div className="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4">

              </div>
              <form method="post">
                <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                <div className="mb-3"><button className="btn btn-primary shadow d-block w-100" type="submit">Log in</button></div>
                <p className="text-muted">Forgot your password?</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  );
};

export default Login;
