import React, { useEffect } from "react";
import clsx from "clsx";
import { useWindowSize } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile";
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop";
import DocItemContent from "@theme/DocItem/Content";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import styles from "./styles.module.css";
import { PRIVATE_ROUTES } from "@site/src/constants/routes";
import { useLocation } from "@docusaurus/router";
import { useLocalStorage } from "@site/src/hooks/useLocalStorage";
import { Redirect } from "@docusaurus/router";
/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === "desktop" || windowSize === "ssr") ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}
export default function DocItemLayout({ children }) {
  const docTOC = useDocTOC();
  const [state] = useLocalStorage("isAuth");
  const router = useLocation();

  return (
    <>
      {!PRIVATE_ROUTES.includes(router.pathname) && (
        <div className="row">
          <div className={clsx("col", !docTOC.hidden && styles.docItemCol)}>
            <DocVersionBanner />
            <div className={styles.docItemContainer}>
              <article>
                <DocBreadcrumbs />
                <DocVersionBadge />
                {docTOC.mobile}
                <DocItemContent>{children}</DocItemContent>
                <DocItemFooter />
              </article>
              <DocItemPaginator />
            </div>
          </div>
          {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
        </div>
      )}

      {PRIVATE_ROUTES.includes(router.pathname) && state === true && (
        <div className="row">
          <div className={clsx("col", !docTOC.hidden && styles.docItemCol)}>
            <DocVersionBanner />
            <div className={styles.docItemContainer}>
              <article>
                <DocBreadcrumbs />
                <DocVersionBadge />
                {docTOC.mobile}
                <DocItemContent>{children}</DocItemContent>
                <DocItemFooter />
              </article>
              <DocItemPaginator />
            </div>
          </div>
          {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
        </div>
      )}

      {PRIVATE_ROUTES.includes(router.pathname) && state === false && (
        <Redirect to="/" />
      )}
    </>
  );
}
