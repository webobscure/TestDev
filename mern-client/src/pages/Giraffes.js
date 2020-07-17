import React from 'react'
import giraffeLogo from '../assets/logo.svg'
import ring from '../assets/ring.png'
import GiraffeCard from '../components/GiraffeCard'
//components 
import {Update} from '../components/Update'

export const Giraffes = () => {
    return (
        <div className="giraffe">
            <div className="up-panel">
                <div className="aviary">
                    <h6 className="aviary-number">Вольер 1</h6>
                    <div className="special-divide"></div>
                </div>
                <img src={ring} className="ring" alt="ring"/>
                <div className="profile">
                    <img  src={giraffeLogo} className="user-logo" alt="logo-user"/>
                    <div className="profile-email">
                        <h5 className="profile-email__name">hello@giraffe.com</h5>
                    </div>
                </div>
                <div className="divide"></div>
            </div>
            <div className="middle-panel">
                <GiraffeCard />
            </div>
            <div className="down-panel">
                    <Update />
            </div>

        </div>
    )
}