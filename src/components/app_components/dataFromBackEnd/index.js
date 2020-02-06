import React from "react";


const GetRequest = async ()=>{
    const [laptopResponse, phoneResponse, tvResponse, photographyResponse, howtoResponse] = await Promise.all([
        fetch('http://localhost:3000/laptops'),
        fetch('http://localhost:3000/phones'),
        fetch('http://localhost:3000/tvs'),
        fetch('http://localhost:3000/photography'),
        fetch('http://localhost:3000/howto'),
    ]);

    const [laptopData, phoneData, tvData, photographyData, howData] = await Promise.all([
        laptopResponse.json(), 
        phoneResponse.json(), 
        tvResponse.json(), 
        photographyResponse.json(), 
        howtoResponse.json(),
    ]);

    return [laptopData,phoneData,tvData,photographyData,howData];
}
   

export default GetRequest;