import React, { useState, useEffect } from "react";
import ItemDetail from "../Components/ItemDetail";
import { useParams } from "react-router-dom";

const Detail = () => {
  const id = useParams();
  console.log(id, "params");

  const [idItem, setIdItem] = useState([]);

  const productItem = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${id.id}`);
    const res = await data.json();
    setIdItem(res);
  };

  useEffect(() => {
    productItem()
  }, []);


  return (
    <div className="common_width section_padding">
      <ItemDetail item={idItem} />
    </div>
  );
};

export default Detail;
