import React from "react";
import Image from "next/image";
import { Asset } from "../pages/api/graphl/types";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const AssetDisplay = ({ asset }: { asset: Asset }) => {
  return (
    <div className={styles.card} key={asset.id}>
      <Link href={`/series/${asset.id}`} passHref>
        <a>
          <Image
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              aspectRatio: "16/9",
              padding: "4rem",
              flex: `0 0 calc(100% / var(--items-per-screen))`,
              maxWidth: `calc(100% / var(--items-per-screen))`,
            }}
            width={"250%"}
            height={"365px"}
            src={asset.primaryImage.url}
            alt="Primary Image of Series"
          />
          <p>{asset.title}</p>
        </a>
      </Link>
    </div>
  );
};

export default AssetDisplay;
