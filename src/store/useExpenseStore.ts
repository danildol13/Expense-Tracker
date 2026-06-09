import { persist } from "zustand/middleware";
import type { Expense } from "../types/index";
import { create } from "zustand";

export type Store = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  deleteExpense: (id: string) => void;
};

export const useExpenseStore = create<Store>()(
  persist(
    (set) => ({
      expenses: [],
      addExpense: (expense) =>
        set((state) => ({
          expenses: [...state.expenses, expense],
        })),
      deleteExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((e) => e.id !== id),
        })),
    }),
    { name: "expenses" },
  ),
);
