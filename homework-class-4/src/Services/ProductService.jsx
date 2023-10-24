import axios from "axios";

const PRODUCT_URL = "https://northwind.vercel.app/api/products";

 class ProductService {
 
    getProducts(){
        return axios.get(PRODUCT_URL);
    }

    createProducts(products){
        return axios.post(PRODUCT_URL , products)
    }

    deleteProducts(id){
        return axios.delete(PRODUCT_URL + "/" + id)
    }


}


export default new ProductService();