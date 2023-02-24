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

export function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
}