export type IGenres = {
  count: number;
  mal_id: number;
  name: string;
  url: string;
};

export type ISearch = {
  title?: string;
  images: {
    webp?: {
      image_url?: string;
      large_image_url?: string;
    };
  };
};
