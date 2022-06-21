import HomeContainer from './containers/HomeContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IPOContainer from './containers/IPOContainer';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/ipo" element={<IPOContainer />} />
    </Routes>
  );
}

export default App;
