// import HomepageStyles from './Homepage.module.css';
import { Events } from '../events/Events';

const Homepage = () => {
  const classes = `homepage`
  return <div className={classes}>
    <h1> Your home of events</h1>
    <Events />
  </div>
}

export default Homepage;
