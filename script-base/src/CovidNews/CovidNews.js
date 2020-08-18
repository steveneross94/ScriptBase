import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Chart from './Chart'
import SelectedCountryChart from './SelectedCountryChart'
import { Form } from 'react-bootstrap'
// import Card from 'react-bootstrap/Card'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'

function CovidNews() {

    let [selectCountry, setSelectCountry] = useState('Afghanistan')

    let newCountry = {}
    let covidNews = useSelector(state => state.covidData)
    let countryData = useSelector(state => state.countryData)
    if (covidNews) {
        newCountry = countryData.find(selected => selected.Country === selectCountry)
    }

    const getCountryList = () => {
        return (
            countryData.map((country, index) => {
                return <option key={index} value={country.Country}>{country.Country}</option>
            })
        )
    }


    return (
        <div className='covid-news'>
            <h1>Current Covid Statistics - Global & By Country</h1>
            <div className='global-container'>
                <div className='global-stats'>
                    <div>
                        Global New Confirmed Case Count: <span>{covidNews && covidNews.NewConfirmed}</span>
                    </div>
                    <div>
                        Global Total Confirmed Case Count: <span>{covidNews && covidNews.TotalConfirmed}</span>
                    </div>
                    <div>
                        Global New Death Count: <span>{covidNews && covidNews.NewDeaths}</span>
                    </div>
                    <div>
                        Global Total Death Count: <span>{covidNews && covidNews.TotalDeaths}</span>
                    </div>
                    <div>
                        Global New Recovered Count: <span>{covidNews && covidNews.NewRecovered}</span>
                    </div>
                    <div>
                        Global Total Recovered Count: <span>{covidNews && covidNews.TotalRecovered}</span>
                    </div>
                </div>
                <div className='global-chart'>
                    <Chart covidData={covidNews} />
                </div>
            </div>
            <div className='country-search'>
                <label>Data by Country: </label>
                <select name='country-data' value={selectCountry} onChange={(e) => setSelectCountry(e.target.value)}>
                    {getCountryList()}
                </select>
            </div>
            <div>
                {covidNews &&
                    <div className='country-container'>
                        <div className='country-chart'>
                            <SelectedCountryChart selectedCountry={newCountry} />
                        </div>
                        <div className='country-data'>
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
                    </div>
                }
            </div>
        </div>
    )
}

export default CovidNews
