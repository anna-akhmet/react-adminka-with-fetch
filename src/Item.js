import React, { useState } from "react";
import styled from "styled-components";

const ItemInfo = styled.div`
  margin-left: 10px;
`;

const ItemTitle = styled.h2`
  font-size: 30px;
`;

const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  margin-left: 10px;
`;

const ItemTotal = styled.h3`
  font-size: 16px;
  margin: 0 5px;
`;





export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="item">
      <img src={info.image} alt="" />
      <ItemInfo>
        <ItemTitle>{info.name}</ItemTitle>
        <p>{info.desc}</p>
      </ItemInfo>
      <ItemQuantity className="item-quantity">
        <button
          className="item-less"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <ItemTotal>{total ? total : ""}</ItemTotal>
        <button className="item-more" onClick={handleAddClick}>
          +
        </button>
      </ItemQuantity>
    </div>
  );
}