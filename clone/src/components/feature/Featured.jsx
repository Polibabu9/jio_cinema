import React from 'react'
import styles from './feature.module.css'
import FeaturedShow from '../featuredShow/FeaturedShow.jsx';

const Featured = (props) => {
  return (
    <>
    <section className={styles.feature_contain}>
        <h1 className={styles.heading}>Hot Right Now 🔥</h1>
        <div className={styles.shows} >
            {
              props.movies.map((movie)=>{
                  return <FeaturedShow movieDat = {movie} />
              })
            }

        </div>
    </section>
    </>
  )
}

export default Featured