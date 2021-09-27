import {
  TableCell,
  TableBody,
  TableRow,
  Table,
  TableHead,
} from "@material-ui/core";

const SidoTableChart = ({ data }) => {
  return (
    <Table>
      <TableHead>
        <TableCell>지역</TableCell>
        <TableCell>신규 확진자</TableCell>
        <TableCell>총 확진자</TableCell>
      </TableHead>
      <TableBody>
        {data
          .map((dt) => (
            <TableRow>
              <TableCell>{dt.gubun}</TableCell>
              <TableCell>{dt.incDec}</TableCell>
              <TableCell>{dt.defCnt}</TableCell>
            </TableRow>
          ))
          .reverse()}
      </TableBody>
    </Table>
  );
};

export default SidoTableChart;
