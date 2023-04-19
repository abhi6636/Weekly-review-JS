import React from 'react'
import "./Navbar.css"

function Navbar() {
    function search() {
        console.log("Search");
    }
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <img src="src\assets\icon.png" alt="logo" id='logo' />
                    <h1 id='title'>Todo List</h1>
                    <form class="d-flex input-group w-auto">
                        <input
                            type="search"
                            class="form-control rounded"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                        />
                        <span class="input-group-text border-0" id="search-addon">
                            <i class="fas fa-search" onClick={search}></i>
                        </span>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar