import { useState } from "react";
import { useExpenseStore } from "../../store/useExpenseStore";
import { CATEGORIES } from "../../constants/categories";
import formatCurrency from "../../utils/formatCurrency";
import style from "./ExpenseList.module.css";
import { RxCross2 } from "react-icons/rx";

export default function ExpenseList() {
  const [filter, setFilter] = useState("All");
  const expenses = useExpenseStore((state) => state.expenses);
  const deleteExpense = useExpenseStore((state) => state.deleteExpense);
  const filtered =
    filter === "All" ? expenses : expenses.filter((e) => e.category === filter);

  return (
    <div className={style.mainBlock}>
      <div className={style.topSection}>
        <p className={style.title}>Expenses</p>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          {CATEGORIES.map((e) => (
            <option value={e} key={e}>
              {e}
            </option>
          ))}
        </select>
      </div>

      {filtered.map((e) => (
        <div className={style.bottomSection} key={e.id}>
          <div className={style.leftSide}>
            <p className={style.category}>{e.category}</p>
            <p className={style.name}>{e.name}</p>
          </div>
          <div className={style.rightSide}>
            <p className={style.amount}>{formatCurrency(e.amount)}</p>
            <button onClick={() => deleteExpense(e.id)}>{<RxCross2 />}</button>
          </div>
        </div>
      ))}
    </div>
  );
}
