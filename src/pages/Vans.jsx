import React, { useEffect, useState } from "react";

const data = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function toFetch() {
      const res = await fetch("/api/vans")
        .json()
        .catch((err) => {
          throw new Error(" Error Fetching Data ");
        });

      return data;
    }
    toFetch().then((data) => setData());
  }, []);
};

const Vans = () => {
  return <div>Vans page 🗃 </div>;
};

export default Vans;
