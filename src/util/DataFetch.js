const DataFetch = {
    getProducts(type){
        return fetch(`http://localhost:5555/?product=${type}`)
        .then(res=>res.json())
        .then(resJson=>resJson.rows);
    },
}


export default DataFetch;