import { configureStore } from '@reduxjs/toolkit';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const store = configureStore({
    reducer: {
        dishes: Dishes,
        comments: Comments,
        promotions: Promotions,
        leaders: Leaders
    }
});