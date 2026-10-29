import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/tong-quan': 'Tổng quan',
  '/dang-ky-phong': 'Đăng ký phòng',
  '/thanh-toan-tien-phong': 'Thanh toán tiền phòng',
  '/thanh-toan-dien-nuoc': 'Thanh toán tiền điện nước',
  '/thanh-toan-coc-noi-tru': 'Thanh toán cọc nội trú',
}

function StudentHeader() {
  const { pathname } = useLocation()
  const pageTitle = pageTitles[pathname] ?? 'Tổng quan'

  return (
    <header className="student-header">
      <div className="header-title-wrap">
        <span className="header-kicker">CỔNG SINH VIÊN</span>
        <h1>Ký túc xá Đại học Huế</h1>
      </div>
      <div className="header-actions">
        <span className="current-page" aria-current="page">{pageTitle}</span>
      </div>
    </header>
  )
}

export default StudentHeader
