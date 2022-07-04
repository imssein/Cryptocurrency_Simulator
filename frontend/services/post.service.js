import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:9090/v1/api";

//게시글 목록 조회
const getAllPosts = () => {
  return axios.get(API_URL);
};

//게시글 상세 조회
const getDetailPost = () => {
  return axios.get(API_URL + `/posts/${post_id}`, { headers: authHeader() });
};

//게시글 수정
const putPost = () => {
  return axios.put(API_URL + `/posts/${post_id}`, { headers: authHeader() });
};
//게시글 삭제
const deletePost = () => {
  return axios.delete(API_URL + `/posts/${post_id}`, { headers: authHeader() });
};

//게시글 작성
const createPosts = async (name, content, title) => {
  //console.log("auth", authHeader());
  // const user = axios.get(API_URL + "/members/me", { headers: authHeader() });
  const response = await axios.post(API_URL + "/posts/post", {
    name,
    content,
    title
  });

  return response;
};

const PostService = {
  getAllPosts,
  getDetailPost,
  putPost,
  deletePost,
  createPosts,
};

export default PostService;
