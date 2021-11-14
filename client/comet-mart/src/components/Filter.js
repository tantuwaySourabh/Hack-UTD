import React from 'react'
import {Grid} from '@mui/material'
import './Filter.css'
import { Card, CardContent, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Slider } from '@material-ui/core'


const Filter = (props) => {
    const handlePriceRangeChange = (event, newValue) => {
        //setPriceRangeValue(newValue);
        props.onPriceFilterUpdated(newValue);
    };
    const handleDiscountChange = (event, newValue) => {
        props.onDiscountFilterUpdated(event.target.value);
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
                            value={[props.currMin, props.currMax]}
                            onChange={handlePriceRangeChange}
                            valueLabelDisplay="auto"
                            min={props.minPrice}
                            max={props.maxPrice}
                        />
                        <div >
                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                Min: ${props.currMin}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                Max: ${props.currMax}
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
                                name="radio-buttons-group"
                                onChange={handleDiscountChange}>
                                <FormControlLabel value="0" control={<Radio />} label="No filter" />
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
