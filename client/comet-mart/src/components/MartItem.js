import React from 'react'

import { Grid, Box } from '@material-ui/core'
import { StrikethroughS } from '@material-ui/icons'
import { green } from '@material-ui/core/colors'


const MartItem = (props) => {
    const discount = Math.round(((props.martItem.msp - props.martItem.sellprice) / props.martItem.msp) * 100)
    
    const onItemClick = (item) => {
        console.log('image clicked', props.martItem);
        props.onItemClick(props.martItem)
    }
    
    return (
        <Grid item xs={3}> 
            <Box m={3}>
                <Grid item>
                    <img onClick={onItemClick} src={'./images/'+props.martItem.media.images[0]} class="img img-fluid"></img>
                </Grid>
                <Grid item>
                    <b>{props.martItem.itemname}</b>
                </Grid>
                <Grid item>
                    Price: ${props.martItem.sellprice}  
                    <span style={{textDecoration:'line-through', marginLeft:'4px'}}>${props.martItem.msp}</span>
                </Grid>
                <Grid item>
                    <div style={{color:"#006600"}}><b>Discount: {discount}%</b></div> 
                </Grid>
            </Box>
        </Grid>
    )
}

export default MartItem
