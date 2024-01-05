import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import ms from 'ms'
import { Product } from "../entities/Product";

const apiClient = new APIClient<Product>('/products')

const useProduct = (id : number | string) => {
    return useQuery({
        queryKey:['product',id],
        queryFn : () => apiClient.get(id),
        staleTime : ms('24h') ,
    })
}

export default useProduct;