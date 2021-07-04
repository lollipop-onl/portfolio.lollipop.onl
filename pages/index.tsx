import React from 'react';
import type {  GetStaticProps, InferGetStaticPropsType } from 'next'
import { ProfileSection } from '~/components/ProfileSection';
import { AchievementSection } from '~/components/AchievementSection';
import { DialogController } from '~/components/DialogController';
import { fetchContent, MicroCMSResponse } from '~/utilities/microCMS'

type Props = {
  profile: MicroCMSResponse<'/profile'>;
  achievements: MicroCMSResponse<'/achievements'>;
  skills: MicroCMSResponse<'/skills'>;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [profile, achievements, skills] = await Promise.all([
    fetchContent('/profile'),
    fetchContent('/achievements'),
    fetchContent('/skills'),
  ]);

  return {
    props: {
      profile,
      achievements,
      skills
    },
  };
}

const IndexPage: React.VFC<InferGetStaticPropsType<typeof getStaticProps>> = ({ profile, achievements, skills }) => {
  return (
    <div className="grid gap-16 md:gap-20">
      <p className="relative w-full text-left text-red-50">Hello World</p>
      <ProfileSection profile={profile} skills={skills} />
      <AchievementSection achievements={achievements} />
      <DialogController achievements={achievements} skills={skills} />
    </div>
  );
};

export default IndexPage;
