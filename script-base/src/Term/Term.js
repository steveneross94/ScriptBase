import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Term({ terms }) {

    let [showTerm, setShowTerm] = useState(false)

    let term
    if (terms) {
        term = terms[Math.floor(Math.random() * terms.length)]
    }


    // terms[Math.floor(Math.random() * terms.length)]
    return (
        <div>
            <Button variant='dark' onClick={() => setShowTerm(!showTerm)}>{showTerm ? 'Enough Learning, Thanks' : 'Learn Something'}</Button>
            {showTerm && term &&
                <div className='terms'>
                    <div className='terms-name'>
                        <strong>{term.name}</strong>
                    </div>
                    <div className='terms-desc'>
                        {term.description}
                    </div>
                </div>
            }
        </div>
    )
}

export default Term
