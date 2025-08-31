import React from 'react'
import styles from './shows.module.css'
import Show from '../show/Show'

const Shows = (props) => {
  return (
    <>
    <div className={styles.shows}>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.showsParent}>
            {
              props.movies.map((movie)=>{
                return <Show movie = {movie}/>
              })
            }
        </div>
    </div>
    </>
  )
}

export default Shows