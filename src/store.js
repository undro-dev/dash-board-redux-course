import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from 'feature/filter/filter-slice';
import { positionReducer } from 'feature/positions/position-slice';

export const store = configureStore({
	reducer: {
		filters: filterReducer,
		positions: positionReducer,
	},
	devTools: true,
});
