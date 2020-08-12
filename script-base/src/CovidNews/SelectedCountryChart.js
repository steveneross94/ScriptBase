import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Bar } from 'react-chartjs-2'

function SelectedCountryChart({ selectedCountry }) {

    

    const chart = () => {
        return {
            labels: ['NewConfirmed', 'TotalConfirmed', 'NewDeaths', 'TotalDeaths', 'NewRecovered', 'TotalRecovered'],
            datasets: [
                {
                    label: 'Covid Stats',
                    data: [selectedCountry.NewConfirmed, selectedCountry.TotalConfirmed, selectedCountry.NewDeaths, selectedCountry.TotalDeaths, selectedCountry.NewRecovered, selectedCountry.TotalRecoverd],
                    borderWidth: 4
                }
            ]
        }      
        }
    

    useEffect(() => {
            chart()
    }, [])

    console.log(selectedCountry);
    return (
        <div>
            <Bar data={chart} />
        </div>
    )
}

export default SelectedCountryChart