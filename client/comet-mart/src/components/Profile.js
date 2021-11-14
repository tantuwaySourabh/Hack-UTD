import ClientProfile from './ClientProfile'
import Bootstrap from './Bootstrap'

const Profile = (props) => {
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

	    <div class="container-fluid mx-5 mt-5">

	      <div class="pt-2 pb-1">
	        <div>
	          <ol class="breadcrumb center-align">
	            <li class="breadcrumb-item"><a href="#">Home</a></li>
	            <li class="breadcrumb-item"><a href="#">Client Profile</a></li>
	          </ol>
	        </div>
	      </div>

	      <div class="row">
	        <div class="col-md-3 pe-3">
	          <div class="card p-4" style="width: 18rem;">
	            <img class="card-img-top rounded-image" src="../profile.jpeg" alt="Card image cap">
	            <div class="card-body">
	              <h5 class="card-title center">{props.user.name}</h5>
	              <p class="card-text center">I Like Trading bitcoins</p>
	            </div>
	          </div>
	        </div>
	        <div class="col-md-9 pe-5">
	          <h1>Bio Graph</h1>
	          <ul class="list-group me-5">
	            Name
	            <li class="list-group-item disabled mt-3 mb-3"> {props.user.name}</li>
	            Email
	            <li class="list-group-item disabled mt-3 mb-3">{props.user.email}</li>
	            Phone
	            <li class="list-group-item disabled mt-3 mb-3">{props.user.phone}</li>
	            Address
	            <li class="list-group-item disabled mt-3 mb-3">{props.user.address}</li>
	            Sold Item Quantity 
	            <li class="list-group-item disabled mt-3 mb-3">{props.user.sold}</li>
	            Bought Item Quantity 
	            <li class="list-group-item disabled mt-3 mb-3">{props.user.bought}</li>
	            Grad Year
	            <li class="list-group-item disabled mt-3 mb-3">{props.user.gradyear}</li>

	            Major
	            <li class="list-group-item disabled mt-3 mb-3">{props.user.major}</li>  

	          </ul>


	          <button class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
	  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
	</svg>Edit</button>
	             
	          </div>

	        </div>
	      </div>
	    </div>
	   </div>
    )
}

export default Profile