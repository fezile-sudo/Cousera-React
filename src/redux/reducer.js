import { createSlice } from '@reduxjs/toolkit';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // add reducers later (e.g. addComment)
  }
});

export default appSlice.reducer;