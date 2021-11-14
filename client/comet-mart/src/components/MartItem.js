import React from 'react'

import { Grid, Box } from '@material-ui/core'
import { StrikethroughS } from '@material-ui/icons'


const MartItem = (props) => {
    return (
        <Grid item xs={3}> 
            <Box m={3}>
                <Grid item>
                    <img src={'./images/'+props.martItem.image} class="img img-fluid"></img>
                </Grid>
                <Grid item>
                    {props.martItem.title}
                </Grid>
                <Grid item>
                    Price: ${props.martItem.price}  
                    <span style={{textDecoration:'line-through', marginLeft:'4px'}}>${props.martItem.price}</span>
                </Grid>
                <Grid item>
                    Discount: {props.martItem.discount}%
                </Grid>
            </Box>
        </Grid>
    )
}

export default MartItem
