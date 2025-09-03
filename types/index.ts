export interface Item {
  id: string;
  title: string;
  category: 'upper' | 'trunk' | 'lower'; // 部位
  posture:
    | 'supine'     // 仰臥位
    | 'prone'      // 腹臥位
    | 'side'       // 側臥位
    | 'sitting'    // 座位
    | 'standing'   // 立位
    | 'quadruped'  // 四つ這い
    | 'kneeling';  // 膝立ち
  goal: string;
  caution: string;
  contraindication: string;
  previewSrc: string;
  fileKey: string;
  free: boolean;
}

export type CategoryLabel = {
  [K in Item['category']]: string;
};

export type PostureLabel = {
  [K in Item['posture']]: string;
};
