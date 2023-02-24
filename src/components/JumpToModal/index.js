import {
  API_REFERENCE,
  INTEGRATION_GUIDELINE,
} from "@site/src/constants/commonContants";
import { array_move, handleMethods } from "@site/src/utils/commonFunctions";
import React, { useMemo, useState } from "react";
import ReactModal from "react-modal";
import { InputFilter } from "../InputFilter";

import styles from "./styles.module.css";

export function JumpToModal({ routes }) {
  const [searchTerm, setSearchTerm] = useState("");

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

  array_move(apiReferenceItems, 4, 8);

  const allItems = guideLineItems.concat(apiReferenceItems);

  // console.log(allItems);

  const filteredGuidelineItems = useMemo(
    () =>
      Array.isArray(allItems)
        ? guideLineItems.filter((item) =>
            item.label.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : null,
    [allItems]
  );

  const filteredApiReferenceItems = useMemo(
    () =>
      Array.isArray(allItems)
        ? apiReferenceItems.filter((item) =>
            item.label.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : null,
    [allItems]
  );

  function handleShowDivider() {
    if (filteredApiReferenceItems.length === 0) return;

    if (filteredGuidelineItems.length === 0 && filteredApiReferenceItems !== 0)
      return;

    return <div className={styles.divider}></div>;
  }

  return (
    <div className={styles.container}>
      <InputFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <nav className={styles.contentContainer}>
        {filteredGuidelineItems.length !== 0 && (
          <ol>
            <li className={styles.listTitle}>Integration Guideline</li>
            {filteredGuidelineItems.map((item) => (
              <li key={item.label}>
                <a tabIndex="0" href={item.href}>
                  <div>{item.label}</div>
                </a>
              </li>
            ))}
          </ol>
        )}

        {handleShowDivider()}

        {filteredApiReferenceItems.length !== 0 && (
          <ol>
            <li className={styles.listTitle}>Api Reference</li>
            {filteredApiReferenceItems.map((item) => (
              <li key={item.label}>
                <a tabIndex="0" href={item.href}>
                  <div>{item.label}</div>
                  {handleMethods(item, styles)}
                </a>
              </li>
            ))}
          </ol>
        )}
      </nav>
    </div>
  );
}
