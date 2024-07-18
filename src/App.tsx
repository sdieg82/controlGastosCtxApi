import { useMemo } from "react"
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./components/BudgetTracker"
import ExpenseModal from "./components/ExpenseModal"


function App() {

  const {state}=useBudget()
  const isValid=useMemo(()=>state.budget>0,[state.budget])

  return (
    <>
     <header className="bg-blue-950 py-8 max-h-72">
        <h1 className="text-center uppercase font-black text-4xl text-white">
          Planificador de gastos
        </h1>
     </header>
     <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValid ? 
        
        <BudgetTracker
        
        /> 
        
        : 
        
        <BudgetForm
        
        
        />}
     </div>
     
     {isValid && (
      <main className="mx-auto py-10 max-w-3xl">
        <ExpenseModal
       
        />
      </main>
     ) }
     
     
    </>
  )
}

export default App
