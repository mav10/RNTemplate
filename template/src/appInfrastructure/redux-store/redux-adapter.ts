import { Dispatch } from 'redux';
import { RootAction } from './root-action';

let dispatchImpl: Dispatch | null = null;

export interface IEventHandler {
  handleRootAction(action: RootAction): void;
}

export class ReduxAdapter implements IEventHandler {
  private readonly dispatch: Dispatch;

  constructor(dispatch: Dispatch) {
    this.dispatch = dispatch;
  }

  public handleRootAction(action: RootAction) {
    this.dispatch(action);
  }
}

export const setupDispatch = (dispatch: Dispatch) => {
  dispatchImpl = dispatch;
};

export function eventHandler() {
  if (dispatchImpl != null) {
    return new ReduxAdapter(dispatchImpl);
  } else {
    throw new Error('Dispatch is not set');
  }
}
