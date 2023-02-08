import React, { memo } from "react";
import { DocSidebarItemsExpandedStateProvider } from "@docusaurus/theme-common/internal";
import DocSidebarItem from "@theme/DocSidebarItem";
import { PRIVATE_ROUTES } from "@site/src/constants/routes";
import { useLocation } from "@docusaurus/router";
import { useLocalStorage } from "@site/src/hooks/useLocalStorage";
// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems({ items, ...props }) {
  const [state] = useLocalStorage("isAuth");
  const router = useLocation();

  function handleHideSidebarItem(item, index) {
    return PRIVATE_ROUTES.includes(item.href) && state === false ? null : (
      <DocSidebarItem key={index} item={item} index={index} {...props} />
    );
  }

  return (
    <DocSidebarItemsExpandedStateProvider>
      {items.map((item, index) => handleHideSidebarItem(item, index))}
    </DocSidebarItemsExpandedStateProvider>
  );
}
// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
