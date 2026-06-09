import { CATEGORIES } from "../../constants/categories";
import { useForm } from "react-hook-form";
import { useExpenseStore } from "../../store/useExpenseStore";
import type { FormValues } from "../../types";
import style from "./AddExpenseForm.module.css";

export default function AddExpenseForm() {
  const addExpenses = useExpenseStore((state) => state.addExpense);
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    addExpenses({
      ...data,
      id: crypto.randomUUID(),
      date: new Date().toISOString().split("T")[0],
    });
    reset();
  };
  return (
    <div>
      
      <form className={style.formField} onSubmit={handleSubmit(onSubmit)}>
        <p className={style.title}>Add expense</p>
        <div className={style.inputs}>
          <label>
            Name
            <input placeholder="e.g. Coffee" type="text" {...register("name", { required: true })} />
          </label>
          <label>
            Amount (€)
            <input
              step="0.01"
              placeholder="0.00"
              type="number"
              {...register("amount", {
                required: true,
                min: 0,
                valueAsNumber: true,
              })}
            />
          </label>
        </div>
        <label>
          Category
          <select {...register("category")}>
            {CATEGORIES.map((e) => (
              <option value={e} key={e}>
                {e}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">+ Add Expenses</button>
      </form>
    </div>
  );
}
