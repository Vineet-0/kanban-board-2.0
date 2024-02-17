import axios from "axios";

const boardBaseUrl="https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers";

const GetBodyData = () => {
    return axios.get(boardBaseUrl);
};

export default GetBodyData;