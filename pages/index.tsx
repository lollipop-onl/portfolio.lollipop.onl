import React from 'react';
import { AchievementSection } from '~/components/AchievementSection';

const IndexPage: React.VFC = () => {
  return (
    <div>
      <p className="relative w-full text-left text-red-50">Hello World</p>
      <AchievementSection />
    </div>
  );
};

export default IndexPage;
