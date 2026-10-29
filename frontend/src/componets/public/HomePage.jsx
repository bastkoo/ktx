import { Link } from 'react-router-dom'
import logo from '../../assets/Logo_Đại_học_Huế.svg.webp'
import './HomePage.css'

function HomePage() {
  return (
    <div className="public-home">
      <a className="home-skip-link" href="#home-main">Bỏ qua đến nội dung chính</a>
      <header className="home-header">
        <Link className="home-brand" to="/" aria-label="Ký túc xá Đại học Huế – Trang chủ">
          <img src={logo} width="48" height="48" alt="Logo Đại học Huế" />
          <span><strong>Ký túc xá</strong><small>ĐẠI HỌC HUẾ</small></span>
        </Link>
        <nav className="home-nav" aria-label="Điều hướng trang chủ">
          <a className="home-nav-current" href="#lien-he">Thông tin liên hệ</a>
          <Link className="home-portal-link" to="/tong-quan">Cổng sinh viên <span aria-hidden="true">↗</span></Link>
        </nav>
      </header>

      <main id="home-main">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="home-hero-copy">
            <p className="home-overline"><span aria-hidden="true" /> KÝ TÚC XÁ ĐẠI HỌC HUẾ</p>
            <h1 id="home-title">Một nơi để<br /><em>an tâm học tập.</em></h1>
            <p className="home-intro">Thông tin và các dịch vụ nội trú dành cho sinh viên Đại học Huế, được kết nối trong một không gian chung.</p>
            <Link className="home-primary-action" to="/tong-quan">Truy cập cổng sinh viên <span aria-hidden="true">→</span></Link>
            <p className="home-helper">Dành cho sinh viên đang sử dụng dịch vụ ký túc xá</p>
          </div>

          <div className="home-illustration" aria-hidden="true">
            <div className="illustration-caption"><span>HUẾ</span><span>ĐẠI HỌC HUẾ</span></div>
            <svg className="campus-drawing" viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M48 337H474" stroke="currentColor" strokeWidth="1.4" />
              <path d="M94 337V178L260 91L426 178V337" stroke="currentColor" strokeWidth="2" />
              <path d="M70 179L260 78L450 179H70Z" fill="#F5F6F8" stroke="currentColor" strokeWidth="2" />
              <path d="M124 192H396V337H124V192Z" fill="#F5F6F8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M150 216H184V253H150V216ZM243 216H277V253H243V216ZM336 216H370V253H336V216Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M150 276H184V313H150V276ZM336 276H370V313H336V276Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M232 337V277C232 261.536 244.536 249 260 249C275.464 249 288 261.536 288 277V337" stroke="currentColor" strokeWidth="1.5" />
              <path d="M247 337V282C247 274.82 252.82 269 260 269C267.18 269 273 274.82 273 282V337" stroke="currentColor" strokeWidth="1.2" />
              <path d="M65 337V300H115V337M405 337V300H455V337" stroke="currentColor" strokeWidth="1.5" />
              <path d="M85 300V280M435 300V280" stroke="currentColor" strokeWidth="1.4" />
              <path d="M60 279C60 265 70 255 84 255C98 255 108 265 108 279M412 279C412 265 422 255 436 255C450 255 460 265 460 279" stroke="currentColor" strokeWidth="1.4" />
              <path d="M246 93V54H274V93" stroke="currentColor" strokeWidth="1.5" />
              <path d="M260 55V28M250 39L260 28L270 39" stroke="#8F2635" strokeWidth="2" />
              <path d="M30 337H490" stroke="#8F2635" strokeWidth="2.5" />
              <circle cx="260" cy="186" r="6" fill="#8F2635" />
            </svg>
            <div className="illustration-index"><span>01</span><span>KHÔNG GIAN NỘI TRÚ</span></div>
          </div>
        </section>

        <section id="lien-he" className="home-contact" aria-labelledby="contact-title">
          <div className="contact-heading">
            <span className="contact-marker" aria-hidden="true">02</span>
            <h2 id="contact-title">Thông tin liên hệ</h2>
          </div>
          <div className="contact-details">
            <a className="contact-item" href="tel:02343824198">
              <span className="contact-label">Điện thoại</span>
              <strong>0234.3824198</strong>
              <span className="contact-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="contact-item" href="mailto:ttpvsv@hueuni.edu.vn">
              <span className="contact-label">Email</span>
              <strong>ttpvsv@hueuni.edu.vn</strong>
              <span className="contact-arrow" aria-hidden="true">↗</span>
            </a>
            <div className="contact-item contact-address">
              <span className="contact-label">Địa chỉ</span>
              <strong>42 Nguyễn Khánh Toàn, Phường An Cựu, Thành Phố Huế</strong>
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <span>Ký túc xá Đại học Huế</span>
        <Link to="/tong-quan">Đến cổng sinh viên <span aria-hidden="true">→</span></Link>
      </footer>
    </div>
  )
}

export default HomePage
