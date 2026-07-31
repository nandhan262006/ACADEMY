"use client";

import Image from "next/image";
import { useId } from "react";
import { motion } from "framer-motion";

interface Cell {
  col: string;
  row: string;
  aspect: number;
}

const images = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
  "/images/gallery/gallery7.jpg",
  "/images/gallery/gallery8.jpg",
  "/images/gallery/gallery9.jpg",
  "/images/gallery/gallery10.jpg",
  "/images/gallery/gallery11.jpg",
  "/images/gallery/gallery12.jpg",
  "/images/gallery/gallery13.jpg",
  "/images/gallery/gallery14.jpg",
  "/images/gallery/gallery15.jpg",
  "/images/gallery/gallery16.jpg",
  "/images/gallery/gallery17.jpg",
  "/images/gallery/gallery18.jpg",
  "/images/gallery/gallery19.jpg",
  "/images/gallery/gallery20.jpg",
  "/images/gallery/gallery21.jpg",
  "/images/gallery/gallery22.jpg",
  "/images/gallery/gallery23.jpg",
  "/images/gallery/gallery24.jpg",
  "/images/gallery/gallery25.jpg",
  "/images/gallery/gallery26.jpg",
  "/images/gallery/gallery27.jpg",
];

const imageAspects = [
  2.01, 1.71, 1.82, 1.68, 1.70, 1.65, 1.50, 2.06, 1.78,
  1.50, 1.46, 1.54, 1.50, 1.50, 1.50, 1.50, 1.19, 1.92,
  1.88, 2.09, 1.86, 1.54, 1.98, 1.81, 1.90, 1.91, 1.82,
];

const sortedImageOrder = imageAspects
  .map((a, i) => ({ a, i }))
  .sort((x, y) => x.a - y.a)
  .map((x) => x.i);

function cellAspect(colSpan: number, rowSpan: number, cols: number, rows: number): number {
  return (colSpan / cols) / (rowSpan / rows) * (16 / 9);
}

function buildCells(
  rowPatterns: number[][],
  cols: number,
  rows: number
): { cells: Cell[]; cellToImage: string[] } {
  const cells: Cell[] = [];
  for (let r = 0; r < rowPatterns.length; r++) {
    let c = 1;
    for (const span of rowPatterns[r]) {
      cells.push({
        col: `${c} / ${c + span}`,
        row: `${r + 1} / ${r + 2}`,
        aspect: cellAspect(span, 1, cols, rows),
      });
      c += span;
    }
  }

  const cellOrder = cells
    .map((cell, i) => ({ a: cell.aspect, i }))
    .sort((x, y) => x.a - y.a)
    .map((x) => x.i);

  const cellToImage = new Array<string>(cells.length);
  for (let i = 0; i < cellOrder.length; i++) {
    cellToImage[cellOrder[i]] = images[sortedImageOrder[i % images.length]];
  }

  return { cells, cellToImage };
}

const DESKTOP_ROWS = 16;
const TABLET_ROWS = 16;

const desktopRowPatterns: number[][] = [
  [1, 1, 2, 1, 1],
  [1, 3, 2],
  [2, 1, 2, 1],
  [1, 1, 1, 1, 1, 1],
  [2, 2, 2],
  [1, 2, 3],
  [6],
  [2, 1, 1, 2],
  [3, 1, 2],
  [4, 2],
  [1, 1, 1, 1, 1, 1],
  [2, 2, 1, 1],
  [1, 4, 1],
  [6],
  [1, 1, 1, 1, 1, 1],
  [2, 1, 3],
];

const desktopRowHeights = [
  "1fr", "1.4fr", "0.8fr", "1.2fr", "1.6fr", "0.7fr", "1.3fr", "1fr",
  "0.9fr", "1.5fr", "1.1fr", "0.6fr", "1.4fr", "0.8fr", "1.2fr", "1fr",
];

const { cells, cellToImage } = buildCells(desktopRowPatterns, 6, DESKTOP_ROWS);

const tabletRowPatterns: number[][] = [
  [1, 2, 1],
  [1, 1, 2],
  [2, 2],
  [1, 1, 1, 1],
  [4],
  [2, 1, 1],
  [1, 1, 1, 1],
  [3, 1],
  [1, 2, 1],
  [4],
  [1, 1, 1, 1],
  [2, 2],
  [1, 3],
  [4],
  [2, 1, 1],
  [1, 1, 1, 1],
];

const tabletRowHeights = [
  "1fr", "1.3fr", "0.7fr", "1.5fr", "0.9fr", "1.2fr", "0.6fr", "1.4fr",
  "1fr", "0.8fr", "1.3fr", "1.1fr", "0.7fr", "1.5fr", "1fr", "0.9fr",
];

const { cells: tabletCells, cellToImage: tabletCellToImage } = buildCells(
  tabletRowPatterns, 4, TABLET_ROWS
);

const mobileRowPatterns: number[][] = [
  [1, 1, 1],
  [2, 1],
  [3],
  [1, 2],
  [1, 1, 1],
  [2, 1],
  [1, 1, 1],
  [1, 2],
  [3],
  [1, 1, 1],
  [2, 1],
  [1, 2],
];

const MOBILE_ROWS = 12;
const mobileRowHeights = [
  "1fr", "1.2fr", "0.8fr", "1.1fr", "0.9fr", "1fr",
  "1.3fr", "0.7fr", "1fr", "1.1fr", "0.8fr", "1.2fr",
];

const { cells: mobileCells, cellToImage: mobileCellToImage } = buildCells(
  mobileRowPatterns, 3, MOBILE_ROWS
);

function Grid({
  cells,
  cellToImage,
  cols,
  rowHeights,
}: {
  cells: Cell[];
  cellToImage: string[];
  cols: number;
  rowHeights: string[];
}) {
  const id = useId();

  return (
    <div
      className="grid w-full h-full gap-0"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: rowHeights.join(" "),
      }}
    >
      {cells.map((cell, i) => (
        <div
          key={`${id}-${i}`}
          className="relative overflow-hidden"
          style={{ gridColumn: cell.col, gridRow: cell.row }}
        >
          <Image
            src={cellToImage[i]}
            alt=""
            fill
            className="object-cover opacity-40"
            sizes={
              cols === 6
                ? "(max-width: 1023px) 0px, 100vw"
                : cols === 4
                  ? "(max-width: 767px) 0px, (max-width: 1023px) 100vw, 0px"
                  : cols === 3
                    ? "(min-width: 768px) 0px, 100vw"
                    : "100vw"
            }
            quality={100}
          />
        </div>
      ))}
    </div>
  );
}

export default function PhotoGridBackground() {
  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <motion.div
        className="w-full h-full"
        style={{ transform: "scale(1.05)" }}
        animate={{ y: -40 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <div className="hidden lg:block w-full h-full">
          <Grid cells={cells} cellToImage={cellToImage} cols={6} rowHeights={desktopRowHeights} />
        </div>
        <div className="hidden md:block lg:hidden w-full h-full">
          <Grid cells={tabletCells} cellToImage={tabletCellToImage} cols={4} rowHeights={tabletRowHeights} />
        </div>
        <div className="block md:hidden w-full h-full">
          <Grid cells={mobileCells} cellToImage={mobileCellToImage} cols={3} rowHeights={mobileRowHeights} />
        </div>
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
        }}
      />
    </div>
  );
}
