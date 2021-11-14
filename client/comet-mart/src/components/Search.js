import React from 'react'
import {Grid} from '@mui/material'

import SearchResult from './SearchResult'
import Filter from './Filter'
import Sort from './Sort'

const Search = () => {
    return (
        <Grid container spacing={2} direction="column">
            <Grid item container xs={12} justifyContent="end">
                <Sort></Sort>
            </Grid> 
            <Grid item xs={2} container spacing={3}>
                <Grid item xs={3}><Filter></Filter></Grid>
                <Grid item xs={9}><SearchResult></SearchResult></Grid>
            </Grid>
        </Grid>
    )
}

export default Search
