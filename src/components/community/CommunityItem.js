import { TableRow, TableCell } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const CommunityItem = ({ bd }) => {
  const history = useHistory();
  return (
    <TableRow>
      <TableCell align="left" style={{ width: "10vh" }}>
        {bd.id}
      </TableCell>
      <TableCell
        style={{ cursor: "pointer" }}
        onClick={() => {
          history.push(`/community/${bd.id}`);
        }}
        align="left"
      >
        {bd.title}
      </TableCell>
      <TableCell align="center"></TableCell>
      <TableCell align="center" style={{ width: "10vh" }}>
        {bd.time}
      </TableCell>
    </TableRow>
  );
};

export default CommunityItem;
