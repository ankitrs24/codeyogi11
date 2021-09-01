import axios from "axios";
import { string } from "yup";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  if (!token) {
    return config;
  }
  return { ...config, headers: { ...config.headers, Authorization: token } };
});

axios.interceptors.response.use(undefined, (error) => {
  if (error.response.data.code === 9101) {
    localStorage.removeItem(LS_LOGIN_TOKEN);
    window.location.href = "/login";
  }
  return Promise.reject(error);
});

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    is_2fa_enabled: boolean;
  };
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
}

//interface Issue {
//id: number;
//title: string;
//}

const BASE_URL = "https://api-dev.domecompass.com";

export const LS_LOGIN_TOKEN = "login_token";

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

  return axios.post<LoginResponse>(url, data).then((response) => {
    console.log(response.data.token);
    localStorage.setItem(LS_LOGIN_TOKEN, response.data.token);
    return response.data.user;
  });
};

export const logout = () => {
  localStorage.removeItem(LS_LOGIN_TOKEN);
};

interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: "all-groups" | "favourite" | "archieved";
}

interface GroupResponse {
  data: Group;
  creator: Creators;
}

export interface Group {
  id: number;
  name: string;
  description: string;
  profile_pic_url: string;
}

interface Creators {
  id: number;
  first_name: string;
  last_name: string;
}
export const fetchGroups = (data: GroupRequest) => {
  const url = BASE_URL + "/groups";

  const token = localStorage.getItem(LS_LOGIN_TOKEN);

  return axios
    .get(url, { params: data, headers: { Authorization: token } })
    .then((response) => {
      console.log(response.data.data);
      return response.data.data;
    })
    .catch((e) => console.error(e));
};
