import React, { useState } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import {
  useAnnouncementBar,
  useScrollPosition,
} from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import DocSidebarItems from "@theme/DocSidebarItems";
import styles from "./styles.module.css";
import {
  API_REFERENCE,
  INTEGRATION_GUIDELINE,
} from "@site/src/constants/commonContants";
function useShowAnnouncementBar() {
  const { isActive } = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive);
  useScrollPosition(
    ({ scrollY }) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive]
  );
  return isActive && showAnnouncementBar;
}
export default function DocSidebarDesktopContent({ path, sidebar, className }) {
  const showAnnouncementBar = useShowAnnouncementBar();

  const guideLineItems = sidebar.filter(
    (route) => INTEGRATION_GUIDELINE.includes(route.label) && route
  );

  const apiReferenceItems = sidebar.filter(
    (route) => API_REFERENCE.includes(route.label) && route
  );

  return (
    <nav
      aria-label={translate({
        id: "theme.docs.sidebar.navAriaLabel",
        message: "Docs sidebar",
        description: "The ARIA label for the sidebar navigation",
      })}
      className={clsx(
        "menu thin-scrollbar",
        styles.menu,
        showAnnouncementBar && styles.menuWithAnnouncementBar,
        className
      )}
    >
      <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, "menu__list")}>
        <div>
          <div className={styles.listTitle}>Integration Guideline</div>
          <DocSidebarItems items={guideLineItems} activePath={path} level={1} />
        </div>
        <div>
          <div className={styles.listTitle}>Api Reference</div>
          <DocSidebarItems
            items={apiReferenceItems}
            activePath={path}
            level={1}
          />
        </div>
      </ul>
    </nav>
  );
}
