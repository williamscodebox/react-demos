import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data];
}

export default useFetch;

// Use this bit of code in the component you wish to use the custom hook in
//  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
//   return (
//     <div style={{ margin: 5, padding: 10 }}>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//         </div>)
