import axios from "../../lib/axiosInheritance";

export const sendUserCredential = async (data) => {
  return await axios
  .post("api/signup", {data})
  .then((data) =>data.data)
  .catch((error) =>{ throw error});
};
