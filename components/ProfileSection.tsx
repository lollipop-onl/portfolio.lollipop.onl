import React from "react";
import Image from "next/image";
import { MicroCMSResponse } from "~/utilities/microCMS";

type Props = {
  profile: MicroCMSResponse<'/profile'>,
  skills: MicroCMSResponse<'/skills'>,
};

export const ProfileSection: React.VFC<Props> = ({ profile, skills }) => {
  return (
    <section className="py-12 bg-gray-100 md:py-16">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="relative flex-shrink-0 w-[120px] h-[120px] overflow-hidden rounded-full mx-auto md:mx-0">
            <Image
              src={profile.avatar?.url || 'https://placehold.jp/320x320.png'}
              alt=""
              layout="fill"
            />
          </div>
          <div className="px-8 mt-8 md:mt-0 md:ml-8 md:px-0">
            <div className="p-6 bg-white border rounded-md">
              <p>{profile.bio}</p>
            </div>
          </div>
        </div>
        <div className="px-6 mt-6">
          <ul className="flex flex-wrap justify-center gap-2 mt-2">
            {skills.contents.map(({ id, name }) => (
              <li
                key={id}
                className="flex items-center px-4 py-1 text-sm border border-green-200 rounded-full"
              >
                #{name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}