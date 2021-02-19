import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import CharacterPage from './pages/CharacterPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage'

const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Route path="/" component={HomePage} exact />
        <Route path="/search" component={SearchPage}/>
        <Route path="/character/:id" component={CharacterPage}/>
      </main>
    </Router>
  )
}

export default App
