import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import styled from "styled-components";

const UIListItem = styled.li`
    margin-bottom: 80px;
`;

const UIList = styled.ul`
    list-style: none;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
`;

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
            <UIListItem key={items[index].id}>
                <Item info={items[index]}/>
            </UIListItem>
        )
    });

    return (
    <div className="shop">
        {loader && <p className="loader">Идет загрузка...</p>}
        <UIList>
            {itemsToRender}
        </UIList>
    </div>
    )
}
