import React from 'react'

import { Grid, Box } from '@material-ui/core'
import { StrikethroughS } from '@material-ui/icons'


const MartItem = (props) => {
    const discount = Math.round(((props.martItem.msp - props.martItem.sellprice) / props.martItem.msp) * 100)
    return (
        <Grid item xs={3}> 
            <Box m={3}>
                <Grid item>
                    <img src={'./images/'+props.martItem.media.images[0]} class="img img-fluid"></img>
                </Grid>
                <Grid item>
                   2 {props.martItem.itemname}
                </Grid>
                <Grid item>
                    Price: ${props.martItem.sellprice}  
                    <span style={{textDecoration:'line-through', marginLeft:'4px'}}>${props.martItem.msp}</span>
                </Grid>
                <Grid item>
                    Discount: {discount}%
                </Grid>
            </Box>
        </Grid>
    )
}

export default MartItem
