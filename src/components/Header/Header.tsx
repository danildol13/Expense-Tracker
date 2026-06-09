import style from "./Header.module.css"

export default function Header() {
  return (
    <header className={style.head}>
      <h1 className={style.title}>Expense Tracker</h1>
      <p className={style.underTitle}>Track your daily spending</p>
    </header>
  );
}
