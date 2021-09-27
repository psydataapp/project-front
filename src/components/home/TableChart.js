import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@material-ui/core";

const TableChart = ({ data }) => {
  // console.log(data);
  if (data.length === 0) return [];
  return (
    <Table>
      <TableHead>
        <TableCell>확진 환자</TableCell>
        <TableCell>사망자</TableCell>
        <TableCell>격리해제</TableCell>
        <TableCell>검사진행</TableCell>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>{data[0].decideCnt}</TableCell>
          <TableCell>{data[0].deathCnt}</TableCell>
          <TableCell>{data[0].clearCnt}</TableCell>
          <TableCell>{data[0].examCnt}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableChart;
