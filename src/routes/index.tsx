import { Dashboard } from '../pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { WriteNowPage } from '../pages/WriteNowPages'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/escrever-agora" element={<WriteNowPage/>} />
      </Routes>
    </BrowserRouter>
  )
}