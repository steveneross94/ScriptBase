import React, {useState, useEffect} from 'react'
import BrandName from '../BrandName/BrandName'
import { Link } from 'react-router-dom'

function MyScripts() {

    let [brandNames, setBrandNames] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/brand_names')
            .then(r => r.json())
            .then(data => setBrandNames(data))
    }, [])

    return (
        <div>
            <div>
                <h1>MyScripts</h1>
            </div>
            <div>
                <h1>Prescription Library</h1>
                {brandNames.map(brandName =>
                    <BrandName brandName={brandName}/>    
                )}
            </div>
        </div>
    )
}

export default MyScripts
