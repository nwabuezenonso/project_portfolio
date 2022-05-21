import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

// HOC (Higher order component for wrapping social media links and navigation dots)
const AppWrap = (Component, idName, classNames) => function HOC() {
  
    // wrapping the component giving it an id name and social media
    return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
            <Component />
        </div>

        <div className="copyright">
            <p className='p-text'>@2020 MICAEL</p>
            <p className='p-text'>All rights reserved</p>
        </div>

        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap