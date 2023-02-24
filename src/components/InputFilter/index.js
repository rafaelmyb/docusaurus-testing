import React from "react";

import styles from "./styles.module.css";

export function InputFilter({ searchTerm, setSearchTerm }) {
  return (
    <div className={styles.inputContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgb(147, 158, 174)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.searchIcon}
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="search"
        placeholder="Filter"
        className={styles.input}
        autoFocus={true}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
