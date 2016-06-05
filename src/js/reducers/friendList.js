/**
 * Another clever approach of writing reducers:
 *
 * export default function(state = initialState, action) {
 *   const actions = {
 *      [ACTION_TYPE]: () => [action.payload.data, ...state]
 *   };
 *
 *   return (_.isFunction(actions[action.type])) ? actions[action.type]() : state
 * }
 */

import * as types from '../constants/ActionTypes';
import { assign } from 'lodash';

const initialState = {
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
