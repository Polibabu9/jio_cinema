import React from 'react'
import styles from './show.module.css'
const Show = (props) => {
  return (
    <>
        <div className={styles.show}>
            <img src={props.movie.imageUrl} alt="3_idiots" />
            <div className={styles.movieTitle}>
              {props.movie.name}
            </div>
        </div>
    </>
  )
}

export default Show