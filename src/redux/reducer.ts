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
interface ActionAddMessage {
  type: string;
  payload: string;
}

const initialState: Info = {
  leagues: [],
  matches: [],
  message: ''
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addLeagues: (state, action: ActionAddLeagues) => {
      state.leagues = action.payload;
    },
    addMatches: (state, action: ActionAddMatches) => {
      state.matches = action.payload;
    },
    addErrorMessage: (state, action: ActionAddMessage) => {
      state.message = action.payload;
    },
    reset: (state) => {
      state.leagues = [];
      state.matches = [];
      state.message = '';
    }
  }
});


export const { addLeagues, addMatches, reset, addErrorMessage } = historySlice.actions

export default historySlice.reducer
