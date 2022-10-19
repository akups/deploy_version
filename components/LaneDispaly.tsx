import React from "react";
import { Asset, Block } from "../pages/api/graphl/types";
import styles from "../styles/Home.module.css";
import AssetDisplay from "./AssetDisplay";

const LaneDisplay = ({
  block,
  currentLastIndex,
  setCurrentLastIndex,
}: {
  block: Block;
  currentLastIndex: number;
  setCurrentLastIndex: (index: number) => void;
}) => {
  const goToPrevious = () => {
    const isFirstFive = currentLastIndex === 4;
    const newLastIndex = isFirstFive
      ? block.assets.length - 1
      : currentLastIndex - 4;
    setCurrentLastIndex(newLastIndex);
  };
  const goToNext = () => {
    const isLastFive = currentLastIndex === block.assets.length - 1;
    const newLastIndex = isLastFive ? 4 : currentLastIndex + 4;
    setCurrentLastIndex(newLastIndex);
  };
  return (
    <div className={styles.laneWrapper}>
      <h3 className={styles.subTitle}>{block.headline}</h3>
      <div className={styles.lane}>
        <button className={styles.leftHandle} onClick={goToPrevious}>
          <div className={styles.text}>&#8249;</div>
        </button>
        {block.assets.length > 0 &&
          block.assets.map((as: Asset) => {
            return (
              <>
                <AssetDisplay asset={as} key={as.id}></AssetDisplay>
              </>
            );
          })}
        <button className={styles.rightHandle} onClick={goToNext}>
          <div className={styles.text}>&#8250;</div>
        </button>
      </div>
    </div>
  );
};

export default LaneDisplay;
