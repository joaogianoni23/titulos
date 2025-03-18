import styles from './section.module.css';
import Card from '../components/cards';

const Section = ({ titulo, children }) => {
    return (
        <section className={styles.promo}>
          <h2>{titulo}</h2>
          <div className={styles.trophiesGrid}>{children}</div>
        </section>

    )
}

export default Section;