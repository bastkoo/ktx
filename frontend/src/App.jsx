import { Navigate, Route, Routes } from 'react-router-dom'
import StudentLayout from './componets/layout/StudentLayout.jsx'
import StudentOverview from './componets/student/StudentOverview.jsx'
import HomePage from './componets/public/HomePage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<StudentLayout />}>
        <Route path="tong-quan" element={<StudentOverview />} />
        <Route path="dang-ky-phong" element={<StudentOverview section="Đăng ký phòng" />} />
        <Route path="thanh-toan-tien-phong" element={<StudentOverview section="Thanh toán tiền phòng" />} />
        <Route path="thanh-toan-dien-nuoc" element={<StudentOverview section="Thanh toán tiền điện nước" />} />
        <Route path="thanh-toan-coc-noi-tru" element={<StudentOverview section="Thanh toán cọc nội trú" />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
