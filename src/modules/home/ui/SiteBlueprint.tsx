'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react';
import type { PointerEvent as ReactPointerEvent } from 'react';

import styles from './SiteBlueprint.module.css';
import { BlueprintGrid } from './site-blueprint/BlueprintGrid';
import { BrowserFrameLayer } from './site-blueprint/BrowserFrameLayer';
import { InterfaceLayer } from './site-blueprint/InterfaceLayer';
import { SystemLayer } from './site-blueprint/SystemLayer';

export function SiteBlueprint() {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, {
    stiffness: 145,
    damping: 19,
    mass: 0.7,
  });
  const springY = useSpring(pointerY, {
    stiffness: 145,
    damping: 19,
    mass: 0.7,
  });
  const frameX = useTransform(springX, (value) => value * 0.5);
  const frameY = useTransform(springY, (value) => value * 0.5);
  const systemX = useTransform(springX, (value) => value * 1.65);
  const systemY = useTransform(springY, (value) => value * 1.65);
  const frameTransform = useMotionTemplate`translate3d(${frameX}px, ${frameY}px, 0)`;
  const interfaceTransform = useMotionTemplate`translate3d(${springX}px, ${springY}px, 0)`;
  const systemTransform = useMotionTemplate`translate3d(${systemX}px, ${systemY}px, 0)`;

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion || event.pointerType !== 'mouse') {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerX.set(relativeX * 27);
    pointerY.set(relativeY * 21);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div
      className="site-blueprint relative aspect-[6/5] w-[min(112%,43rem)] overflow-visible max-md:w-full"
      data-site-blueprint=""
      aria-hidden="true"
    >
      <div
        className={styles.trackingArea}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      />
      <div className="absolute inset-0">
        <div className={`${styles.stageGrid} h-full w-full`}>
          <BlueprintGrid />
        </div>
      </div>
      <motion.div
        className="absolute inset-0"
        style={{ transform: frameTransform }}
      >
        <div className={`${styles.stageFrame} h-full w-full`}>
          <BrowserFrameLayer />
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-0"
        style={{ transform: interfaceTransform }}
      >
        <div className={`${styles.stageInterface} h-full w-full`}>
          <InterfaceLayer />
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-0"
        style={{ transform: systemTransform }}
      >
        <div className={`${styles.stageSystem} h-full w-full`}>
          <SystemLayer />
        </div>
      </motion.div>
    </div>
  );
}
