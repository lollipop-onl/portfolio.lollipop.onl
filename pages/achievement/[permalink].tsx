import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { fetchContent, MicroCMSResponse } from '~/utilities/microCMS';
import { GetStaticPaths, GetStaticProps } from 'next';

type Props = {
  achievement: MicroCMSResponse<'/achievements'>['contents'][number];
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const {
    contents: [achievement],
  } = await fetchContent('/achievements', {
    filters: `permalink[equals]${params?.permalink}`,
  });

  if (!achievement) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      achievement,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { contents } = await fetchContent('/achievements', {
    limit: '100',
    fields: 'permalink',
  });

  return {
    paths: contents.map(({ permalink }) => ({ params: { permalink } })),
    fallback: false,
  };
};

const AchievementPage: React.VFC<Props> = ({ achievement }) => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/?achievement=${achievement.permalink}`);
  }, [router, achievement]);

  return (
    <>
      <Head>
        <title>{achievement.name} - simochee</title>
        <meta name="description" content={achievement.summary} />
        <meta name="og:title" content={achievement.name} />
        <meta name="og:description" content={achievement.summary} />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content={`https://portfolio.lollipop.onl/?achievement=${achievement.permalink}`}
        />
        {achievement.thumbnail && (
          <meta name="og:image" content={achievement.thumbnail?.url} />
        )}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="lollipop_onl" />
        <meta name="twitter:creator" content="lollipop_onl" />
      </Head>
    </>
  );
};

export default AchievementPage;
