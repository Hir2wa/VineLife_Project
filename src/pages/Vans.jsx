import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    async function toFetch() {
      try {
        const res = await fetch("/api/vans");
        const data = await res.json();
        setVans(data.vans); // adjust key according to MirageJS output
      } catch (err) {
        console.error(err);
      }
    }
    toFetch();
  }, []);

  const vanElement = vans.map((van) => (
    <Link to={`/vans/${van.id}`}>
      <div key={van.id} className="van-tile">
        <img src={van.imageUrl} alt={van.name} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </Link>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElement}</div>
    </div>
  );
};

export default Vans;
