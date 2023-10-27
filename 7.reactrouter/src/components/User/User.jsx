import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return <div className="flex justify-center">User : {userId}</div>;
}

export default User;
