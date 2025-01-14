export interface AudioFile {
  asset: {
    assetId: string;
    extension: string;
    metadata?: { string };
    path: string;
    url: string;
    _id: string;
    _type: string;
  };
}
