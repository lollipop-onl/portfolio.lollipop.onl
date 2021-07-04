import React, { useCallback, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dialog, Transition } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { MicroCMSResponse } from '~/utilities/microCMS';

type Props = {
  achievements: MicroCMSResponse<'/achievements'>;
  skills: MicroCMSResponse<'/skills'>;
};

export const DialogController: React.VFC<Props> = ({
  achievements,
  skills,
}) => {
  const router = useRouter();
  const dialog = useMemo(() => {
    const { achievement: achievementPermalink, skill: skillPermalink } =
      router.query;

    if (achievementPermalink) {
      const achievement = achievements.contents.find(
        ({ permalink }) => permalink === achievementPermalink
      );

      if (!achievement) {
        return;
      }

      return {
        type: 'achievement',
        content: achievement,
      } as const;
    }

    if (skillPermalink) {
      const skill = skills.contents.find(
        ({ permalink }) => permalink === skillPermalink
      );

      if (!skill) {
        return;
      }

      return {
        type: 'skill',
        content: skill,
      } as const;
    }
  }, [router, achievements, skills]);

  const closeDialog = useCallback(() => {
    router.push('/', undefined, { shallow: true });
  }, [router]);

  return (
    <AnimatePresence>
      {!!dialog && (
        <Dialog
          static
          as={motion.div}
          open={!!dialog}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              y: { stiffness: 1000, velocity: -100 },
            },
          }}
          exit={{
            opacity: 0,
            y: 20,
            transition: {
              y: { stiffness: 1000 },
            },
          }}
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeDialog}
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0" />
            <span className="inline-block h-screen align-middle">&#8203;</span>
            <div className="inline-block my-8 overflow-hidden text-left align-middle transition-all transform bg-white border shadow-xl rounded-2xl">
              {dialog.type === 'achievement' ? (
                <div className="flex flex-col w-full max-w-screen-lg md:px-6 md:pt-6 md:flex-row">
                  <div className="relative">
                    <div className="w-full md:w-[240px] aspect-w-4 aspect-h-3">
                      <img
                        src={
                          dialog.content.thumbnail?.url ||
                          'https://placehold.jp/400x300.png'
                        }
                        alt=""
                        className="absolute inset-0 object-contain w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <Dialog.Title className="text-lg">
                      {dialog.content.name}
                    </Dialog.Title>
                    <Dialog.Description className="mt-1 text-sm text-gray-600">
                      {dialog.content.summary}
                    </Dialog.Description>
                    {!!dialog.content.body && (
                      <Dialog.Description className="mt-4 text-sm whitespace-pre-line">
                        {dialog.content.body}
                      </Dialog.Description>
                    )}
                    <ul className="flex flex-wrap gap-2 mt-3">
                      {dialog.content.relatedLinks.map(({ id, title, url }) => (
                        <li key={id} className="first:ml-auto">
                          <Link href={url}>
                            <a target="_blank" className="text-green-600 underline hover:no-underline">
                              {title}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Dialog.Title>{dialog.content.name}</Dialog.Title>
              )}
              <div className="p-4">
                <Link href="/" shallow>
                  <a className="flex items-center justify-center h-12 max-w-xs px-4 mx-auto text-lg text-white transition-colors bg-gray-700 rounded-md hover:bg-gray-400">
                    とじる
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
