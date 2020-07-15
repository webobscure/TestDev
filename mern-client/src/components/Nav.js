import React from 'react'
//import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import main from '../assets/home.svg'
//import control from '../assets/task.svg'
//import giraffes from '../assets/giraffes.svg'
//import workers from '../assets/people.svg'
//import settings from '../assets/settings.svg'
//import support from '../assets/support.svg'


export const Navbar = () => {
        return (
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" className="logo-icon"/>
                    <div className="logo-brand">
                        <h5 className="logo-brand__name">Ферма Заслуженных Жирафов</h5>
                        <h5 className="logo-brand__description">России и СНГ</h5>
                    </div>
                    
                </div>
                <ul className="nav-icon">
                    <li className="nav-icon__block_first">
                        <img src={main} alt="home" className="home"/>
                        <h5 className="nav-icon__description_first">Главная</h5>
                    </li>
                    

                </ul>
            </nav>
        )
}
