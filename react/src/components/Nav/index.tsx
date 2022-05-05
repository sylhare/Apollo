import { Link, Route, Routes } from 'react-router-dom';
import Learn from '../Learn';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Learn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <header className="App-header">
        <h1>Welcome to React Router!</h1>
        <nav>
          <ul>
            <li><Link className="App-link" to="/home">Home</Link></li>
            <li><Link className="App-link" to="/">Back</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

function Home() {
  console.log(window.location.hash)
  console.log(window.location.pathname)
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default App;
