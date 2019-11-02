import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Paper from "@material-ui/core/Paper";
import Customer from "./Customer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

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

// function App() {
//   return (
//     <div className="App">
//       {customers.map(customer => {
//         return (
//           <Customer
//             id={customer.id}
//             image={customer.image}
//             name={customer.name}
//             birthday={customer.birthday}
//             gender={customer.gender}
//             job={customer.job}
//           />
//         );
//       })}
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
