import Dashboard from "../components/Dashboard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{ marginBottom: '2rem' }}>Workforce Management Tool</h1>
        <Dashboard />
      </main>
    </div>
  );
}
