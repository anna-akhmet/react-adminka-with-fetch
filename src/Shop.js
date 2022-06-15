import React, { useState, useEffect } from "react";
import Item from "./Item.js";

export default function Shop() {

    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        (async() => {
            try {
                const response = await fetch("https://covid-shop-mcs.herokuapp.com");
                const data = await response.json();
                if (data && !data.error) {
                    setItems(data);
                }
            } catch(error) {
                console.error(error);
            } finally {
                setLoader(false);
            }
        })()
    }, [])

    const itemsToRender = items.map((item, index) => {
        return (
            <li className="ui-list-item" key={items[index].id}>
                <Item info={items[index]}/>
            </li>
        )
    });

    return (
    <div className="shop">
        {loader && <p className="loader">Идет загрузка...</p>}
        <ul className="ui-list">
            {itemsToRender}
        </ul>
    </div>
    )
}
