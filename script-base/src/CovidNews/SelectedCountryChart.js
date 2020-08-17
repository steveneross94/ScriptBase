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
                    data: [selectedCountry.NewConfirmed, selectedCountry.TotalConfirmed, selectedCountry.NewDeaths, selectedCountry.TotalDeaths, selectedCountry.NewRecovered, selectedCountry.TotalRecovered],
                    borderWidth: 4,
                    backgroundColor: [
                        "rgba(223, 122, 8)",
                        "rgba(223, 8, 8)",
                        "rgba(0, 0, 0)",
                        "rgba(0, 0, 0)",
                        "rgba(67, 6, 131)",
                        "rgba(252, 233, 9)"
                    ]
                }
            ]
        }      
        }
    

    useEffect(() => {
            chart()
    }, [])


    return (
        <div>
            <Bar data={chart} height={'400%'} width={'600%'} options={{responsive: true, maintainAspectRatio: false}} />
        </div>
    )
}

export default SelectedCountryChart