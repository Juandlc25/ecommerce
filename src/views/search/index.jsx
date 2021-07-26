import "./style.scss";
import React, { useState, useEffect } from "react";
import { useStateValue } from "../../contextAPI/StateProvider";
import Product from "../../components/Product";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 300,
    marginBottom: "20px",
  },
});

function Search() {
  const [{ search }] = useStateValue();
  const [products, setProducts] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${search}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.results));
  }, [search]);

  return (
    <div className="search">
      {products.length === 0 ? (
        <div className={classes.root}>
          <Skeleton />
          <Skeleton animation={false} />
          <Skeleton animation="wave" />
        </div>
      ) : (
        <Product products={products} />
      )}
    </div>
  );
}

export default Search;
