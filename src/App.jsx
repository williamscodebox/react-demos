import React from "react";
import { createContext, useReducer } from "react";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Button from "./components/Button";
import CopyInput from "./components/CopyInput";
import Switcher from "./components/Switcher";
import ComponentA from "./components/ComponentA";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./providers/UserContext";
import UpdateUser from "./components/UpdateUser";

// export const Data = createContext();
const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const name = "JimBobJoe";
  return (
    <div style={{ margin: 5, padding: 10 }}>
      <div style={{ display: "flex", gap: 15 }}>
        <button
          style={{ padding: 20, marginBottom: 15, marginTop: 15 }}
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        <h1>Count: {state.count}</h1>
        <button
          style={{ padding: 20, marginBottom: 15, marginTop: 15 }}
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
      </div>
      <button
        style={{ marginLeft: 100 }}
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
      {/* <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider> */}
      {/* //   <Data.Provider value={name}>
    //     <CopyInput />
    //     <Switcher />
    //     <ComponentA />

    //     {/* <Header />
    //   <MainContent />
    //   <Greet></Greet>
    //   <Button />
    //   <Footer /> 
    //   </Data.Provider>  */}
    </div>
  );
}

export default App;
