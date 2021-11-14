import { Grid, Box } from '@material-ui/core'
import React from 'react'
import './SearchResult.css'
import MartItem from './MartItem'

const SearchResult = (props) => {
    return (
        <Grid container>
            {
                props.items.map((item) => (
                    <MartItem martItem={item}></MartItem>
                ))
            }
        </Grid>
    )
}

export default SearchResult
