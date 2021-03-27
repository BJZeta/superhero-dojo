import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage'

const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Route path="/" component={HomePage} exact />
        <Route path="/search" component={MainPage}/>
      </main>
    </Router>
  )
}

export default App
