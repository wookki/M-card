import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@pages/Home'
import TestPage from '@pages/Test'
import ScrollToTop from './components/shared/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
