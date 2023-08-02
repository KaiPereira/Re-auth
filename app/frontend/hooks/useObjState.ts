// useCustomState.ts

import { useState, SetStateAction, Dispatch } from 'react';

type StateType = {
  [key: string]: any;
};

type SetStateType = Dispatch<SetStateAction<StateType>>;

const useObjState = (initialState: StateType): [StateType, SetStateType] => {
  const [state, setState] = useState<StateType>(initialState);

  const setCustomState = (newState: Partial<StateType>) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return [state, setCustomState];
};

export default useObjState;