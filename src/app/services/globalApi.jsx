import axios from "axios";

const boardBaseUrl="https://api.quicksell.co/v1/internal/frontend-assignment";

const GetBodyData = () => {
    return axios.get(boardBaseUrl);
};

export default GetBodyData;