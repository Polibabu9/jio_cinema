import React, { useEffect, useState } from 'react'
import styles from './header.module.css'
import JCLogo from '../../assets/jio_related/jc_logo_v2.svg'
import Crown from '../../assets/jio_related/crown.svg'
import VoicesearchIcon from '../../assets/jio_related/voice-search.svg'
import searchIcon from '../../assets/jio_related/search.svg'
import userIcon from '../../assets/jio_related/avatar_guest.svg'
import Show from '../show/Show'
import Search from '../../pages/Search'

const Header = (props) => {

    let navLinks = ["Home" , "Sports" , "Movies" , "TV Shows" , "More" ]
    let [filteredItems , setFilteredItems] = useState([])
    let [searchTitle , setSearchTitle] = useState("")

    useEffect(()=>{

            if(searchTitle!== ""){
                let filterItems =  props.movies.filter((movie)=>{
                    return movie.name.toUpperCase().includes(searchTitle.toUpperCase())
                })

            setFilteredItems(filterItems)

            }
            else{
                setFilteredItems([]);
            }

        },[searchTitle]);


  return (
    <>
    <div className={styles.headermain}>
        <nav className={styles.navigation}>
            <div className={styles.logo}>
            <img src={JCLogo} alt="logo"/>
            <div className={styles.premium}>
                <img src={Crown} alt="premium-img" />
                <p>Go Premium</p>
                </div>
            </div>
                <ul className={styles.navLinks}>
                    {
                        navLinks.map((link)=>{
                            return <li className={styles.navLink}>{link}</li>
                        })
                    }
                </ul>
        </nav>
        <div className={styles.search}>
                <div className={styles.searchBox}>
                    <div className={styles.headerIcon}>
                       <img src={searchIcon} alt="icon" />
                    </div>


                    <input className={styles.searchInput} 

                    onChange={(event)=>{
                        setSearchTitle(event.target.value)
                    }}
                    
                    type="text" placeholder='Movies , Shows and more' />
                    <div className={styles.headerIcon}>
                        <img src={VoicesearchIcon} alt="Voice-icon" />
                    </div>
                </div>
                <img className={styles.usericon} src={userIcon} alt="profile_img"/>
        </div>
    </div>

    {
        filteredItems.length !==0?(
            <div className={styles.searchedItems}>     
                {
                    filteredItems.map((movie)=>{
                        return <Show movie ={movie}/>
                    })
                }
            </div> 
        ):null
        
            
    }
    
    </>
  )
}

export default Header