import axios from "axios";

export const data = {
  apiURL: "",
  heading: "",
};

export const baseUrl = axios.create({
  baseURL: data.apiURL,
});

export const fetchUpload = async (file) => {
  try {
    const data = await baseUrl.post("/upload_url", file);
    if (data.data) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};
