import React from 'react'
import "./header.scss"

export default function Header() {
  return (
    <header>
      <section className='head-top'>
        <div className="logo">
          Logo
        </div>
        <nav className="navBar">
            <ul className='navList'>
              <li>Lộ trình</li>
              <li>Kiểm tra thử</li>
              <li>Hỗ trợ</li>
              <div className='auth-btn'>
                <button>Đăng ký</button>
                <button>Đăng Nhập</button>
              </div>
            </ul>
        </nav>
      </section>
    </header>
  )
}
