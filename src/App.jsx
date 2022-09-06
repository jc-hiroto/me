import HomeContainer from './containers/HomeContainer';
import { Navigate, Route, Routes } from 'react-router-dom';
import IPOContainer from './containers/IPOContainer';
import NotFoundContainer from './containers/NotFoundContainer';
import ResumeDownloadContainer from './containers/resumeDownloadContainer';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/ipo" element={<IPOContainer />} />
      <Route path="/resume" element={<ResumeDownloadContainer url="https://github.com/jc-hiroto/me/raw/master/public/po_hao_chang_resume.pdf" />} />
      <Route path="/404" element={<NotFoundContainer />} />
      <Route
        path="*"
        element={<Navigate to="/404" />}
      />
    </Routes>
  );
}

export default App;
