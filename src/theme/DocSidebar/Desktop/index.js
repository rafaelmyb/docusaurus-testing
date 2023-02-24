import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useThemeConfig } from "@docusaurus/theme-common";
import Logo from "@theme/Logo";
import CollapseButton from "@theme/DocSidebar/Desktop/CollapseButton";
import Content from "@theme/DocSidebar/Desktop/Content";
import styles from "./styles.module.css";
import ReactModal from "react-modal";
import {
  useHideableNavbar,
} from "@docusaurus/theme-common/internal";
import { JumpToModal } from "@site/src/components/JumpToModal";

function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
  const {
    navbar: { hideOnScroll },
    docs: {
      sidebar: { hideable },
    },
  } = useThemeConfig();
  const { isNavbarVisible } = useHideableNavbar(hideOnScroll);

  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden
      )}
      style={{
        marginTop: isNavbarVisible ? 6 : 0
      }}
    >
      {/* {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />} */}
      <button
        className={styles.buttonJumpTo}
        onClick={() => setIsOpenModal(true)}
        style={{
          marginTop: isNavbarVisible ? 70 : 15
        }}
      >
        JUMP TO
        <span>CTRL-/</span>
      </button>
      <Content path={path} sidebar={sidebar} />
      {hideable && <CollapseButton onClick={onCollapse} />}
      <ReactModal
        isOpen={isOpenModal}
        onRequestClose={handleCloseModal}
        className={styles.modalContent}
        style={{
          overlay: {
            zIndex: 999,
            padding: 20,
            background: "rgba(0, 0, 0, 0.1)",
          },
          content: {
            maxHeight: "774px",
            height: "100%",
          },
        }}
      >
        <JumpToModal routes={sidebar} />
      </ReactModal>
    </div>
  );
}
export default React.memo(DocSidebarDesktop);
