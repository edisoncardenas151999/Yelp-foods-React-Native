import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer rIAjd2UUVB_-VlqAn08V7Rgrkg43Ygol8Kz70x8oy55ThUPGSmocLL2FNJcswPQTFU69WnDGnyWX5LUSTsFgOjj6u_lYH6_PqfyKvGwOEGmQdvLRWXEKncc2AnoEZXYx",
  },
});
