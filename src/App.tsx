import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { SiteLayout } from './components/layout/site-layout'
import { AboutPage } from './pages/about-page'
import { ContactPage } from './pages/contact-page'
import { HomePage } from './pages/home-page'
import { NotFoundPage } from './pages/not-found-page'
import { ProductsServicesPage } from './pages/products-services-page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />} path="/">
          <Route index element={<HomePage />} />
          <Route element={<ProductsServicesPage />} path="products-services" />
          <Route element={<AboutPage />} path="about" />
          <Route element={<ContactPage />} path="contact" />
          <Route element={<Navigate to="/products-services" replace />} path="services-products" />
          <Route element={<NotFoundPage />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
