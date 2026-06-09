import AddExpenseForm from "./components/AddExpenseForm/AddExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import style from "./App.module.css";

function App() {
  return (
    <main className={style.headBlock}>
      <Header />
      <div className={style.middleBlock}>
        <Stats />
        <AddExpenseForm />
        <ExpenseList />
      </div>
    </main>
  );
}

export default App;
