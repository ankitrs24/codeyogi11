import axios from "axios";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse{
  data: {
     is_2fa_enabled: boolean;
  },
  token: string;
   user: User;
}

interface User {
    id: number;
    first_Name: string;
    middle_Name: string;
    last_Name: string;
    role: "staff" | "admin";
    //issues: Issue[];
  };

  //interface Issue {
    //id: number;
    //title: string;
  //}

const BASE_URL = "https://api-dev.domecompass.com";

export const login = (data: LoginRequest) => {
  const url = BASE_URL + "/login";
  console.log(data);
  //return fetch(url, {
    //method: "POST",
    //body: JSON.stringify(data),
    //headers: {
     // "Content-Type": "application/json",
   // },
 // }).then((response) => {
   // response
    //  .json()
     // .then((data) => console.log("response body in JSON Format", data));
  //  return response;
//  });


  return axios.post<LoginResponse>(url, data).then((response) =>{
  console.log (response.data.token); 
  localStorage.setItem("login_token", response.data.token)
  return response.data.user;
  }); 
};

interface GroupRequest {
    limit?: number;
    offset?:  number;
    query?: string;
    status?: "all" | "favourite" | "archieved";
}
export const fetchGroups =(data?: GroupRequest) =>{
  const url = BASE_URL + "/groups";

  //const token = localStorage.getItem("login_token", response.data.token)
axios
.get(url, {params: data}) 
.then(response => console.log(response))
.catch((e) => console.error(e));
}