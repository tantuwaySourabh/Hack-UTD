import React from 'react'

const AfterLogin = () => {
    return (
        <div>
	        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ps-5">
	      <a class="navbar-brand" href="#">Comet Mart</a>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="navbar-toggler-icon"></span>
	      </button>
	      <div class="collapse navbar-collapse" id="navbarNavDropdown">
	        <ul class="navbar-nav">
	          <li class="nav-item active">
	            <a class="nav-link" href="#">WishList</span></a>
	          </li>
	          <li class="nav-item">
	            <a class="nav-link" href="#">Purchase</a>
	          </li>
	          <li class="nav-item">
	            <a class="nav-link" href="#">Sold</a>
	          </li>
	          
	        </ul>
	      </div>

	      <div class="form-inline me-5">
	         <ul class="navbar-nav me-5">
	          <li class="nav-item dropdown me-3">
	              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	                <img class="rounded-image" width="25px" height="25px" src="../profile.png"/>
	              </a>
	              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	                <a class="dropdown-item" href="#">Profile</a>
	                <a class="dropdown-item" href="#">Reports & History</a>
	                <a class="dropdown-item" href="#">Logout</a>
	              </div>
	          </li>
	        </ul>
	      </div>
	    </nav>
        </div>
    )
}

export default AfterLogin
