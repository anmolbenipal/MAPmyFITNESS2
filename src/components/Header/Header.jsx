import React,{useRef} from 'react';
import '../../styles/header.css';
import logo from '../../assets/img/dumble.png'
import { useEffect } from 'react';

const nav__links =[
    {
        path:'#home',
        display:'Home'
    },
    {
        path:'#schedule',
        display:'Schedule'
    },
    {
        path:'#courses',
        display:'Courses'
    },
    {
        path:'#pricing-plan',
        display:'Pricing'
    },
]

const Header = () => {

    const headerRef=useRef(null)
    const headerFunc=()=>{
        if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
            headerRef.current.classList.add('sticky__header')
        }
        else{
            headerRef.current.classList.remove('sticky__header')
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',headerFunc)
        return()=>window.removeEventListener('scroll',headerFunc)
    },[]);
  return (<header className='header' ref={headerRef}>
    <div className="container">
        <div className="nav__wrapper">
            <div className="logo">
                <div className="logo__img">
                    <img src={logo} alt=''/>
                </div>
                <h2>MAPmyFITNESS</h2>
            </div>
            <div className="navigation">
                <ul className="menu">
                    {
                        nav__links.map(item=>(
                            <li className="nav__item">
                                <a href={item.path}>{item.display}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="nav__right">
                <button className='register__btn'>Register</button>
                <span className="mobile__menu">
                  <i class="ri-menu-line"></i>
                </span>
            </div>
        </div>
    </div>
  </header>
  );
};

export default Header;