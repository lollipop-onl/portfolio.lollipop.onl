import React from 'react';
import Link from 'next/link';
import { MicroCMSResponse } from '~/utilities/microCMS';

type Props = {
  achievement: MicroCMSResponse<'/achievements'>['contents'][number];
  onClick(id: string): void;
};

export const AchievementCard: React.VFC<Props> = ({ achievement, onClick }) => {
  return (
    <Link
      shallow
      href={{
        query: {
          achievement: achievement.permalink,
        },
      }}
    >
      <a className="group" onClick={() => onClick(achievement.id)}>
        <div className="aspect-w-4 aspect-h-3">
          <img
            src={achievement.thumbnail?.url || 'https://placehold.jp/40x30.png'}
            alt=""
            className="absolute inset-0 object-contain w-full h-full"
          />
        </div>
        <p className="mt-2 line-clamp-3 group-hover:underline">
          {achievement.summary}
        </p>
      </a>
    </Link>
  );
};
