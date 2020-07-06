import React, { useState, useEffect } from 'react';


function NasaImage(props){

    const [imageData, setImageData] = useState([])


    useEffect(() => {

        let passedDate = props.date

        let api_date = null;

        if(passedDate !== undefined){
            
            api_date = passedDate
        }
        else{
            let date = new Date()

            api_date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        }

        let nasaUrl = new URL("https://api.nasa.gov/planetary/apod")
        nasaUrl.search = new URLSearchParams({
            date: api_date,
            api_key: "tGsR1YVZY6fogZcuRMhe49taxth9z8A2UWEb8SzL"
        })


        fetch(nasaUrl)
            .then(response => response.json())
            .then(data => setImageData(data))

    }, [])

    return (
        <div id="picture-info">

            <div className="grid-x">
                <div id="picture-menu" className="medium-4 large-4">
                    <p className="picture-content-heading">What's on this page</p>
                    <ul className="vertical menu align-center fixed">
                        <li><a href="#apod-picture">Picture of the day</a></li>
                        <li><a href="#picture-date">What date is this picture for</a></li>
                        <li><a href="#picture-title">Picture title</a></li>
                        <li><a href="#picture-explanation">Picture Explanation</a></li>

                    </ul>

                </div>

                <div id="picture-data" className="medium-8 large-8">
                    <img id="apod-picture" src={imageData.url} alt={imageData.title} width="1080" height="720" />
                    <div id="picture-date">
                        <p className="picture-content-heading">Picture of the day for</p>
                        <p>{imageData.date}</p>
                    </div>
                    <div id="picture-title">
                        <p className="picture-content-heading">Picture title</p>
                        <p>{imageData.title}</p>
                    </div>
                    <div id="picture-explanation">
                        <p className="picture-content-heading">A little about this picture</p>
                        <p>{imageData.explanation} </p>
                    </div>
                </div>

            </div>


            
        </div>
        
    )

}

export default NasaImage;