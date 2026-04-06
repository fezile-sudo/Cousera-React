import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            const newComment = {
                ...action.payload,
                id: state.length,
                date: new Date().toISOString()
            };
            return state.concat(newComment);

        default:
            return state;
    }
};