import { Link, Navigate, Route, Routes, useMatch } from 'react-router-dom';
import Learn from '../Learn';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Learn />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Wave />} />
      </Routes>
      <header>
        <h1>Welcome to React Router!</h1>
      </header>
      <nav>
        <ul>
          <li><Link className="App-link" to="/about">About</Link></li>
          <li><Link className="App-link" to="/hello">Hello</Link></li>
          <li><Link className="App-link" to="/home">Home</Link></li>
          <li><Link className="App-link" to="/random">Test</Link></li>
        </ul>
      </nav>
    </div>
  );
}

function Home() {
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

function About() {
  console.log(window.location.hash)
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </>
  );
}

function Wave() {
  const hash = window.location.hash;
  console.log(window.location.pathname);
  if (hash === "#hello") {
    return <Navigate
      to={{
        pathname: "/hello",
      }}
    />
  }
  if (hash === '#example') {
    return <Navigate
      to={{
        pathname: "/home",
        search: "?utm=your+face",
      }}
    />
  } else {
    return <div> Not found <Link className="App-link" to="/">Back</Link> </div>
  }
}

function Hello() {
  let match = useMatch({
    path: '#hello',
    end: true,
    caseSensitive: true
  })
  console.log(match);
  return <div><p>Hello</p></div>
}

export default App;
