import { Button } from "@material-ui/core";
import { Create } from "@material-ui/icons";
import { useHistory } from "react-router";
const CommunityHead = () => {
  const history = useHistory();

  const btnClick = () => {
    if (localStorage.getItem("nickname")) {
      history.push("/community/write");
    } else {
      history.push("/login");
      alert("로그인 후 이용 가능합니다.");
    }
  };
  return (
    <div>
      <Button onClick={btnClick}>
        <Create />글 쓰기
      </Button>
    </div>
  );
};

export default CommunityHead;
