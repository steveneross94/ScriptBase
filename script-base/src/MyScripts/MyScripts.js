import React, { useState, useEffect } from 'react'
import BrandName from '../BrandName/BrandName'
import MyScript from './MyScript'
import { Spinner, Form } from 'react-bootstrap'

function MyScripts() {

    let [brandNames, setBrandNames] = useState(null)
    let [search, setSearch] = useState("")

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/brand_names')
            .then(r => r.json())
            .then(data => setBrandNames(data))
    }, [])

    let searchableBrandNames = brandNames ? brandNames.filter(brandName => brandName.name.toLowerCase().includes(search.toLowerCase())) : null

    return (
        <div className='scripts-page'>
            <div className='scripts container'>
                <div className='scripts library'>
                    <h1>MyScripts</h1>
                    <MyScript />
                </div>
                <div className='scripts library'>
                    <h1>Prescription Library</h1>
                    <Form className='search-bar'>
                        <Form.Control placeholder='Search Prescriptions By Name' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </Form>
                    <div className='allScripts'>
                        {searchableBrandNames ? searchableBrandNames.map(brandName =>
                            <BrandName brand={brandName} key={brandName.id} />)
                            :
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyScripts
