import React from 'react'
import styles from './featuredshow.module.css'

const FeaturedShow = (props) => {
  return (
    <>
    <div className={styles.featuredShow}>
        <img src={props.movieDat.imageUrl} alt="avengers_img" />
        <div className={styles.movieTitle}>
            {props.movieDat.name}
        </div>
    </div>
    </>
  )
}

export default FeaturedShow