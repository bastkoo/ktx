import { Outlet } from 'react-router-dom'
import StudentHeader from '../student/StudentHeader.jsx'
import StudentSidebar from '../student/StudentSidebar.jsx'
import './StudentLayout.css'

function StudentLayout() {
  return (
    <div className="student-shell">
      <a className="skip-link" href="#student-content">Bỏ qua điều hướng</a>
      <StudentSidebar />
      <div className="student-workspace">
        <StudentHeader />
        <main id="student-content" className="student-main" tabIndex="-1">
          <Outlet />
        </main>
        <footer className="student-footer"><span>Nhóm sinh viên thực hiện 23T1080004</span><span>Ký túc xá Đại học Huế</span></footer>
      </div>
    </div>
  )
}

export default StudentLayout
