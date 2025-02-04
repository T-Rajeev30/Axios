import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
function App() {
  const [products, setProducts] = useState([]);

  const [error, setError] = useState(false);

  //loading wal bhi ek parameter add krna hoga

  const [loading, setLoading] = useState(false);

  //
  const [search, setSearch] = useState(" ");
  useEffect(() => {
    // used to increase th eperformance of the server
    // As when we will enter anby word so it will
    // call all the product item so it will lower down the
    //performance of the server

    // 1st step is to make controller
    const controller = new AbortController();

    (async () => {
      try {
        // loading case
        setLoading(true);
        // Edge case ---- as there is no code which convert it into false after catch
        setError(false);
        // sending the signal along with the signal
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    // clean  up method > jub componenr mount hua hai tho unmount bhi hoga

    return () => {
      controller.abort();
    };
  }, [search]);

  // if (error) {
  //   return <h1>Something Went Wrong</h1>;
  // }
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <>
      <h1>Rajeev Learning Axios</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* // Loading ke saath conditional renderign */}
      {loading && <h1>Loading..</h1>}
      {error && <h1>Something Went Wrong</h1>}
      <h2>Number of Products are: {products.length}</h2>
    </>
  );
}

export default App;
