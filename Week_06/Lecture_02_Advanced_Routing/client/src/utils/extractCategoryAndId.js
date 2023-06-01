export default (url) => "/" + url.split("/").slice(-3, -1).join("/");
