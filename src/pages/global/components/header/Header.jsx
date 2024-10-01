import React from 'react'
import "./header.scss"
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  window.addEventListener("scroll",()=>{
    const element = document.querySelector(".head-top")
    console.log(window.pageYOffset);
    
    if (window.pageYOffset >= 250) {
      element.classList.add("dark")
    }else{
      element.classList.remove("dark")
    }
  })
  return (
    <section className='head-top'>
    <div className="logo">
      Logo
    </div>
    <nav className="navBar">
      <ul className='navList'>
        <li><a onClick={()=>{navigate("/course")}}>Khoá học</a></li>
        <li>Kiểm tra thử</li>
        <li>Hỗ trợ</li>
      </ul>
    </nav>
  </section>
  )
}
