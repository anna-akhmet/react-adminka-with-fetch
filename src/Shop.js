import React, { useState, useEffect } from "react";

export default function Shop() {

    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [loader, setLoader] = useState(true);

    

    useEffect(() => {
        (async() => {
            try {
                const response = await fetch("https://covid-shop-mcs.herokuapp.com");
                const data = await response.json();
                if (data) {
                    setName(data.name);
                    setDesc(data.desc);
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
