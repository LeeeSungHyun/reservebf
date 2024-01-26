import axios from "axios";
import queryString from "query-string";
import { HTTP_TIMEOUT, PREFIX_URL } from "../constants/http-constants";

console.debug("http-util.js");

const axiosInstance = axios.create({
  withCredentials: true,
  paramsSerializer: (params) => queryString.stringify(params),
});

const HttpUtil = {
  async send(params: { url: any; timeout: any; headers: any }) {
    const options = {
      ...params,
      url: `${PREFIX_URL}${params.url}`,
      timeout: params.timeout || HTTP_TIMEOUT,
      headers: {
        ...params.headers,
      },
    };
    return await axiosInstance(options);
  },

  async download(params: any) {
    return await this.send({
      ...params,
      method: "get",
      responseType: "blob",
      isBase64Encoded: false,
    });
  },

  async get(params: any) {
    return await this.send({
      ...params,
      method: "get",
    });
  },

  async post(params: any) {
    return await this.send({
      ...params,
      method: "post",
    });
  },

  async put(params: any) {
    return await this.send({
      ...params,
      method: "put",
    });
  },

  async patch(params: any) {
    return await this.send({
      ...params,
      method: "patch",
    });
  },

  async delete(params: any) {
    return await this.send({
      ...params,
      method: "delete",
    });
  },
};

export default HttpUtil;
