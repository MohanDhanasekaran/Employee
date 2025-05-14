// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from './FormPage/FormPage';
import NewComponent from './NewComponent/NewComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/new" element={<NewComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
