const DataFetch = {
    getProducts(type){
        return fetch(
            `http://localhost:5000/products?product=${type}`,
            {
                headers : 
                {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }        
            }
        )
        .then(res=>res.json())
        .then(resJson=>resJson.rows);
    },
}


export default DataFetch;