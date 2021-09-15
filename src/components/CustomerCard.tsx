import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardType{
  id:string;
  name: string;
  food: string[];
} 

export default function CustomerCard({ id,name, food }: CustomerCardType) {
  
  const [customerFoodInput, setCustomerFoodInput] = useState("");
  const dispatch = useDispatch()
  
  return (
    <div className="customer-food-card-container">
    <h2>{name}</h2>
    <div className="customer-foods-container">
      <div className="customer-food">
        {food.map((food) => {
          return <p>{food}</p>;
        })}
      </div>
      <div className="customer-food-input-container">
        <input
          value={customerFoodInput}
          onChange={(e) => setCustomerFoodInput(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(
              addFoodToCustomer({
                id,
                food: customerFoodInput,
              })
            );
          }}
        >
          Add
        </button>
      </div>
    </div>
  </div>
  )
}










