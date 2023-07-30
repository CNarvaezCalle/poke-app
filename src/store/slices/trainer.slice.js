import { createSlice } from '@reduxjs/toolkit';

export const trainerSlice = createSlice({
    name: 'ash',
    initialState: 'hola',
    reducers: {
      setTrainerG: (state, action) => action.payload
    }
})

export const { setTrainerG } = trainerSlice.actions;

export default trainerSlice.reducer;
