import {React, useEffect, useState} from 'react'
import {Grid} from '@mui/material'
import { useHistory } from "react-router-dom";

import SearchResult from './SearchResult'
import Filter from './Filter'
import Sort from './Sort'
import {Link} from 'react-router-dom';
import MartItemDetail from './MartItemDetail'
import { orange } from '@material-ui/core/colors';
import { border, borderBottom } from '@mui/system';


// let items = [
//     {title:"Samsung Galaxy 10", price:20, image:"bedframe1.jpg", discount:50},
//     {title:"Sofa", price:20, image:"bedframe1.jpg", discount:20},
//     {title:"Heater", price:20, image:"bedframe1.jpg", discount:20},
//     {title:"King Size Bed", price:50, image:"bedframe1.jpg", discount:20},
//     {title:"King Size Bed", price:40, image:"bedframe1.jpg", discount:70},
//     {title:"King Size Bed", price:70, image:"bedframe1.jpg", discount:30},
//     {title:"King Size Bed", price:10, image:"bedframe1.jpg", discount:40},
//     {title:"King Size Bed", price:30, image:"bedframe1.jpg", discount:60},
//     {title:"King Size Bed", price:90, image:"bedframe1.jpg", discount:20},
//     {title:"King Size Bed", price:100, image:"bedframe1.jpg", discount:10},
//     {title:"King Size Bed", price:200, image:"bedframe1.jpg", discount:30}
// ]

const Search = () => {
    const history =  useHistory();
    const [martItems, setMartItems] = useState([])
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    const [maxPrice, setMaxPrice] = useState(Math.max.apply(Math, [].map(function(item) { return item.price; })));
    const [minPrice, setMinPrice] = useState(Math.min.apply(Math, [].map(function(item) { return item.price; })));
    const [currMin, setCurrMin] = useState(Math.min.apply(Math, [].map(function(item) { return item.price; })))
    const [currMax, setCurrMax] = useState(Math.max.apply(Math, [].map(function(item) { return item.price; })))

    useEffect(() => {
        fetch('/api/items').then((resp) => resp.json())
        .then((data) => {
            console.log('items',data);
            resetPriceRange(data);
            setMartItems(data);
            setFilteredItems(data);
            setItems(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    const onItemClick = (item) => {
        history.push("/martitemdetail?id="+ item._id);
    }
    const onSortChange = (newOption) => {
        console.log("new sort option "+newOption)
        var newItems = [];
        switch(newOption) {
            case '1':
                break;
            case '2':
                newItems = [...martItems].sort((item1, item2) => {
                    return parseInt(item1.sellprice) >  parseInt(item2.sellprice) ? 1 : -1;
                });
                updateItems(newItems);
                break;
            case '3':
                newItems = [...martItems].sort((item1, item2) => {
                    return  parseInt(item1.sellprice) >  parseInt(item2.sellprice) ? -1 : 1;
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
        let newItems = [...filteredItems].filter((item) => {
            return item.sellprice >= newRange[0] && item.sellprice <= newRange[1];
        });
        updateItems(newItems)
    }
    const onDiscountFilterUpdated = (val) => {
        console.log("new discount filter ", val)
        console.log(items);
        let newItems = [...items].filter((item) => {
            const disc = Math.round(((item.msp - item.sellprice) / item.msp) * 100);
            return disc >= val;
        });
        console.log(newItems);
        resetPriceRange(newItems);
        setFilteredItems(newItems);
        updateItems(newItems);
    }
    const updateItems = (newItems) => {
        setMartItems(newItems);
    }
    const resetPriceRange = (newItems) => {
        setMaxPrice(Math.max.apply(Math, newItems.map(function(item) { return item.sellprice; })));
        setMinPrice(Math.min.apply(Math, newItems.map(function(item) { return item.sellprice; })));
        setCurrMax(Math.max.apply(Math, newItems.map(function(item) { return item.sellprice; })));
        setCurrMin(Math.min.apply(Math, newItems.map(function(item) { return item.sellprice; })));
    }
    const onSellItem = () => {
        history.push('/sellitem');
    }
    return (
        <Grid container spacing={2} direction="column">
            <Grid item container xs={12} justifyContent="center" style={{ borderBottom:'2px groove #a36115', backgroundColor:'#18DF7B'}}>
                <div style={{fontSize:'40px', color:'#a36115'}} class="m-3"><b><u>Comet Mart</u></b>
                <span class="ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
                </span>
                </div>
            </Grid> 
            <Grid item container xs={12} justifyContent="end">
                <Sort onSortChanged={onSortChange}></Sort>
            </Grid> 
            <Grid item xs={2} container spacing={3}>
                <Grid item xs={3}><Filter onPriceFilterUpdated={onPriceFilterUpdated} 
                onDiscountFilterUpdated={onDiscountFilterUpdated}
                maxPrice={maxPrice} minPrice={minPrice} currMin={currMin} currMax={currMax}></Filter></Grid>
                <Grid item xs={9}><SearchResult items={martItems} onItemClick={onItemClick} ></SearchResult></Grid>
            </Grid>
        </Grid>
    )
}

export default Search
