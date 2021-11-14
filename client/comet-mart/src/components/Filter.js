import React from 'react'
import {Grid} from '@mui/material'
import './Filter.css'
import { Card, CardContent, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Slider } from '@material-ui/core'



function valuetext(value) {
    return `${value}°C`;
}

const Filter = () => {
    const [priceRange, setPriceRangeValue] = React.useState([20, 37]);

    const handlePriceRangeChange = (event, newValue) => {
        setPriceRangeValue(newValue);
    };

    return (
        <Grid container class="container">
            <Grid item direction="column">
                <Grid>
                    <Card>
                        <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Filters
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid>
                    <Card>
                        <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Price
                        </Typography>
                        <Slider
                            getAriaLabel={() => 'Price Range'}
                            value={priceRange}
                            onChange={handlePriceRangeChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={0}
                            max={50}
                        />
                        <div >
                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                Min: {priceRange[0]}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                Max: {priceRange[1]}
                            </Typography>
                        </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid>
                    <Card>
                        <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Discount
                        </Typography>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="discount"
                                defaultValue="10"
                                name="radio-buttons-group">
                                <FormControlLabel value="10" control={<Radio />} label="> 10%" />
                                <FormControlLabel value="25" control={<Radio />} label="> 25%" />
                                <FormControlLabel value="50" control={<Radio />} label="> 50%" />
                            </RadioGroup>
                        </FormControl>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Filter
