import React, { useState, useEffect } from 'react'
import BrandName from '../BrandName/BrandName'
import MyScript from './MyScript'

function MyScripts() {

    let [brandNames, setBrandNames] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/brand_names')
            .then(r => r.json())
            .then(data => setBrandNames(data))
    }, [])

    return (
        <div className='scripts container'>
            <div className='scripts library'>
                <h1>MyScripts</h1>
                <MyScript />
            </div>
            <div className='scripts library'>
                <h1>Prescription Library</h1>
                {brandNames ? brandNames.map(brandName =>
                    <BrandName brand={brandName} key={brandName.id}/>
                ) : <h6>...loading</h6>}
            </div>
        </div>
    )
}

export default MyScripts
