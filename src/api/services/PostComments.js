import { Request, DeleteRequest } from '../services/Request';
const token = localStorage.getItem("token");

export const handleAddComments = async (data) => {
    const response = await Request("post", "/v1/comment", data, token);
    return response;
}

export const handleDeleteComments = async (id) => {
      const response = await DeleteRequest("delete", "/v1/comment/", id, token);
      return response;
}