import styles from './Event.module.css';

export const Event = () => {
  return (
    <div className={styles.event}>
      <div className={styles.event_card}>
        <img
          src="https://res.cloudinary.com/imichaelowolabi/image/upload/v1656960166/pexels-in-cloudinary/event-manager-redis/pexels-teddy-yang-2263436.jpg"
          alt="event"
          className={styles}
        />
        <div className={styles.event_details}>
          <p className={styles.title}>Music World Festival 3.0</p>
          {/* <p>
            Brief event description Brief event description Brief event
            description
          </p> */}
          <p>
            #concert
          </p>
          <p> 3rd floor Royal palace hotel</p>
          <p className={styles.event_date}>2022-07-21</p>
        </div>
      </div>
    </div>
  );
};
