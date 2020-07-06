import React, { useState, useEffect } from 'react';

import NasaImage from './NasaImage'


function SearchDate(){

    const [dateInput, setDateValue] = useState(null)
    const [dateReady, setDateReady] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setDateReady(true)
    }

    

    return(
        <div className="search-container text-center">
            <form>
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="medium-12 large-12 cell">
                            <label>
                                <span className="form-label">Enter Date</span>
                                <input type="date" onChange={e => setDateValue(e.target.value)} onClick={e => setDateReady(false)}  />
                            </label>
                            <input className="button" type="submit" value="Submit" onClick={handleSubmit}/>

                        </div>
                    </div>
                </div>
            </form>

            {dateReady ? (<NasaImage date={dateInput} />) : ("") }
            
            

            
        </div>
    )
}

export default SearchDate