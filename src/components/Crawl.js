import React from 'react'
import * as Styles from './Styles'

const Crawl = ({movieCrawl, onComplete, episode}) => (
    <marquee
        width='100%'
        height={300}
        direction='up'
        bgColor='black'
        loop={1}
        scrollAmount={3}
        style={Styles.movieCrawl}
        onFinish={onComplete}
    >
        <p style={{color: 'yellow', fontSize: 32}}>Episode {episode}</p>
        <p style={{color: 'yellow', fontSize: 25}}>{movieCrawl}</p>
    </marquee>
)

export default Crawl
