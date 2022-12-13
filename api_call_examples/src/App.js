
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import First_page from './components/first_page';
import Second_page from './components/second_page';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<First_page />}/>
          <Route path='/second_page' element={<Second_page />}/>
        </Routes>
      </Router>
    </div>
  ) 
}

export default App;
