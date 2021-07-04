import { Achievement } from '~/types';

type AchievementPeriod = {
  title: string;
  summary: string;
  achievements: Achievement[];
};

export const ACHIEVEMENT_PERIODS: AchievementPeriod[] = [
  {
    title: '社会人時代',
    summary:
      '社会人になってから制作した作品です。学生時代から成果物の品質は上がっています。',
    achievements: [
      {
        id: '1',
        type: 'website',
        name: 'Scrapbox TimeMachine',
        summary: 'Scrapboxのコミットログから過去の状態を復元するツール',
        images: [],
        links: [{ text: 'WebSite', url: '/' }],
      },
      {
        id: '1',
        type: 'website',
        name: 'DirectoryTree Editor',
        summary: 'ディレクトリツリーを簡単に作成できるツール',
        images: [],
        links: [{ text: 'Link', url: '/' }],
      },
      {
        id: '1',
        type: 'post',
        name: 'はじめての vue-property-decorator',
        summary:
          'vue-property-decorator の使い方をスタンダードな Vue での記法と比較して解説',
        images: [],
        links: [{ text: 'Link', url: '/' }],
      },
      {
        id: '1',
        type: 'post',
        name: 'TypeScript で Vue.set を型安全にしたい',
        summary: 'Vue.set を型安全にするパッケージの実装を解説',
        images: [],
        links: [{ text: 'Link', url: '/' }],
      },
      {
        id: '1',
        type: 'npm',
        name: '@lollipop-onl/axios-logger',
        summary: 'ブラウザ・ターミナルの双方で動作するカラフルな Axios ロガー',
        images: [],
        links: [{ text: 'Link', url: '/' }],
      },
      {
        id: '1',
        type: 'npm',
        name: '@lollipop-onl/vue-typed-reactive',
        summary: 'Vue.set/delete を型安全にするメソッドを提供するパッケージ',
        images: [],
        links: [{ text: 'Link', url: '/' }],
      },
      {
        id: '1',
        type: 'npm',
        name: '@lollipop-onl/vuex-typesafe-helper',
        summary: 'Vuex のスタンダードな記法に沿いつつ型安全にできるパッケージ',
        images: [],
        links: [{ text: 'Link', url: '/' }],
      },
    ],
  },
  {
    title: '学生時代',
    summary: '宇部高専在学中に制作した作品です',
    achievements: [
      {
        id: '1',
        type: 'other',
        name: '育てるごみ分別案内LINEボット',
        summary:
          '第3回宇部市オープンデータアプリコンテスト最優秀賞・特別賞受賞作品',
        images: [],
        links: [{ text: 'WebSite', url: '/' }],
      },
      {
        id: '1',
        type: 'other',
        name: 'Ube Emergency Tools (UET)',
        summary: '第2回宇部市オープンデータアプリコンテスト特別賞受賞作品',
        images: [],
        links: [{ text: 'Link', url: '/' }],
      },
      {
        id: '1',
        type: 'website',
        name: '第53回 宇部高専高専祭ウェブサイト',
        summary: 'イベント（文化祭）の広報班として制作したウェブサイト',
        images: [],
        links: [{ text: 'Link', url: '/' }],
      },
      {
        id: '1',
        type: 'website',
        name: '宇部高専鉄道研究愛好会',
        summary: '所属していた愛好会ウェブサイト',
        images: [],
        links: [{ text: 'Link', url: '/' }],
      },
      {
        id: '1',
        type: 'website',
        name: '宇部高専白鳥寮非公式献立表',
        summary: '学生寮の献立を確認できるウェブサイトとTwitterボット',
        images: [],
        links: [{ text: 'Link', url: '/' }],
      },
    ],
  },
];
