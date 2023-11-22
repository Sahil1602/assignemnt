import React from 'react'
import styles from './../../styles/card.module.css'

function CompanyCard({company}) {
    const unusedDetails = ['name', 'id', 'zip', 'employeeCount', 'logo', 'marketCap', 'ceoName', 'domain', 'address']
    return (
        <div key={company.id} className={styles.card}>
            <h5 className={styles.cardHead}>{company.name}</h5>
            <div className={styles.cardDetails}>
                <div className={styles.cardTitleWrapper}>
                    {
                        Object.keys(company).map(title => {
                            if(!unusedDetails.includes(title)) return <div key={title}>{title}</div>
                        })
                    }
                </div>
                <div className={styles.cardValueWrapper}>
                    {
                        Object.keys(company).map(title => {
                            if(!unusedDetails.includes(title)) return <div key={company[title]}>{company[title]}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CompanyCard