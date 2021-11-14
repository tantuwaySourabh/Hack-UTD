import { Grid, Box } from '@material-ui/core'
import React from 'react'
import './SearchResult.css'
import MartItem from './MartItem'
import MartItemDetail from './MartItemDetail'

let items = [
    {
        "_id" : "4",
        "itemname" : "2019 Tesla Model 3",
        "description" : "15 Speakers, 4-Wheel Disc Brakes, ABS brakes, Air Conditioning, Auto High-beam Headlights, Automatic temperature control, Brake assist, Delay-off headlights, Dual front impact airbags, Dual front side impact airbags, Electronic Stability Control, Exterior Parking Camera Rear, Four wheel independent suspension, Front anti-roll bar, Front dual zone A/C, Front fog lights, Fully automatic headlights, Knee airbag, Low tire pressure warning, Memory seat, Navigation System, Occupant sensing airbag, Overhead airbag, Power driver seat, Power steering, Power windows, Premium Audio System, Radio data system, Rear window defroster, Remote keyless entry, Security system, Speed control, Speed-sensing steering, Steering wheel memory, Steering wheel mounted A/C controls, Steering wheel mounted audio controls, Traction control.Clean CARFAX.CARFAX One-Owner.Odometer is 19312 miles below market average! Priced below KBB Fair Purchase Price!Ask us about our Very Low Cost Pre-Paid Maintenance Plans. Enjoy the comfort of our State of the Art indoor showroom. Browse our inventory in comfort weather its rain shine.",
        "category" : [ 
            "automobile"
        ],
        "msp" : "57961",
        "sellprice" : "53961",
        "isnegotiable" : "false",
        "pickuplocation" : "8023 Copper Way, Dallas, TX 75252",
        "buydate" : "11/02/2019",
        "postdate" : "11/02/2021",
        "condition" : "excellent",
        "availabilitytill" : "11/28/2021",
        "media" : {
            "images" : [ 
                "tesla1.jpg", 
                "tesla2.jpg", 
                "tesla3.jpg",
                "tesla3.jpg"
            ],
            "videos" : [ 
                
            ]
        },
        "status" : "unsold",title:"Sofa", price:"20", image:"bedframe1.jpg"
    },
    {title:"Sofa", price:"20", image:"bedframe1.jpg"},
    {title:"Heater", price:"20", image:"bedframe1.jpg"},
    {title:"King Size Bed", price:"20", image:"bedframe1.jpg"},
    {title:"King Size Bed", price:"20", image:"bedframe1.jpg"},
    {title:"King Size Bed", price:"20", image:"bedframe1.jpg"},
    {title:"King Size Bed", price:"20", image:"bedframe1.jpg"},
    {title:"King Size Bed", price:"20", image:"bedframe1.jpg"},
    {title:"King Size Bed", price:"20", image:"bedframe1.jpg"},
    {title:"King Size Bed", price:"20", image:"bedframe1.jpg"},
    {title:"King Size Bed", price:"20", image:"bedframe1.jpg"},
]
const SearchResult = (props) => {
    return (
        <Grid container>
            {
                //<MartItemDetail martItem={items[0]}></MartItemDetail>
                props.items.map((item) => (
                    <MartItem martItem={item}></MartItem>
                ))
            }
        </Grid>
    )
}

export default SearchResult
