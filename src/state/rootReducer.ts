import { combineReducers } from '@reduxjs/toolkit';

// No reducers yet
const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
