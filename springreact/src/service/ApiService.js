import { API_BASE_URL } from "../lib/api/api-config";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });
  //로컬 스토리지에서 ACCESS TOKEN 가져오기
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken !== null && accessToken) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };
  if (request) {
    //GET method
    options.body = JSON.stringify(request);
  }
  return fetch(options.url, options)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 403) {
        window.location.href = "/login"; //redirect
      } else {
        new Error(response);
      }
    })
    .catch((error) => {
      console.log("http error");
      console.log(error);
    });
}
export function signin(userDto) {
  return call("/auth/signin", "POST", userDto).then((response) => {
    if (response.token) {
      //로컬 스토리지에 토큰 저장
      localStorage.setItem("ACCESS_TOKEN", response.token);
      console.log(response.token);
      //token이 존재하는 경우 Todo화면으로 리디렉트
      window.location.href = "/";
    }
  });
}

export function signout() {
  localStorage.setItem("ACCESS_TOKEN", null);
  window.location.href = "/login";
}

export function signup(userDto) {
  return call("/auth/signup", "POST", userDto);
}
