import React from "react";
import clsx from "clsx";
import { motion, AnimateSharedLayout } from "framer-motion";

type Props = {
  activeTabIndex: number;
  tabs: Array<{ title: string }>;
  onChange(index: number): void;
};

export const AchievementTabs: React.VFC<Props> = ({ tabs, activeTabIndex, onChange }) => {
  const handleTabClick = (index: number) => {
    if (index !== activeTabIndex) {
      onChange(index);
    }
  }
  
  return (
    <AnimateSharedLayout>
      <ul
        className="flex whitespace-nowrap"
      >
        {tabs.map(({ title }, index) => {
          const isActive = index === activeTabIndex
          
          return (
            <li key={index} className="relative">
              {isActive && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 bg-gray-100 rounded-full"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              <button
                type="button"
                className={clsx(
                  'relative z-10 px-4 py-2 font-bold text-gray-400 transition-colors hover:text-gray-800 rounded-full',
                  'focus:outline-none focus-visible:ring-offset-white focus-visible:ring-gray-300 focus-visible:ring-2',
                  { 'text-gray-800': isActive }
                )}
                onClick={() => handleTabClick(index)}
                onTouchStart={() => handleTabClick(index)}
              >
                {title}
              </button>
            </li>
          )
        })}
      </ul>
    </AnimateSharedLayout>
  );
};
