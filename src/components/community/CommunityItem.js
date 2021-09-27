import { TableRow, TableCell } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const CommunityItem = ({ bd }) => {
  const history = useHistory();
  return (
    <TableRow
      style={{ cursor: "pointer" }}
      onClick={() => {
        history.push(`/community/${bd.id}`);
      }}
    >
      <TableCell align="left" style={{ width: "10vh" }}>
        {bd.id}
      </TableCell>
      <TableCell align="left">{bd.title}</TableCell>
      <TableCell align="center">{bd.writer}</TableCell>
      <TableCell align="center" style={{ width: "15vh" }}>
        {bd.time}
      </TableCell>
    </TableRow>
  );
};

export default CommunityItem;
