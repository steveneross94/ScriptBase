import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getCovidData } from '../actionCreators/actionCreators'
// import Card from 'react-bootstrap/Card'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'

function CovidNews() {

    // let [covidNews, setCovidNews] = useState(null)
    let [selectCountry, setSelectCountry] = useState('Afghanistan')

    // useEffect(() => {
    //     fetch('https://api.covid19api.com/summary')
    //         .then(r => r.json())
    //         .then(data => setCovidNews(data))
    // }, [])

    let covidNews = useSelector(state => state.covidData)
    let newCountry = covidNews.Countries.find(selected => selected.Country === selectCountry)

    const getCountryList = () => {
        return (
            covidNews.Countries.map((country, index) => {
                return <option key={index} value={country.Country}>{country.Country}</option>
            })
        )
    }

    console.log(covidNews.Countries.find(selected => selected.Country === selectCountry));
    return (
        <div>
            <h1>Covid News!</h1>
            <div>
                Global New Confirmed Case Count: <span>{covidNews && covidNews.Global.NewConfirmed}</span>
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
            <label>Data by Country: </label>
            <select name='country-data' value={selectCountry} onChange={(e) => setSelectCountry(e.target.value)}>
                {getCountryList()}
            </select>
            {covidNews &&
                <div>
                    <div>
                        {newCountry.CountryCode} New Confirmed Cases: {newCountry.NewConfirmed}
                    </div>
                    <div>
                        {newCountry.CountryCode} Total Confirmed Cases: {newCountry.TotalConfirmed}
                    </div>
                    <div>
                        {newCountry.CountryCode} New Deaths: {newCountry.NewDeaths}
                    </div>
                    <div>
                        {newCountry.CountryCode} Total Deaths: {newCountry.TotalDeaths}
                    </div>
                    <div>
                        {newCountry.CountryCode} New Recovered: {newCountry.NewRecovered}
                    </div>
                    <div>
                        {newCountry.CountryCode} Total Recovered: {newCountry.TotalRecovered}
                    </div>
                </div>
            }
        </div>
    )
}

export default CovidNews
