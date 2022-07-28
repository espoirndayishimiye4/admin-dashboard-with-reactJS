import React,{useState} from 'react'
import Logo from '../../imgs/img1.png'
import './Sidebar.css'
import { sidebarData } from '../data/data';
import {UilSignOutAlt} from '@iconscout/react-unicons';
const Sidebar = () =>{
    const [selected, setSelected] = useState(0)
    return(
        <div className='Sidebar'>
            <div className='logo'>
                <img scr={Logo} alt="img"/>
                <span>
                    Urugerero
                </span>
            </div>
            <div className='menu'>
                {sidebarData.map((item, index)=>{
                    return(
                        <div className={selected === index ? "menuItem active" : "menuItem" }
                        key={index}
                        onClick={()=>setSelected(index) }
                        >
                            <item.icon />
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}
                <div className='menuItem'>
                    <UilSignOutAlt/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar