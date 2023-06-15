export default {
  port: process.env.PORT || 3001,
  db_url:
    process.env.DB_URL ||
    "mongodb+srv://someperson:somepassword@cluster0.vljookl.mongodb.net/week-8-lecture-1?retryWrites=true&w=majority",
  api_url: process.env.API_URL || "/api",
};
