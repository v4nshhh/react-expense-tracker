import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = React.useState(props.title);

  // const clickHandler = () => {
  //   if (title === props.title)
  //     setTitle();
  //   else
  //     setTitle(props.title);
  //   console.log(title);
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          {/* <h2>{title}</h2> */}
          <div className="expense-item__price">${props.amount}</div>
          {/* <button onClick={clickHandler}>Change Title</button> */}
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
