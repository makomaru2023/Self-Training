export interface Item {
  id: string;
  title: string;
  category: 'upper' | 'trunk' | 'lower';
  posture: 'supine' | 'prone' | 'side' | 'sitting' | 'standing' | 'quadruped' | 'kneeling';
  previewSrc: string;
  fileKey: string;
  free: boolean;
}

export type CategoryLabel = {
  upper: string;
  trunk: string;
  lower: string;
};

export type PostureLabel = {
  supine: string;
  prone: string;
  side: string;
  sitting: string;
  standing: string;
  quadruped: string;
  kneeling: string;
};

export interface PricePlan {
  id: string;
  name: string;
  items: number;
  price: number;
  priceId?: string;
  badge?: string;
}
