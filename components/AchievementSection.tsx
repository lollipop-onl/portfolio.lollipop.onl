import React, { useMemo, useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useMeasure } from 'react-use';
import { AchievementTabs } from '~/components/AchievementTabs';
import { AchievementCard } from '~/components/AchievementCard';
import { ACHIEVEMENT_PERIODS } from '~/constants';
import { MicroCMSResponse } from '~/utilities/microCMS';

const TABS = ACHIEVEMENT_PERIODS.map(({ title }) => ({ title }));

type Props = {
  achievements: MicroCMSResponse<'/achievements'>;
};

export const AchievementSection: React.VFC<Props> = ({ achievements }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [activeAchievementId, setActiveAchievementId] = useState<string | null>(
    null
  );
  const displayedAchievements = useMemo(
    () =>
      achievements.contents.filter(({ period }) => {
        return (
          (tabIndex === 0 && period.includes('社会人')) ||
          (tabIndex === 1 && period.includes('学生'))
        );
      }),
    [achievements.contents, tabIndex]
  );
  const [ref, { height }] = useMeasure<HTMLDivElement>();

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
              {ACHIEVEMENT_PERIODS.map(
                (achievementPeriod, index) =>
                  index === tabIndex && (
                    <motion.div
                      key={index}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.24 }}
                    >
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.24 }}
                        className="flex justify-center px-6 text-sm text-gray-600"
                      >
                        {achievementPeriod.summary}
                      </motion.p>
                      <motion.ul className="grid mt-10 sm:grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:mt-12">
                        {displayedAchievements.map((achievement, i) => {
                          return (
                            <motion.li
                              key={achievement.id}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: i * 0.05 + 0.4 }}
                            >
                              <AchievementCard
                                achievement={achievement}
                                onClick={(id) => setActiveAchievementId(id)}
                              />
                            </motion.li>
                          );
                        })}
                      </motion.ul>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
};
