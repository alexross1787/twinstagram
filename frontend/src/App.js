import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/login';
import Register from './pages/register';
import NewPost from './pages/newPost';
import Posts from './pages/posts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/newpost" component={NewPost} />
          <Route path="/" component={Posts} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
