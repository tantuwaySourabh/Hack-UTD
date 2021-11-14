import React from 'react'
import { InputLabel, FormControl, Select, MenuItem, Box, Grid} from '@mui/material'
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@mui/material';

const Sort = () => {

    const [sortBy, setSortBy] = React.useState(10);

    const handleChange = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <div style={{margin:'20px'}}>
            <form>
                <label for="sortBy">Sort By:    </label>
                <select name="sortBy" id="sortBy" style={{width:'150px'}}>
                    <option value="1">Popularity</option>
                    <option value="2">Price: Low to High</option>
                    <option value="3">Price: High to Low</option>
                    <option value="4">Rating</option>
                </select>
            </form>
        </div>
    );
}
const sortBy=[{title:'30'},{title:'20'}];
export default Sort
