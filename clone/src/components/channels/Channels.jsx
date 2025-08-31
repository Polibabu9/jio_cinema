import React from 'react'
import styles from './channels.module.css'
import channel1 from '../../assets/jio_related/channel1.avif'
import channel2 from '../../assets/jio_related/channel2.avif'
import channel3 from '../../assets/jio_related/channel3.avif'
import channel4 from '../../assets/jio_related/channel4.avif'
import channel5 from '../../assets/jio_related/channel5.avif'
import channel6 from '../../assets/jio_related/channel6.avif'
import channel7 from '../../assets/jio_related/channel7.avif'
import channel8 from '../../assets/jio_related/channel8.avif'
import channel9 from '../../assets/jio_related/channel9.avif'
import channel10 from '../../assets/jio_related/channel10.avif'

const Channels = () => {
    let channels = [channel1 , channel2 , channel3 ,channel4 ,channel5 ,channel6 ,channel7,channel8,channel9,channel10]
    return (
        <>
            <div className={styles.contain}>
                {
                    channels.map((channel)=>{
                        return <img className ={styles.channel} src={channel} alt="channel_images" />
                    })
                }
            </div>
        </>
    )
}

export default Channels