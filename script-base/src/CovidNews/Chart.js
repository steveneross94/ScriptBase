import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'

function Chart({ covidData }) {

    let [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ['NewConfirmed', 'TotalConfirmed','NewDeaths','TotalDeaths','NewRecovered', 'TotalRecovered'],
            datasets: [
                {
                    label: 'Covid Stats',
                    data: [covidData.NewConfirmed, covidData.TotalConfirmed, covidData.NewDeaths, covidData.TotalDeaths, covidData.NewRecovered, covidData.TotalRecovered],
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])


    return (
        <div>
            <Bar data={chartData} height={'400%'} width={'600%'} options={{responsive: true, maintainAspectRatio: false}}/>
        </div>
    )
}

export default Chart
