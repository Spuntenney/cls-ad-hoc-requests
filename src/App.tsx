import { Navigate, Route, Routes } from 'react-router-dom'
import { PlaceholderPage } from './components/PlaceholderPage'
import { AppShell } from './layouts/AppShell'

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Navigate to="/sample-1" replace />} />
        <Route path="sample-1" element={<PlaceholderPage title="Sample 1" />} />
        <Route path="sample-2" element={<PlaceholderPage title="Sample 2" />} />
        <Route path="sample-3" element={<PlaceholderPage title="Sample 3" />} />
        <Route path="sample-4" element={<PlaceholderPage title="Sample 4" />} />
        <Route path="admin" element={<PlaceholderPage title="Admin" />} />
        <Route path="*" element={<Navigate to="/sample-1" replace />} />
      </Route>
    </Routes>
  )
}
