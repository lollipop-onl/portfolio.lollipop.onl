export type AchievementType = 'post' | 'npm' | 'website' | 'book' | 'other';

export type Achievement = {
  type: AchievementType;
  name: string;
  summary: string;
  images: Array<{
    alt: string;
    srcDesktop: string;
    srcMobile?: string;
  }>,
  links: Array<{
    text: string;
    url: string;
  }>,
};
