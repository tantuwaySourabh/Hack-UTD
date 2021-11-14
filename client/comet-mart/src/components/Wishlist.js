import Bootstrap from './Bootstrap'

const Wishlist = (props) => {
    return (
    	<div>
	        <div class="container">
		        <div class="row">
		          <div class="col-sm">
		            <div class="card" style="width: 18rem;">
		             <img class="card-img-top"
		            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample">
		              <div class="card-body">
		                <h5 class="card-title">{props.wishlist.title}</h5>                
		                <a href="#" class="btn btn-primary">Add to Cart</a>
		              </div>
		            </div>
		          </div>
		          <div class="col-sm">
		            <div class="card" style="width: 18rem;">
		              <img class="card-img-top"
		            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg" alt="Sample">
		              <div class="card-body">
		                <h5 class="card-title">{props.wishlist.title}</h5>                
		                <a href="#" class="btn btn-primary">Add to Cart</a>
		              </div>
		            </div>
		          </div>
		          <div class="col-sm">
		            <div class="card" style="width: 18rem;">
		              <img class="card-img-top"
		            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg" alt="Sample">
		              <div class="card-body">
		                <h5 class="card-title">{props.wishlist.title}</h5>                
		                <a href="#" class="btn btn-primary">Add to Cart</a>
		              </div>
		            </div>
		          </div>

		          <div class="col-sm">
		            <div class="card" style="width: 18rem;">
		              <img class="card-img-top" src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG" alt="Card image cap">
		              <div class="card-body">
		                <h5 class="card-title">{props.wishlist.title}</h5>                
		                <a href="#" class="btn btn-primary">Add to Cart</a>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div class="row">
		          <div class="col-sm">
		            <div class="card" style="width: 18rem;">
		              <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0253/1881/7858/files/LAYER_DETAILS_2.8_1200x628_crop_center.jpg?v=1631645061" alt="Card image cap">
		              <div class="card-body">
		                <h5 class="card-title">{props.wishlist.title}</h5>                
		                <a href="#" class="btn btn-primary">Add to Cart</a>
		              </div>
		            </div>
		          </div>

		        </div>        
		      </div>
	   </div>
    )
}

export default Wishlist