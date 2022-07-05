import styles from './Event.module.css';

export const Event = (props) => {
  const { title, description, category, location, startDate, imageUrl } = props.event;
  return (
    <div className={styles.event}>
      <div className={styles.event_card}>
        <img
          src={imageUrl}
          alt="event"
          className={styles.images}
        />
        <div className={styles.event_details}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>
            {description}...
          </p>
          <p>
            #{category}
          </p>
          <p>{location}</p>
          <p className={styles.event_date}>{ new Date(startDate).toDateString()}</p>
        </div>
      </div>
    </div>
  );
};
