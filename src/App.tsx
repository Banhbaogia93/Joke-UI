import { Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Home from './pages/Home'
import Article from './pages/Article'
import PageNotFound from './pages/404'
import NoMore from './pages/NoMore'
import React from 'react'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/joke/:id" element={<Article />} />
          <Route path="/end" element={<NoMore />} />
          <Route path="/404" element={<PageNotFound />} />
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default App
