import styles from './Homepage.module.css';
import { Events } from '../events/Events';

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <h1> Your home of events</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          name="search"
          className={styles.search_bar}
        />
      </div>
      <div className={styles.search_icon_wrapper}>
        <img src="https://res.cloudinary.com/imichaelowolabi/image/upload/v1657045124/pexels-in-cloudinary/event-manager-redis/search1.png" className={styles.search_icon} alt="search" />
      </div>
      <Events />
    </div>
  );
};

export default Homepage;
