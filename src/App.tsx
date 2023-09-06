import { Route, Routes } from 'react-router-dom';
import Data from './pages/Data';
import Suggestions from './pages/Suggestions';
import Home from './pages/Home';
import { CustomLayout } from './components/Layout';

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CustomLayout />}>
          <Route path="data" element={<Data />} />
          <Route path="suggestions" element={<Suggestions />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
