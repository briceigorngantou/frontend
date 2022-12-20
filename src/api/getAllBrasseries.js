import axios from "axios";

const getAllProducts = async () => {
  try {
    let InfoFound = "";
    await axios.get("http://localhost:4000/Products").then((res) => {
      if (res.status === 200) {
        InfoFound = res?.data;
      } else {
        InfoFound = undefined;
      }
    });

    return InfoFound;
  } catch (error) {
    console.log("Error getting info brasserie", error);
  }
};

export default getAllProducts;
