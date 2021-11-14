import React from 'react'
import './Sellitem.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Sellitem = () => {
    const postCreated=()=> {
        alert("Post successfully created");
    }
    return (
        <div className="write">
            <form className="writeForm">
                <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Item Name"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Item Description"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
            <input placeholder="Cost Price" type="text" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <input placeholder="Selling Price" type="text" autoFocus={true}/>
        </div>
        <div className="writeFormgroup">
        <FormLabel component="legend">Is it negotiable?</FormLabel>
        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        </div>
        <div className="writeFormGroup">
            <input placeholder="Available till" type="text" autoFocus={true}/>
        </div>
        <label for="img">Select image:</label>
        <input type="file" id="img" name="img" accept="image/*"/>
        <button className="writeSubmit" type="submit" onClick={postCreated}>
          Post
        </button>
      </form>
        </div>
    )
}

export default Sellitem
