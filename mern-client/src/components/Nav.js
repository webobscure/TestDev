import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import main from '../assets/home.png'
import control from '../assets/task.png'
import giraffes from '../assets/giraffes.png'
import workers from '../assets/people.png'
import settings from '../assets/settings.png'
import support from '../assets/support.png'


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
                    <li className="nav-icon__block_second">
                        <img src={control} alt="control" className="control"/>
                        <h5 className="nav-icon__description_second">Управление</h5>
                    </li>
                    <li className="nav-icon__block_third">
                        <img src={giraffes} alt="giraffes" className="giraffes"/>
                        <h5 className="nav-icon__description_third">Жирафы</h5>
                        <Link to="giraffes"/>
                    </li>
                    <li className="nav-icon__block_fourth">
                        <img src={workers} alt="workers" className="workers"/>
                        <h5 className="nav-icon__description_fourth">Сотрудники</h5>
                    </li>
                    <li className="nav-icon__block_fifth">
                        <img src={settings} alt="settings" className="settings"/>
                        <h5 className="nav-icon__description_fifth">Настройки</h5>
                    </li>
                    <li className="nav-icon__block_sixth">
                        <img src={support} alt="support" className="support"/>
                        <h5 className="nav-icon__description_sixth">Поддержка</h5>
                    </li>
                </ul>
            </nav>
        )
}
