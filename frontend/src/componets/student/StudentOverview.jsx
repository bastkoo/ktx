function StudentOverview({ section = 'Tổng quan' }) {
  return (
    <section className="welcome-panel" aria-labelledby="welcome-title">
      <div className="welcome-copy">
        <span className="welcome-rule" aria-hidden="true" />
        <p className="welcome-label">Không gian của bạn</p>
        <h2 id="welcome-title">{section === 'Tổng quan' ? 'Chào mừng bạn đến với ký túc xá.' : section}</h2>
        <p className="welcome-description">
          {section === 'Tổng quan'
            ? 'Các thông tin và dịch vụ dành cho sinh viên sẽ được cập nhật tại đây.'
            : `Khu vực ${section.toLocaleLowerCase('vi')} đã sẵn sàng để kết nối với chức năng chính thức.`}
        </p>
        <p className="demo-note">Giao diện nền tảng · Chưa kết nối dữ liệu nghiệp vụ</p>
      </div>
      <div className="welcome-seal" aria-hidden="true"><span>HUẾ</span><i /></div>
    </section>
  )
}

export default StudentOverview
