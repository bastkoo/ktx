import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/Logo_Đại_học_Huế.svg.webp'

const navigation = [
  { to: '/tong-quan', label: 'Tổng quan', icon: '⌂', end: true },
  { to: '/dang-ky-phong', label: 'Đăng ký phòng', icon: '▦' },
  { to: '/thanh-toan-tien-phong', label: 'Thanh toán tiền phòng', icon: '₫' },
  { to: '/thanh-toan-dien-nuoc', label: 'Thanh toán tiền điện nước', icon: '⌁' },
  { to: '/thanh-toan-coc-noi-tru', label: 'Thanh toán cọc nội trú', icon: '◉' },
]

function StudentSidebar() {
  return (
    <aside className="student-rail" aria-label="Điều hướng sinh viên">
      <Link className="brand" to="/" aria-label="Ký túc xá Đại học Huế – Trang chủ">
        <img src={logo} width="44" height="44" alt="Logo Đại học Huế" />
        <span className="brand-copy"><strong>Ký túc xá</strong><small>ĐẠI HỌC HUẾ</small></span>
      </Link>

      <nav className="student-nav" aria-label="Các mục dành cho sinh viên">
        {navigation.map(({ to, label, icon, end }) => (
          <NavLink key={to} to={to} end={end} className={({ isActive }) => `student-nav-link${isActive ? ' is-active' : ''}`}>
            <span className="nav-glyph" aria-hidden="true">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="rail-note"><span className="rail-note-mark" aria-hidden="true">H</span><p>Cùng xây dựng<br />một mái nhà chung.</p></div>
    </aside>
  )
}

export default StudentSidebar
