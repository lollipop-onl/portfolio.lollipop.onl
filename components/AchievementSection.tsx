import React, { useMemo, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useMeasure } from "react-use";
import { AchievementTabs } from "~/components/AchievementTabs";
import { AchievementCard } from "~/components/AchievementCard";
import { ACHIEVEMENT_PERIODS } from '~/constants';

const TABS = ACHIEVEMENT_PERIODS.map(({ title }) => ({ title　}));

export const AchievementSection: React.VFC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [ref, { height }] = useMeasure<HTMLDivElement>()

  return (
    <div className="max-w-screen-lg px-4 mx-auto">
      <div className="flex justify-center">
        <AchievementTabs
          tabs={TABS}
          activeTabIndex={tabIndex}
          onChange={setTabIndex}
        />
      </div>
      <AnimateSharedLayout>
        <motion.div
          className="mt-4"
          animate={{
            height,
          }}
        >
          <div ref={ref} className="overflow-hidden">
            <AnimatePresence initial={false} exitBeforeEnter>
              {ACHIEVEMENT_PERIODS.map((achievementPeriod, index) => index === tabIndex && (
                <motion.div
                  key={index}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.24, duration: 0.24 }}
                >
                  <p className="flex justify-center px-6 text-sm text-gray-600">{achievementPeriod.summary}</p>
                  <motion.ul
                    className="grid mt-10 sm:grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:mt-12"
                  >
                    {achievementPeriod.achievements.map((achievement, i) => {
                      return (
                        <motion.li
                          key={achievement.name}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.05 + 0.24 }}
                        >
                          <AchievementCard achievement={achievement} />
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimateSharedLayout >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt nobis voluptate! Distinctio qui provident, aliquam iusto voluptate laboriosam impedit tenetur dolores laudantium repellendus ex placeat harum sed natus doloremque.</p>
    </div>
  );
};
