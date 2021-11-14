import React from 'react'
import { InputLabel, FormControl, Select, MenuItem, Box, Grid} from '@mui/material'
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@mui/material';

const Sort = (props) => {

    const [sortBy, setSortBy] = React.useState(1);

    const handleChange = (event) => {
        props.onSortChanged(event.target.value);
        setSortBy(event.target.value);
    };

    return (
        <div className="mt-4">
            <form class="form-control">
                <label for="sortBy" class="mr-3">Sort By: </label>
                <select class="" name="sortBy" id="sortBy" style={{width:'150px'}} value={sortBy} onChange={handleChange}>
                    <option value="1">Popularity</option>
                    <option value="2">Price: Low to High</option>
                    <option value="3">Price: High to Low</option>
                </select>
            </form>
        </div>
    );
}
const sortBy=[{title:'30'},{title:'20'}];
export default Sort
