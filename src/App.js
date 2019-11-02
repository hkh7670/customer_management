import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Customer from "./Customer";

const customers = [
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
];

function App() {
  return (
    <div className="App">
      {customers.map(customer => {
        return (
          <Customer
            id={customer.id}
            image={customer.image}
            name={customer.name}
            birthday={customer.birthday}
            gender={customer.gender}
            job={customer.job}
          />
        );
      })}
    </div>
  );
}

export default App;
