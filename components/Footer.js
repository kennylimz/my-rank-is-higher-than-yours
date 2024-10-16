import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Inspired by Prof. Ma {'|'} @DoomProphet
      </p>
      <p>
        Based on an equation by Prof. Chan {'|'}
        <a href="https://github.com/MichaelChan2417" target="_blank" rel="noopener noreferrer">
          @MichaelChan2417
        </a>
      </p>
    </footer>
  );
}
