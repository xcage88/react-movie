import React, {useState} from 'react'
import aquaman from '../../asset/card/aquaman.jpg'
import avenger from '../../asset/card/avenger.jpg'
import darkest from '../../asset/card/darkest.jpg'
import buffalo from '../../asset/card/buffalo.jpg'
import terminator from '../../asset/card/terminator.jpg'
import sicario from '../../asset/card/sicario.jpg'
import johnWick from '../../asset/card/john-wick.jpg'
import jack from '../../asset/card/jack-ryan.jpg'
import solo from '../../asset/card/solo.jpg'
import pearl from '../../asset/card/pearl.jpg'
import jailangkung from '../../asset/card/jailangkung.jpg'
import thor from '../../asset/card/thor.jpg'
import deadpool from '../../asset/card/deadpool.jpg'
import badboys from '../../asset/card/badboys.jpg'
import batman from '../../asset/card/The-Batman.jpg'
import bonds from '../../asset/card/No-Time-to-Die.jpg'

function CardContent() {

    const [showMore, setShowMore] = useState(false)

    return (
        <div className='card-content'>
            <div className='card-main mb-4 border-2'>

                {/* card content */}
                <div className='card-back' style={{width: '15rem', padding: '1%'}}>
                    <div className='card-image mb-3'>
                        <img src={aquaman} alt="aquaman" className='image-movie' width='100%' style={{borderRadius: '10px'}}/>
                    </div>
                    <div className='card-body card-text'>
                        <h5 className='title mb-3'>Aquaman</h5>
                        <p className='genre'>Action, Adventure, Fantasy, Super Hero</p>
                        <div className='movie-watch'>
                            <button className='watch'>Watch</button>
                        </div>
                    </div>
                </div>

                <div className='card-back' style={{width: '15rem', padding: '1%'}}>
                    <div className='card-image mb-3'>
                        <img src={avenger} alt="avenger" className='image-movie' width='100%' style={{borderRadius: '10px'}}/>
                    </div>
                    <div className='card-body card-text'>
                        <h5 className='title mb-3'>Avengers</h5>
                        <p className='genre'>Action, Adventure, Fantasy, Super Hero</p>
                        <div className='movie-watch'>
                            <button className='watch'>Watch</button>
                        </div>
                    </div>
                </div>

                <div className='card-back' style={{width: '15rem', padding: '1%'}}>
                    <div className='card-image mb-3'>
                        <img src={darkest} alt="darkest" className='image-movie' width='100%' style={{borderRadius: '10px'}}/>
                    </div>
                    <div className='card-body card-text'>
                        <h5 className='title mb-3'>The Darkest Mind</h5>
                        <p className='genre'>Action, Adventure, Fantasy, Super Hero</p>
                        <div className='movie-watch'>
                            <button className='watch'>Watch</button>
                        </div>
                    </div>
                </div>

                <div className='card-back' style={{width: '15rem', padding: '1%'}}>
                    <div className='card-image mb-3'>
                        <img src={buffalo} alt="buffalo" className='image-movie' width='100%' style={{borderRadius: '10px'}}/>
                    </div>
                    <div className='card-body card-text'>
                        <h5 className='title mb-3'>Buffalo Boys</h5>
                        <p className='genre'>Action, Adventure, Fantasy, Super Hero</p>
                        <div className='movie-watch'>
                            <button className='watch'>Watch</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-main mb-4'>

                {/* card content */}
                <div className='card-back' style={{width: '15rem', padding: '1%'}}>
                    <div className='card-image mb-3'>
                        <img src={terminator} alt="terminator" className='image-movie' width='100%' style={{borderRadius: '10px'}}/>
                    </div>
                    <div className='card-body card-text'>
                        <h5 className='title mb-3'>Terminator: Dark Fate</h5>
                        <p className='genre'>Action, Adventure, Fantasy, Super Hero</p>
                        <div className='movie-watch'>
                            <button className='watch'>Watch</button>
                        </div>
                    </div>
                </div>

                <div className='card-back' style={{width: '15rem', padding: '1%'}}>
                    <div className='card-image mb-3'>
                        <img src={sicario} alt="sicario" className='image-movie' width='100%' style={{borderRadius: '10px'}}/>
                    </div>
                    <div className='card-body card-text'>
                        <h5 className='title mb-3'>Sicario</h5>
                        <p className='genre'>Action, Adventure, Fantasy, Super Hero</p>
                        <div className='movie-watch'>
                            <button className='watch'>Watch</button>
                        </div>
                    </div>
                </div>

                <div className='card-back' style={{width: '15rem', padding: '1%'}}>
                    <div className='card-image mb-3'>
                        <img src={johnWick} alt="johnWick" className='image-movie' width='100%' style={{borderRadius: '10px'}}/>
                    </div>
                    <div className='card-body card-text'>
                        <h5 className='title mb-3'>John Wick: Chapter 2</h5>
                        <p className='genre'>Action, Adventure, Fantasy, Super Hero</p>
                        <div className='movie-watch'>
                            <button className='watch'>Watch</button>
                        </div>
                    </div>
                </div>

                <div className='card-back' style={{width: '15rem', padding: '1%'}}>
                    <div className='card-image mb-3'>
                        <img src={jack} alt="jack" className='image-movie' width='100%' style={{borderRadius: '10px'}}/>
                    </div>
                    <div className='card-body card-text'>
                        <h5 className='title mb-3'>Jack Ryan: Shadow Recruit</h5>
                        <p className='genre'>Action, Adventure, Fantasy, Super Hero</p>
                        <div className='movie-watch'>
                            <button className='watch'>Watch</button>
                        </div>
                    </div>
                </div>
            </div>

            {showMore ? (
                <div className='card-main mb-4'>

                    {/* card content */}
                    <div className='card-back' style={{width: '15rem', padding: '1%'}}>
                        <div className='card-image mb-3'>
                            <img src={jailangkung} alt="jailangkung" className='image-movie' width='100%' style={{borderRadius: '10px'}}/>
                        </div>
                        <div className='card-body card-text'>
                            <h5 className='title mb-3'>Perjanjian Dengan Iblis</h5>
                            <p className='genre'>Action, Adventure, Fantasy, Super Hero</p>
                            <div className='movie-watch'>
                                <button className='watch'>Watch</button>
                            </div>
                        </div>
                    </div>

                    <div className='card-back' style={{width: '15rem', padding: '1%'}}>
                        <div className='card-image mb-3'>
                            <img src={pearl} alt="pearl" className='image-movie' width='100%' style={{borderRadius: '10px'}}/>
                        </div>
                        <div className='card-body card-text'>
                            <h5 className='title mb-3'>Pearl Harbor</h5>
                            <p className='genre'>Action, Adventure, Fantasy, Super Hero</p>
                            <div className='movie-watch'>
                                <button className='watch'>Watch</button>
                            </div>
                        </div>
                    </div>

                    <div className='card-back' style={{width: '15rem', padding: '1%'}}>
                        <div className='card-image mb-3'>
                            <img src={solo} alt="solo" className='image-movie' width='100%' style={{borderRadius: '10px'}}/>
                        </div>
                        <div className='card-body card-text'>
                            <h5 className='title mb-3'>Solo: Stars Wars</h5>
                            <p className='genre'>Action, Adventure, Fantasy, Super Hero</p>
                            <div className='movie-watch'>
                                <button className='watch'>Watch</button>
                            </div>
                        </div>
                    </div>

                    <div className='card-back' style={{width: '15rem', padding: '1%'}}>
                        <div className='card-image mb-3'>
                            <img src={thor} alt="thor" className='image-movie' width='100%' style={{borderRadius: '10px'}}/>
                        </div>
                        <div className='card-body card-text'>
                            <h5 className='title mb-3'>Thor Ragnarok</h5>
                            <p className='genre'>Action, Adventure, Fantasy, Super Hero</p>
                            <div className='movie-watch'>
                                <button className='watch'>Watch</button>
                            </div>
                        </div>
                    </div>
                </div>                
            ) : null}

            {showMore ? (
                <div className='card-main mb-4'>

                    {/* card content */}
                    <div className='card-back' style={{width: '15rem', padding: '1%'}}>
                        <div className='card-image mb-3'>
                            <img src={batman} alt="batman" className='image-movie' width='100%' style={{borderRadius: '10px'}}/>
                        </div>
                        <div className='card-body card-text'>
                            <h5 className='title mb-3'>The Batman</h5>
                            <p className='genre'>Action, Adventure, Fantasy, Super Hero</p>
                            <div className='movie-watch'>
                                <button className='watch'>Watch</button>
                            </div>
                        </div>
                    </div>

                    <div className='card-back' style={{width: '15rem', padding: '1%'}}>
                        <div className='card-image mb-3'>
                            <img src={badboys} alt="badboys" className='image-movie' width='100%' style={{borderRadius: '10px'}}/>
                        </div>
                        <div className='card-body card-text'>
                            <h5 className='title mb-3'>Bad Boys For Life</h5>
                            <p className='genre'>Action, Adventure, Fantasy, Super Hero</p>
                            <div className='movie-watch'>
                                <button className='watch'>Watch</button>
                            </div>
                        </div>
                    </div>

                    <div className='card-back' style={{width: '15rem', padding: '1%'}}>
                        <div className='card-image mb-3'>
                            <img src={bonds} alt="bonds" className='image-movie' width='100%' style={{borderRadius: '10px'}}/>
                        </div>
                        <div className='card-body card-text'>
                            <h5 className='title mb-3'>No Time To Die</h5>
                            <p className='genre'>Action, Adventure, Fantasy, Super Hero</p>
                            <div className='movie-watch'>
                                <button className='watch'>Watch</button>
                            </div>
                        </div>
                    </div>

                    <div className='card-back' style={{width: '15rem', padding: '1%'}}>
                        <div className='card-image mb-3'>
                            <img src={deadpool} alt="deadpool" className='image-movie' width='100%' style={{borderRadius: '10px'}}/>
                        </div>
                        <div className='card-body card-text'>
                            <h5 className='title mb-3'>Deadpool</h5>
                            <p className='genre'>Action, Adventure, Fantasy, Super Hero</p>
                            <div className='movie-watch'>
                                <button className='watch'>Watch</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            <div className='show-button'><button onClick={() => setShowMore(!showMore)}>{!showMore ? 'Show More' : 'Hide'}</button></div>
        </div>
    )
}

export default CardContent