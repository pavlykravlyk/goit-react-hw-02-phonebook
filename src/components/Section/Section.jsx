import styles from './Section.module.css';

const Section = ({ children }) => {
  return <section className={styles.Section}>{children}</section>;
};

export default Section;
