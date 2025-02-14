import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'


const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience download <br/>
         MoViE M@StI App</p>
         <div className='app-download-platforms'>
            <img src={assets.appstore} alt='appstore'/>
            <img src={assets.googleplay} alt='googleplay'/>
         </div>
      
    </div>
  )
}

export default AppDownload
