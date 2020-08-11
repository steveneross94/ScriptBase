import React, { useState } from 'react'

function EditForm() {

    let [price, setPrice] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        console.log('in submit');
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e.target.value)}>
                <label>New Price:</label>
                <input type='number' name='user-price' value={price} onChange={(e) => setPrice(e.target.value)}/>
                <button type='submit'>Change</button>
            </form>
        </div>
    )
}

export default EditForm
