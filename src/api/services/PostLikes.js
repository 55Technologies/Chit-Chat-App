import authorizedInstance from "./Interceptors";

export const handleAddLikes = async (data) => {
  try{
    const response = await authorizedInstance.post("/like", data);
    return response;
  }
  catch(error){
    return error;
  }
};

export const handleDeleteLikes = async (id) => {
  try{
    const response = await authorizedInstance.delete(`/like/${id}`);
    return response;
  }
  catch(error){
    return error;
  }
};
