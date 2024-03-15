import axios from "axios";

export const getCategories = async () => {
    await axios
      .get("/api/category")
      .then((res) => {
        console.log(res.data.categories);
        return res.data.categories
      })
      .catch((error) => {
        console.log(error);
      });
};