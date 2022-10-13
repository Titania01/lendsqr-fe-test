import axios from "axios";

const baseUrl=" https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1"

export const fetchFromApi =({method, url, data}:{method:string; url:string; data?:any})=>{


    return axios({
        method,
        baseURL:baseUrl,
        url,
        data
      });
}