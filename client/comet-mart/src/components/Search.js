import {React, useState} from 'react'
import {Grid} from '@mui/material'

import SearchResult from './SearchResult'
import Filter from './Filter'
import Sort from './Sort'


let items = [
    {title:"Samsung Galaxy 10", price:"20", image:"bedframe1.jpg", discount:'50'},
    {title:"Sofa", price:"20", image:"bedframe1.jpg", discount:'20'},
    {title:"Heater", price:"20", image:"bedframe1.jpg", discount:'20'},
    {title:"King Size Bed", price:"50", image:"bedframe1.jpg", discount:'20'},
    {title:"King Size Bed", price:"40", image:"bedframe1.jpg", discount:'70'},
    {title:"King Size Bed", price:"70", image:"bedframe1.jpg", discount:'30'},
    {title:"King Size Bed", price:"10", image:"bedframe1.jpg", discount:'40'},
    {title:"King Size Bed", price:"30", image:"bedframe1.jpg", discount:'60'},
    {title:"King Size Bed", price:"90", image:"bedframe1.jpg", discount:'20'},
    {title:"King Size Bed", price:"100", image:"bedframe1.jpg", discount:'10'},
    {title:"King Size Bed", price:"200", image:"bedframe1.jpg", discount:'30'}
]

const Search = () => {

    const [martItems, setMartItems] = useState(items)

    const [maxPrice, setMaxPrice] = useState(Math.max.apply(Math, items.map(function(item) { return item.price; })));
    const [minPrice, setMinPrice] = useState(Math.min.apply(Math, items.map(function(item) { return item.price; })));
    const [currMin, setCurrMin] = useState(Math.min.apply(Math, items.map(function(item) { return item.price; })))
    const [currMax, setCurrMax] = useState(Math.max.apply(Math, items.map(function(item) { return item.price; })))

    const onSortChange = (newOption) => {
        console.log("new sort option "+newOption)
        var newItems = [];
        switch(newOption) {
            case '1':
                break;
            case '2':
                newItems = [...martItems].sort((item1, item2) => {
                    return item1.price > item2.price ? 1 : -1;
                });
                updateItems(newItems);
                break;
            case '3':
                newItems = [...martItems].sort((item1, item2) => {
                    return item1.price > item2.price ? -1 : 1;
                });
                updateItems(newItems);
                break;
        }
        console.log(martItems);
        
    }
    const onPriceFilterUpdated = (newRange) => {
        setCurrMin(newRange[0]);
        setCurrMax(newRange[1]);
        console.log("new price filter ", newRange)
        let newItems = items.filter((item) => {
            return item.price >= newRange[0] && item.price <= newRange[1];
        });
        updateItems(newItems)
    }
    const onDiscountFilterUpdated = (val) => {
        console.log("new discount filter ", val)
        let newItems = items.filter((item) => {
            return item.discount >= val;
        });
        resetPriceRange(newItems);
        updateItems(newItems)
    }
    const updateItems = (newItems) => {
        setMartItems(newItems);
    }
    const resetPriceRange = (newItems) => {
        setMaxPrice(Math.max.apply(Math, newItems.map(function(item) { return item.price; })));
        setMinPrice(Math.min.apply(Math, newItems.map(function(item) { return item.price; })));
        setCurrMax(Math.max.apply(Math, newItems.map(function(item) { return item.price; })));
        setCurrMin(Math.min.apply(Math, newItems.map(function(item) { return item.price; })));
    }
    return (
        <Grid container spacing={2} direction="column">
            <Grid item container xs={12} justifyContent="end">
                <Sort onSortChanged={onSortChange}></Sort>
            </Grid> 
            <Grid item xs={2} container spacing={3}>
                <Grid item xs={3}><Filter onPriceFilterUpdated={onPriceFilterUpdated} 
                onDiscountFilterUpdated={onDiscountFilterUpdated}
                maxPrice={maxPrice} minPrice={minPrice} currMin={currMin} currMax={currMax}></Filter></Grid>
                <Grid item xs={9}><SearchResult items={martItems} ></SearchResult></Grid>
            </Grid>
        </Grid>
    )
}

export default Search
