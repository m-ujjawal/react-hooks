import './App.css';
import React, { useReducer } from 'react'
import ClassCounterOne from './useEffectHooks/components/ClassCounterOne';
import ClassCounterTwo from './useEffectHooks/components/ClassCounterTwo';
import HookCounterOne from './useEffectHooks/components/HookCounterOne';
import ClassCounter from './useStateHooks/components/ClassCounter';
import HookCounter from './useStateHooks/components/HookCounter';
import HookCounterFour from './useStateHooks/components/HookCounterFour';
import HookCounterThree from './useStateHooks/components/HookCounterThree';
import HookCounterTwo from './useStateHooks/components/HookCounterTwo';
import EffectHookCounterTwo from './useEffectHooks/components/EffectHookCounterTwo';
import ClassMouse from './useEffectHooks/components/ClassMouse';
import HookMouse from './useEffectHooks/components/HookMouse';
import MouseContainer from './useEffectHooks/components/MouseContainer';
import IntervalClassCounter from './useEffectHooks/components/IntervalClassCounter';
import IntervalHookCounter from './useEffectHooks/components/IntervalHookCounter';
import DataFetching from './useEffectHooks/components/DataFetching';
import SingleDataFetching from './useEffectHooks/components/SingleDataFetching';
//import ComponentC from './useContextHooks/components/ComponentC';
import CounterOne from './useReducerHooks/components/CounterOne';
import CounterTwo from './useReducerHooks/components/CounterTwo';
import CounterThree from './useReducerHooks/components/CounterThree';
import ComponentA from './useReducerHooks/components/ComponentA';
import ComponentB from './useReducerHooks/components/ComponentB';
import ComponentC from './useReducerHooks/components/ComponentC';
import DataFetchingOne from './useReducerHooks/components/DataFetchingOne';
import DataFetchingTwo from './useReducerHooks/components/DataFetchingTwo';
import ParentComponent from './useCallbackHooks/components/ParentComponent';
import Counter from './useMemoHooks/components/Counter';
import FocusInput from './useRefHooks/components/FocusInput';
import ClassTimer from './useRefHooks/components/ClassTimer';
import HookTimer from './useRefHooks/components/HookTimer';
import DocTitleOne from './CustomHooks/components/DocTitleOne';
import DocTitleTwo from './CustomHooks/components/DocTitleTwo';
import CustomCounterOne from './CustomHooks/components/CustomCounterOne';
import CustomCounterTwo from './CustomHooks/components/CustomCounterTwo';
import UserForm from './CustomHooks/components/UserForm';


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();
const initailState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initailState
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initailState)
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}
      {/* <ClassCounterTwo/> */}
      {/* <EffectHookCounterTwo/> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching /> */}
      {/* <SingleDataFetching/> */}
      {/* <UserContext.Provider value={'Vishwash'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}
      {/* <ParentComponent /> */}
      {/* <Counter/> */}
      {/* <FocusInput /> */}
      {/* <ClassTimer /> */}
      {/* <HookTimer/> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CustomCounterOne/>
      <CustomCounterTwo/> */}
      <UserForm/>
    </div>
    // <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>

    //   <div className="App">
    //     Count - {count}
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />
    //   </div>
    // </CountContext.Provider>
  );
}

export default App;
