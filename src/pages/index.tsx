import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import { AuthProvider, useAuthContext } from "../contexts/authContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isAuth, setIsAuth] = useLocalStorage("isAuth");

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={`../../docs/tutorial-basics/create-a-blog-post?authorized=${isAuth}`}
          >
            blog-test page
          </Link>

          <Link
            className="button button--secondary button--lg"
            to={`../../docs/tutorial-basics/create-a-document?authorized=true`}
          >
            create a document page
          </Link>

          <button
            className="button button--secondary button--lg"
            onClick={() => setIsAuth(!isAuth)}
          >
            isAuth {isAuth ? "true" : "false"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <AuthProvider>
      <Layout
        title={`Hello ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </AuthProvider>
  );
}
