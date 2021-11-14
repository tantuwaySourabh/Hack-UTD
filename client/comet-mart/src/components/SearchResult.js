import { Grid, Box } from '@material-ui/core'
import React from 'react'
import './SearchResult.css'
import MartItem from './MartItem'

let items = [
    {title:"Samsung Galaxy 10", price:"20", image:"bedframe1.jpg"},
    {title:"Sofa", price:"20", image:"bedframe1.jpg"},
    {title:"Heater", price:"20", image:"bedframe1.jpg"},
    {title:"King Size Bed", price:"20", image:"bedframe1.jpg"},
    {title:"King Size Bed", price:"20", image:"bedframe1.jpg"},
    {title:"King Size Bed", price:"20", image:"bedframe1.jpg"},
    {title:"King Size Bed", price:"20", image:"bedframe1.jpg"},
    {title:"King Size Bed", price:"20", image:"bedframe1.jpg"},
    {title:"King Size Bed", price:"20", image:"bedframe1.jpg"},
    {title:"King Size Bed", price:"20", image:"bedframe1.jpg"},
    {title:"King Size Bed", price:"20", image:"bedframe1.jpg"},
]
const SearchResult = (props) => {
    return (
        <Grid container>
            {
                items.map((item) => (
                    <MartItem martItem={item}></MartItem>
                ))
            }
        </Grid>
    )
}

export default SearchResult
