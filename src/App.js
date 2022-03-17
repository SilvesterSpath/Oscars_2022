import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import Picture from './pages/Picture';
import Actor from './pages/Actor';
import ScoreBoard from './score/ScoreBoard';
import AboutIconLink from './components/AboutIconLink';
import ActorIconLink from './components/ActorIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <ActorIconLink />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Picture />} />
          </Routes>
          <Routes>
            <Route path='/actor' element={<Actor />} />
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
