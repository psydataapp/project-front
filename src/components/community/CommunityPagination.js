import { TablePagination } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const CommunityPagination = () => {
  const { totalElements, page, size } = useSelector((state) => state.community);

  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    dispatch({ type: "FETCH_BOARD", payload: { page: newPage, size } });
  };

  const handleChangeRowsPerPage = (event) => {
    const newSize = parseInt(event.target.value);
    dispatch({
      type: "FETCH_BOARD",
      payload: { page: 0, size: newSize },
    });
  };
  return (
    <TablePagination
      component="div"
      count={totalElements}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={size}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

export default CommunityPagination;
