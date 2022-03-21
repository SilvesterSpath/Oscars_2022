import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import Picture from './pages/Picture';
import Actor from './pages/Actor';
import ActorSup from './pages/ActorSup';
import Actress from './pages/Actress';
import ActressSup from './pages/ActressSup';
import Director from './pages/Director';
import Animated from './pages/Animated';
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
            <Route exact path='/' element={<Picture />} />
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
