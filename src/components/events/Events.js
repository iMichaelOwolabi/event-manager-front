import { Event } from './Event';
import styles from './Events.module.css';

export const Events = () => {
  return <section className={styles.events}>
    <Event />
    <Event />
    <Event />
    <Event />
    <Event />
    <Event />
  </section>
}