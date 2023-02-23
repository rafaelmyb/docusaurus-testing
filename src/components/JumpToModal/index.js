import {
  API_REFERENCE,
  INTEGRATION_GUIDELINE,
  TRANSACTIONS_PATHS,
} from "@site/src/constants/commonContants";
import { handleMethods } from "@site/src/utils/commonFunctions";
import React from "react";
import ReactModal from "react-modal";
import { InputFilter } from "../InputFilter";

import styles from "./styles.module.css";

export function JumpToModal({ routes }) {
  const guideLineItems = routes.filter(
    (route) => INTEGRATION_GUIDELINE.includes(route.label) && route
  );

  const apiReferenceItems = routes.filter(
    (route) => API_REFERENCE.includes(route.label) && route
  );

  const apiReferenceSubItems = routes.filter((route) => route.items);

  const subItems = apiReferenceSubItems.map((item) =>
    item.items.filter((i) =>
      API_REFERENCE.includes(i.label) ? apiReferenceItems.push(i) : null
    )
  );

  function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
  }

  array_move(apiReferenceItems, 4, 8);

  return (
    <div className={styles.container}>
      <InputFilter />
      <nav className={styles.contentContainer}>
        <ol>
          <li className={styles.listTitle}>Integration Guideline</li>
          {guideLineItems.map((item) => (
            <li key={item.label}>
              <a tabIndex="0" href={item.href}>
                <div>{item.label}</div>
              </a>
            </li>
          ))}
        </ol>
        <ol>
          <li className={styles.listTitle}>Api Reference</li>
          {apiReferenceItems.map((item) => (
            <li key={item.label}>
              <a tabIndex="0" href={item.href}>
                <div>{item.label}</div>
                {handleMethods(item, styles)}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
