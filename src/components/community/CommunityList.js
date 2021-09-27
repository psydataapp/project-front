import {
  Table,
  TableContainer,
  TableBody,
  Typography,
  TableHead,
  TableCell,
} from "@material-ui/core";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CommunityItem from "./CommunityItem";
import CommunityPagination from "./CommunityPagination";
const useStyles = makeStyles({
  table: {
    width: "100%",
  },
});

const CommunityList = () => {
  const data = useSelector((state) => state.community);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_BOARD" });
  }, [dispatch]);
  const classes = useStyles();
  if (data.content.length === 0) {
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
            <TableHead>
              <TableCell>번호</TableCell>
              <TableCell>제목</TableCell>
              <TableCell align="center">작성자</TableCell>
              <TableCell align="center">작성일</TableCell>
            </TableHead>
            <TableBody>
              {data.content.map((bd) => (
                <CommunityItem key={bd.id} bd={bd} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <CommunityPagination />
      </div>
    );
};

export default CommunityList;
