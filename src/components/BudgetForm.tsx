import { useState,ChangeEvent, useMemo} from "react"

export default function BudgetForm() {
  
    const [budget,setBudget]=useState(0)
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setBudget(e.target.valueAsNumber) 
    }
    const isValid =useMemo(()=>{
        return isNaN(budget) || budget<=0
    },[budget])
    return (
        <form action="" className="space-y-5">
            <div className="flex flex-col space-y-5">
                <label htmlFor="" className="text-4xl text-blue-600 font-bold text-center">
                    Definir Presupuesto
                </label>
            </div>
            <input id="budgetId" 
                type="number"  
                className="w-full bg-white border border-gray-200 p-2" 
                placeholder="Define tu presupuesto" 
                name="budget"
                value={budget}
                onChange={handleChange}
            />
            <input 
                type="submit"  
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40" 
                value="Define tu presupuesto" 
                disabled={isValid}
            />
        </form>
    )
    }
