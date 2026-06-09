import { CATEGORIES } from "../constants/categories";

export type Category = (typeof CATEGORIES)[number];

export interface Expense {
  id: string;
  name: string;
  amount: number;
  date: string;
  category: Category;
}

export type FormValues = {
  name: string;
  amount: number;
  category: Category;
};
