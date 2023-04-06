import { useRouter } from "next/router";
import React from "react";

function UserName() {
  const router = useRouter();
  const { username } = router.query;
  return <div>{`UserName ${username} !`}</div>;
}

export default UserName;
