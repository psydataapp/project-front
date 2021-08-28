import { Button } from "@material-ui/core";
import { Create } from "@material-ui/icons";
import { Link } from "react-router-dom";
const CommunityHead = () => {
  return (
    <div>
      <Link to="/community/write" style={{ textDecoration: "none" }}>
        <Button>
          <Create />글 쓰기
        </Button>
      </Link>
    </div>
  );
};

export default CommunityHead;
