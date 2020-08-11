import React, { useState, useEffect } from 'react'
// import Card from 'react-bootstrap/Card'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'

function CovidNews() {

    let [covidNews, setCovidNews] = useState(null)

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(r => r.json())
            .then(data => setCovidNews(data))
    }, [])

    console.log(covidNews);
    return (
        <div>
            <h1>Covid News!</h1>
            <div>
                Global New Confirmed Case Count: <span className='anim-typewriter'>{covidNews && covidNews.Global.NewConfirmed}</span>
            </div>
            <div>
                Global Total Confirmed Case Count: <span>{covidNews && covidNews.Global.TotalConfirmed}</span>
            </div>
            <div>
                Global New Death Count: <span>{covidNews && covidNews.Global.NewDeaths}</span>
            </div>
            <div>
                Global Total Death Count: <span>{covidNews && covidNews.Global.TotalDeaths}</span>
            </div>
            <div>
                Global New Recovered Count: <span>{covidNews && covidNews.Global.NewRecovered}</span>
            </div>
            <div>
                Global Total Recovered Count: <span>{covidNews && covidNews.Global.TotalRecovered}</span>
            </div>
        </div>
    )
}

export default CovidNews
