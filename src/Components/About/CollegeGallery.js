import React, { useEffect, useState } from 'react'
import './CollegeGallery.css'
import AboutBanner from '../AboutBanner'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'

function CollegeGallery() {
    const [ items, setItems ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setEror ] = useState(null)
    const [ page, setPage ] = useState(0)

    const link = `localhost:8080/college-gallery?limit=6&skip=`

    //console.log(items);

    const fetchData = () => {
        setIsLoading(true)
        setEror(null)

        axios
            .get(`localhost:8080/college-gallery?limit=6&skip=${page}`)
            .then(((data) => {
                setItems(prevItems => [...prevItems, ...data])
            }))
            .catch(err => setEror(err))
            .finally(setIsLoading(false))
    }

    useEffect(() => {
        //fetchData()
        axios
            .get(`localhost:8080/college-gallery?limit=6&skip=${page}`)
            .then((res) => {
                console.log(res)
            })
            .catch(err => console.log(err))
    })

    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading){
            return
        }
        fetchData()
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isLoading])

    const imageList = [ 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90 ]

  return (
    <>
        <AboutBanner name='College Gallery' />

        <Container>
            <Row>
                {/* {items && items.map((item, index) => {

                })} */}
                {imageList && imageList.map((item, index) => {
                    return(
                        <Col sm='4' className='gallery-img' key={index}>
                            <img src={`../images/gallery/${item}.jpeg`} alt={item} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </>
  )
}

export default CollegeGallery