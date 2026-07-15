import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdminLoginPage from './pages/AdminLoginPage'
import DashboardLayout from './dashboard/DashboardLayout'
import DashboardHome from './dashboard/pages/DashboardHome'
import Murojaatlar from './dashboard/pages/Murojaatlar'
import HujjatAylanishi from './dashboard/pages/HujjatAylanishi'
import Talabalar from './dashboard/pages/Talabalar'
import Hisobotlar from './dashboard/pages/Hisobotlar'
import Sozlamalar from './dashboard/pages/Sozlamalar'
import ProtectedRoute from './component/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="murojaatlar" element={<Murojaatlar />} />
          <Route path="hujjat-aylanishi" element={<HujjatAylanishi />} />
          <Route path="talabalar" element={<Talabalar />} />
          <Route path="hisobotlar" element={<Hisobotlar />} />
          <Route path="sozlamalar" element={<Sozlamalar />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
