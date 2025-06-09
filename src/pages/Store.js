import '../css/site.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, useEffect } from "react";

export default function Store() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // gotten from fakestore api
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log('Error is' + error));

    }, []);

    return <>
        <h1 className="text-center text-uppercase">Store</h1>
        <h2 className="m-5 text-center text-uppercase">product gallery</h2>
        <section className=" d-flex flex-wrap justify-content-center p-1">
            {products.map(x => {
                return <div key={x.id} className="card store-card" style={{ width: "18rem" }}>
                    <img src={x.image} className="card-image-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{x.title}</h5>
                        <p className="card-text">{x.description}</p>
                    </div>
                </div>

            })}
        </section>
    </>

}