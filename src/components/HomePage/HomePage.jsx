import React from 'react'
import Banner from '../Banner/Banner'
import Teammember from '../Teammember/Teammember'
import TestimonialCards from '../TestimonialCards/TestimonialCards'

function HomePage() {
    return (
        <div className='container mt-[75px]!'>
            <Banner />
            <Teammember />
            <TestimonialCards />
        </div>
    )
}

export default HomePage