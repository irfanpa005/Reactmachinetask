import React from 'react'
import styles from './profile.module.css'
import photo from '../../assets/media.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

function Profile() {
  return (
    <div className={styles.profContainer}>
      <img src={photo}></img>
      <h6>John Doe</h6>
      <p>CEO</p>
      <div className={styles.socialIcons}>
        <img src={facebook}></img>
        <img src={instagram}></img>
        <img src={twitter}></img>
      </div>
    </div>
  )
}

export default Profile
