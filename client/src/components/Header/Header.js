import React from "react";

function Header () {
    return(
    <div className="jumbotron">
        <h1 className="display-4">Google Books Search!</h1>
        <p className="lead">Search for a book using the Google Books search API!.</p>
        <hr className="my-4"></hr>
        <p>It's fun and easy to use!</p>
        <button class="btn btn-danger">See Saved Books</button>

      
    </div>
    )
}
export default Header;