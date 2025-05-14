import React from "react";
import { createContext, useRef } from "react";
import Greet from "./components/Greet";
import useFetch from "./hooks/useFetch";
import UniqueID from "./components/UniqueID";
import CounterProject from "./components/CounterProject";
import TodosProject from "./components/TodosProject";
import MealsProject from "./components/MealsProject";

// export const Data = createContext();

function App() {
  const name = "JimBobJoe";
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div style={{ margin: 5, padding: 10 }}>
      <MealsProject />
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
