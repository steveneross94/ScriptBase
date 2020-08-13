import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


function HealthcareNews() {

    let [healthNews, setHealthNews] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/articles')
            .then(r => r.json())
            .then(data => setHealthNews(data.articles))
    }, [])


    return (
        <div className='healthcare-news'>
            <h1>Healthcare News!</h1>
            <Container fluid>
                {healthNews ? healthNews.map(art =>
                    <Row>
                        <Col >
                            <Card className='news'>
                                <Card.Img className='article image' src={art.urlToImage} />
                                <Card.Body>
                                    <Card.Link href={art.url}><h2>{art.title}</h2></Card.Link>
                                    <Card.Text>by {art.author}</Card.Text>
                                    <Card.Text>{art.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ) : 'loading...'}
            </Container>

        </div>
    )
}

export default HealthcareNews
