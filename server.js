const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "홍길동",
      birthday: "880101",
      gender: "남자",
      job: "학생"
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "강감찬",
      birthday: "950201",
      gender: "여자",
      job: "자영업"
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "유관순",
      birthday: "900301",
      gender: "여자",
      job: "회사원"
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
