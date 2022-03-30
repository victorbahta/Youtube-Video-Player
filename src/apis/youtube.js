import axios from "axios";
const KEY = "AIzaSyDHfapjoR4dNMGzixUWzYJEFFK8ySogxKE";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
    type: "video",
  },
});
