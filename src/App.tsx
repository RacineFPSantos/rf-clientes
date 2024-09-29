import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import RestaurantList from '@/pages/RestaurantList';

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-gray-100'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/restaurantes' element={<RestaurantList />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
