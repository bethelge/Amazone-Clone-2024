import React from "react";
import classes from "./category.module.css";

function CategoryCard({ data }) {
  console.log("Received data in CategoryCard:", data);

  return (
    <div className={classes.category}>
      <a href="#">
        <span>
          <h2 className={classes.categoryTitle}>{data.title}</h2>
        </span>
        <img
          src={data.imgLink}
          alt={data.title}
          className={classes.categoryImage}
        />
        <p className={classes.shopNow}>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
