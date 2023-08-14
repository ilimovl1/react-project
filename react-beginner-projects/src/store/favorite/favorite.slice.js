import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  
    value: [],

}

export const favoriteSlice = createSlice({

    name: "favotites",
    initialState,
    reducers:{

        addFavorites: (state, action) => {

            state.value.push(action.payload)

        }

    }
    
})

export const {addFavorites} = favoriteSlice.actions
export default favoriteSlice.reducer    