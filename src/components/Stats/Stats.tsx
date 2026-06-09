import { useExpenseStore } from "../../store/useExpenseStore";
import formatCurrency from "../../utils/formatCurrency";
import style from "./Stats.module.css";

export default function Stats() {
  const expenses = useExpenseStore((state) => state.expenses);

  const entries = expenses.length;
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const month = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  return (
    <div>
      <ul className={style.cardList}>
        <li className={style.totalCard}>
          <p className={style.title}>Total</p>
          <p>{formatCurrency(total)}</p>
        </li>
        <li>
          <p className={style.title}>Entries</p>
          <p>{entries}</p>
        </li>
        <li>
          <p className={style.title}>Month</p>
          <p>{month}</p>
        </li>
      </ul>
    </div>
  );
}
