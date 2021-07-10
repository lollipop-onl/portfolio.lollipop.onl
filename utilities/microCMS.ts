import fetch from 'node-fetch';
import querystring from 'querystring';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export type MicroCMSImage = {
  url: string;
  width: number;
  height: number;
};

type MicroCMSResponseBase = {
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};

export type MicroCMSEndpoints = {
  '/profile': {
    bio?: string;
    avatar?: MicroCMSImage;
  };
  '/achievements': Array<{
    permalink: string;
    type: Array<'post' | 'npm' | 'website' | 'book' | 'other'>;
    period: Array<'学生' | '社会人'>;
    name: string;
    summary: string;
    thumbnail?: MicroCMSImage;
    body?: string;
    relatedLinks: Array<
      MicroCMSResponseBase & {
        id: string;
        title: string;
        url: string;
      }
    >;
  }>;
  '/skills': Array<{
    permalink: string;
    name: string;
    summary?: string;
  }>;
};

export type MicroCMSResponse<Path extends keyof MicroCMSEndpoints> =
  MicroCMSEndpoints[Path] extends any[]
    ? {
        contents: Array<
          MicroCMSEndpoints[Path][number] &
            MicroCMSResponseBase & { id: string }
        >;
      }
    : MicroCMSEndpoints[Path] & MicroCMSResponseBase;

type FetchContent = <Path extends keyof MicroCMSEndpoints>(
  path: Path,
  query?: Record<string, string>
) => Promise<MicroCMSResponse<Path>>;

export const fetchContent: FetchContent = async (
  path: string,
  query?: Record<string, string>
) => {
  return await fetch(
    `https://portfolio-lollipop-onl.microcms.io/api/v1${path}?${querystring.stringify(
      query
    )}`,
    { headers: { 'X-API-KEY': serverRuntimeConfig.MICRO_CMS_API_TOKEN } }
  ).then((res) => res.json());
};
