import React from "react";
import Image from 'next/image'
import { Achievement } from "~/types";

type Props = {
  achievement: Achievement;
};

export const AchievementCard: React.VFC<Props> = ({ achievement }) => {
  return (
    <div role="button" className="group">
      <div className="aspect-w-4 aspect-h-3">
        <Image src="https://placehold.jp/40x30.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <p className="mt-2 line-clamp-3 group-hover:underline">{achievement.summary}</p>
    </div>
  )
};