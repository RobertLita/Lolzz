import { createSlice } from '@reduxjs/toolkit'
import { League, Match, Info } from '../api/api.interfaces';

interface ActionAddLeagues {
  type: string;
  payload: League[];
}
interface ActionAddMatches {
  type: string;
  payload: Match[];
}

const initialState: Info = {
  leagues: [],
  matches: []
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addLeagues: (state, action: ActionAddLeagues) => {
      state.leagues = action.payload;
    },
    addMatches: (state, action: ActionAddMatches) => {
      state.matches = state.matches = [...state.matches, ...action.payload];
    },
    reset: (state) => {
      state.leagues = []
      state.matches = []
    }
  }
});


export const { addLeagues, addMatches, reset } = historySlice.actions

export default historySlice.reducer
