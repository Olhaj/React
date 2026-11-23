// import { useState } from "react";
// import GlobalContext from "../context";

// function CustomProvider({ children }) {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
//   const reset = () => setCount(0);

//   return (
//     <GlobalContext value={{ count, increment, decrement, reset }}>
//       {children}
//     </GlobalContext>
//   );
// }

// export default CustomProvider;

import GlobalContext from "../context/index";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

function CustomProvider({ children }) {
  const [users, setUsers] = useState(null);

  async function fetchUsers() {
    try {
      const response = await axios.get(BASE_URL + "/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <GlobalContext.Provider value={{ users }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default CustomProvider;
