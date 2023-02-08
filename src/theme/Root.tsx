import React, { useEffect, useState, useRef } from "react";
import { Redirect } from "@docusaurus/router";
import { useLocation } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../constants/routes";
import { useAuthContext } from "../contexts/authContext";
import AdminLayout from "../layout/AdminLayout";
import PublicLayout from "../layout/PublicLayout";

export default function AuthLayout({ children }) {
  // const [isAuthUrlParam, setIsAuthUrlParam] = useState("");
  // const router = useLocation();

  // useEffect(() => {
  //   const searchParams = new URLSearchParams(document.location.search);

  //   const isAuth = searchParams.get("authorized");

  //   setIsAuthUrlParam(isAuth);

  //   console.log("isAuthParam", isAuth);
  // }, [router.pathname]);

  // console.log(isAuthUrlParam)

  return (
    <>
      {/* {PRIVATE_ROUTES.includes(router.pathname) &&
      isAuthUrlParam === "false" ? (
        <div>
          blocked
          <button onClick={() => setIsAuthUrlParam("true")}>Auth</button>
        </div>
      ) : ( */}
      <div>{children}</div>
      {/* )} */}
    </>
  );
}
