"use client";

import { TailSpin } from "react-loader-spinner";
import css from "./page.module.css";

export default function LoadingOneChar() {
  return (
    <div className={css.loader}>
      <TailSpin
        height="80"
        width="80"
        color="#000000"
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    </div>
  );
}
