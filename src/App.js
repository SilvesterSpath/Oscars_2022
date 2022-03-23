import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Picture from './pages/Picture';
import Actor from './pages/Actor';
import ActorSup from './pages/ActorSup';
import Actress from './pages/Actress';
import ActressSup from './pages/ActressSup';
import Director from './pages/Director';
import Animated from './pages/Animated';
import Cinematography from './pages/Cinematography';
import Costume from './pages/Costume';
import Documentary from './pages/Documentary';
import DocumentaryS from './pages/DocumentaryS';
import Editing from './pages/Editing';
import International from './pages/International';
import Makeup from './pages/Makeup';
import ScoreBoard from './score/ScoreBoard';
import AboutIconLink from './components/AboutIconLink';
import CategoryLinks from './components/CategoryLinks';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <CategoryLinks />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path='/movies' element={<Picture />} />
          </Routes>
          <Routes>
            <Route path='/actor' element={<Actor />} />
          </Routes>
          <Routes>
            <Route path='/actor_sup' element={<ActorSup />} />
          </Routes>
          <Routes>
            <Route path='/actress' element={<Actress />} />
          </Routes>
          <Routes>
            <Route path='/actress_sup' element={<ActressSup />} />
          </Routes>
          <Routes>
            <Route path='/director' element={<Director />} />
          </Routes>
          <Routes>
            <Route path='/animated' element={<Animated />} />
          </Routes>
          <Routes>
            <Route path='/cinematography' element={<Cinematography />} />
          </Routes>
          <Routes>
            <Route path='/costume' element={<Costume />} />
          </Routes>
          <Routes>
            <Route path='/doc' element={<Documentary />} />
          </Routes>
          <Routes>
            <Route path='/docs' element={<DocumentaryS />} />
          </Routes>
          <Routes>
            <Route path='/editing' element={<Editing />} />
          </Routes>
          <Routes>
            <Route path='/internat' element={<International />} />
          </Routes>
          <Routes>
            <Route path='/makeup' element={<Makeup />} />
          </Routes>
          <ScoreBoard />
          <Routes>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
