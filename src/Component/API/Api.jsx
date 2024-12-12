/* eslint-disable no-unused-vars */
import axios from "axios";

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

export const fetchData = () =>{
    return api.get('/posts')
}

export const getData = async() =>{
     const res = await api.get('/posts')
     return res.status === 200 && Array.isArray(res.data) ? res.data : [];
}
// to fetch respective id post
export const getPost = async(id) =>{
    const res = await api.get(`/posts/${id}`)
    return res.status === 200 ? res.data : [];
}