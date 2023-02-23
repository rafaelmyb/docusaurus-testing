import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { isActiveSidebarItem } from "@docusaurus/theme-common/internal";
import Link from "@docusaurus/Link";
import isInternalUrl from "@docusaurus/isInternalUrl";
import IconExternalLink from "@theme/Icon/ExternalLink";
import styles from "./styles.module.css";
import {
  SUB_ITEMS_SIDEBAR_PATHS,
  TRANSACTIONS_PATHS,
} from "@site/src/constants/commonContants";

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const { href, label, className, autoAddBaseUrl } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);

  function changePadding(item) {
    return TRANSACTIONS_PATHS.map((i) =>
      item.href === i.path ? "#fff" : "#000"
    );
  }

  console.log(index);

  function handleMethods(item) {
    return TRANSACTIONS_PATHS.map((i) =>
      item.href === i.path ? (
        <div
          key={i.path}
          style={{
            background: i.background,
            textShadow: i.textShadow,
          }}
          className={styles.requestItem}
        >
          {i.method}
        </div>
      ) : null
    );
  }

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        "menu__list-item",
        className
      )}
      key={label}
      style={{
        marginTop: "0.125rem",
      }}
    >
      <Link
        style={
          isActive
            ? {
                color: "#222831",
                background: "#EBECEC",
                marginLeft: SUB_ITEMS_SIDEBAR_PATHS.includes(href)
                  ? "-10px"
                  : "0",
                paddingLeft: SUB_ITEMS_SIDEBAR_PATHS.includes(href)
                  ? "5px"
                  : "17px",
                paddingTop: "3px",
                paddingRight: "5px",
                paddingBottom: "3px",
              }
            : {
                color: "#4f5a66",
                marginLeft: SUB_ITEMS_SIDEBAR_PATHS.includes(href)
                  ? "-10px"
                  : "0",
                paddingLeft: SUB_ITEMS_SIDEBAR_PATHS.includes(href)
                  ? "5px"
                  : "17px",
                paddingTop: "3px",
                paddingRight: "5px",
                paddingBottom: "3px",
              }
        }
        className={clsx(
          "menu__link",
          styles.item,
          !isInternalLink && styles.menuExternalLink,
          {
            "menu__link--active": isActive,
          }
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? "page" : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}
      >
        {label}
        {handleMethods(item, index)}
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
