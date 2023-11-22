import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

function MarketCapGraph() {
    const [companyList, setCompanyList] = useState([])
    const [labels, setLabels] = useState([])
    const [data, setData] = useState([])

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Market Cap Chart',
            },
        },
    }
    
    const getCompanies = () => {
        axios.get(`https://json-placeholder.mock.beeceptor.com/companies`)
        .then(resp => {
            setLabels(resp.data.map(elem => elem.name))
            setData(resp.data.map(elem => elem.marketCap))
            setCompanyList(resp.data)
        })
        .catch(err => {
            if(err.response && err.response.data) alert(err.response.data)
            else alert(err.message)
        })
    }

    useEffect(() => {
        getCompanies()
    }, [])

    return (
        <Bar 
            options={options}
            data={{
                labels,
                datasets: [{
                    label: "Market Cap",
                    data,
                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
                }]
            }}
        />
    )
}

export default MarketCapGraph