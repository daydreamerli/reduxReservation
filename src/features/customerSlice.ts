import { createSlice,PayloadAction } from "@reduxjs/toolkit"

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface AddFoodToCustomerPayload {
  food: string;
  id: string;
}

export interface CustomerState {
  value:Customer[];
}

const initialState : CustomerState = {
  // an object and valaue
  value:[]
}

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    // methods to update the getState
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload)
    },
    addFoodToCustomer: (
      state,
      action: PayloadAction<AddFoodToCustomerPayload>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },

})

export const { addCustomer,addFoodToCustomer } = customerSlice.actions;
export default customerSlice.reducer;