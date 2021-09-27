import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

const VaccinationCenterTable = ({ data }) => {
  console.log(data);
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell style={{ width: "15vh" }}>센터명</TableCell>
          <TableCell>주소</TableCell>
          <TableCell style={{ width: "25vh" }}>전화번호</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((dt) => (
          <TableRow>
            <TableCell>{dt.centerName}</TableCell>
            <TableCell>{dt.address}</TableCell>
            <TableCell>{dt.phoneNumber}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default VaccinationCenterTable;
