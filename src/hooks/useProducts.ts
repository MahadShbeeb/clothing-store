import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import { Product } from "../entities/Product";
import ms from 'ms'

const apiClient = new APIClient<Product>('/products')

const useProducts = () => {
    return useQuery({
        queryKey:['products'],
        queryFn : () => apiClient.getAll(),
        staleTime : ms('24h') ,
    })
}

export default useProducts;