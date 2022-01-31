import axios from "axios";

const baseURL = "https://tranquil-lake-29913.herokuapp.com/api/users";
const loginURL = "https://tranquil-lake-29913.herokuapp.com/api/login";
const logoutURL = "https://tranquil-lake-29913.herokuapp.com/api/logout";
const signUpURL = "https://tranquil-lake-29913.herokuapp.com/api/signup";
const deleteURL = "https://tranquil-lake-29913.herokuapp.com/api/delete";
const updateUserURL = "https://tranquil-lake-29913.herokuapp.com/api/update";
const findUserByIdURL = "https://tranquil-lake-29913.herokuapp.com/api/users";
const postURL = "https://tranquil-lake-29913.herokuapp.com/api/users/post";

export const existingUsersHandler = (token) =>
  axios({
    url: `${baseURL}`,
    headers: { Authorization: `${token}` },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

export const logOutHandler = () =>
  axios({
    url: `${logoutURL}`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

export const signUpHandler = (props) =>
  axios({
    method: "post",
    url: `${signUpURL}`,
    data: props,
  })
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      return error;
    });

export const loginHandler = (props) =>
  axios({
    method: "post",
    url: `${loginURL}`,
    data: props,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

export const updateUserHandler = (props, urlExtension) =>
  axios({
    method: "put",
    url: `${updateUserURL}/${urlExtension}`,
    data: props,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

export const createPost = (props, urlExtension) =>
  axios({
    method: "post",
    url: `${postURL}/${urlExtension}`,
    data: props,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

export const deleteUserHandler = (urlExtension) =>
  axios({
    method: "delete",
    url: `${deleteURL}/${urlExtension}`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

export const findUserById = (urlExtension) =>
  axios({
    url: `${findUserByIdURL}/${urlExtension}`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
