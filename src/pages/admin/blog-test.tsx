import React from "react";

export default function BlogTest() {
  const searchParams = new URLSearchParams(document.location.search);

  const isAuth = searchParams.get("authorized");

  // console.log(isAuth)

  return <>{isAuth === "true" ? <div>Hello BlogTest</div> : <div>Not Auth</div>}</>;
}
