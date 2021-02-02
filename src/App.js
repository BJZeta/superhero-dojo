import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Route path="/" component={HomePage} exact />
      </main>
    </Router>
  )
}

export default App
