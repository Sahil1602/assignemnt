import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CompanyCard from '../SubComponents/CompanyCard'
import styles from './../../styles/card.module.css'

function Companies() {
    const [companyList, setCompanyList] = useState([])
    const [searchKey, setSearchKey] = useState('')

    const getCompanies = () => {
        axios.get(`https://json-placeholder.mock.beeceptor.com/companies`)
        .then(resp => {
            setCompanyList(resp.data.filter(elem => elem.name.includes(searchKey)))
        })
        .catch(err => {
            if(err.response && err.response.data) alert(err.response.data)
            else alert(err.message)
        })
    }

    useEffect(() => {
        getCompanies()
    }, [searchKey])

    return (
        <div className={styles.cardsMainWrap}>
            <div className={styles.wrap}>
                <div className={styles.search}>
                    <input type="text" className={styles.searchTerm} onChange={(evt) => setSearchKey(evt.target.value)} placeholder="Enter search key..." />
                    <button type="submit" className={styles.searchButton}>
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <div className={styles.cardsWrapper}>
                {
                    companyList.map(company => {
                        return company ? <CompanyCard company={company} /> : null
                    })
                }
            </div>
        </div>
    )
}

export default Companies