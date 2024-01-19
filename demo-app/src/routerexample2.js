import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom"; // 6.21.2

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics/">Topics</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/topics/*" element={<Topics />} /> {/* add `/*` to indicate the existence of descendents */}
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>This is the Home page.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is the About page.</p>
    </div>
  )
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <p>This is the Topics page.</p>
      <h3>Please select a topic.</h3>
      <ul>
        <li>
          <Link to="cats">Cats</Link>
        </li>
        <li>
          <Link to="dogs">Dogs</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":topicId" element={<Topic />} />
      </Routes>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h4>Requested topic ID: {topicId}</h4>;
}
