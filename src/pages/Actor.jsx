import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackFormActor from '../components/FeedbackFormActor';

function Home() {
    return (
    <>
      <FeedbackFormActor />
      <FeedbackStats />
      <FeedbackList />
    </>
  )
}

export default Home