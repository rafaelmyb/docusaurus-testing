import React from "react";

import { TRANSACTIONS_PATHS } from "../constants/commonContants";

export function handleMethods(item, styles) {
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
