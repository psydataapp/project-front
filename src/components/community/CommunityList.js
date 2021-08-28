import {
  Table,
  TableContainer,
  TableBody,
  Typography,
} from "@material-ui/core";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CommunityItem from "./CommunityItem";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CommunityList = () => {
  const board = useSelector((state) => state.community);
  console.log(board);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_BOARD" });
  }, [dispatch]);
  const classes = useStyles();
  if (board.length === 0) {
    return (
      <div>
        <Typography>등록된 글이 없습니다.</Typography>
      </div>
    );
  } else
    return (
      <div>
        <TableContainer>
          <Table className={classes.table}>
            <TableBody>
              {board.map((bd) => (
                <CommunityItem key={bd.id} bd={bd} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
};

export default CommunityList;
