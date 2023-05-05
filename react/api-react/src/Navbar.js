import React from "react";

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-md navbar-primary bg-primary">
        <a class="navbar-brand text-warning mx-5 w-100" href="#"><h2>
        <h1-6>Clip<span class="badge bg-warning">Dart</span></h1-6>
          </h2></a> 

    

        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            </ul>
            <form class="d-flex my-2 my-lg-0">
                <input class="form-control me-sm-2" type="text" placeholder="Search"/>
                <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    </>
  );
};

export default Navbar;
