import { Card, CardContent } from '@material-ui/core'
import React from 'react'

const MartItemDetail = (props) => {
    return (
        
        <div class="container-fluid">
            <div class="row" >
                <div class="col-md-8">
                    <img class="img-fluid" src="./images/tesla1.jpg" alt="item detail image"/>
                </div>
                <div class="col-md-4">
                    <Card>
                        <CardContent>
                            <h3>{props.martItem.itemname}</h3>
                        </CardContent>
                    </Card>
                    <div class="card">
                        <div class="card-body">
                            <h2> ${props.martItem.sellprice}</h2>  
                            <p>Condition: {props.martItem.condition}</p>  
                            <p>{props.martItem.category[0]}</p> 
                            <button type="button" class="btn btn-primary m-2">Contact seller and buy</button>
                            
                                <button type="button" class="btn btn-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                </svg> WishList
                            </button>
                            <button type="button" class="btn btn-secondary m-1" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            </svg> Share</button>
                        </div>
                    </div>
                </div>
                <h3>Description:</h3>  
                <p>{props.martItem.description}</p>     
            </div>
        </div>

    )
}

export default MartItemDetail
