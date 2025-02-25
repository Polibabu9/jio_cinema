import React, { useState } from 'react'
import styles from './tags.module.css'
const Tags = () => {

    let [tags,setTags] = useState([
        "For you",
        "Premium",
        "Laughter Chefs",
        "Cricket",
        "MTV Roadies XX",
        "FREE Movies",
        "Bigg Boss",
        "News",
        "BBK",
        "Kids & Family",
        "AUS vs IND",
        "Free Anime",
        "Studios",
        "ISL",
        "Free Shows",
        "TATA IPL",
        "Top 10"
    ])


    return (
    <>
        <div className={styles.tag_contain}>
            {
                tags.map((tag)=>{
                    return <p className={styles.tags}>{tag}</p>
                })
            }
        </div>
    </>
  )
}

export default Tags