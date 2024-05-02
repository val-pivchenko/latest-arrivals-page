import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const LatestArrivals = () => {
  const [latestArrivals, setLatestArrivals] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios("/latestarrivals.json");
      setLatestArrivals(response.data.data);
    };
    getData();
  }, []);

  console.log(latestArrivals);
  return (
    <div className="content-wrapper">
      <div className="latest-header">
        <h1 className="text-3xl">Latest Arrivals</h1>
        <button className="btn">View All</button>
      </div>
      <div className="product-cards-container">
        {latestArrivals.map((item) => {
          return (
            <ProductCard
              key={item.product_id}
              name={item.name}
              images={item.images}
              colors={item.colors}
              inventory={item.inventory}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestArrivals;
