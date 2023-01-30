import React from 'react'
import Carousel from './home-component/Carousel'
import { slider } from './slider/slider'
import CardContent from './home-component/CardContent'
import CardGenre from './home-component/CardGenre'

function Home() {

    return (
        <div>
            <div className='home-wrapper'>
                <div className='home-container'>                    
                    <Carousel slider={slider}/>
                </div>
                <div className='home-content'>
                    <div className='card-container-left'>
                        <h1 className='m-2'>~List Movies~</h1>
                        <CardContent/>
                    </div>
                    <div className='card-container-right'>
                        <CardGenre/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home