import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store/src/action_creator';

export const increment = createAction(
  '[Counter Component] Increment',
  props<{ dateAction: Date }>()
);
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
