import React, { useState, useEffect } from "react";

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

  return <div className="shop"></div>;
}
