export type FileSize = {
  size: number;
};

export type NumberOfFiles = {
  number: number;
};

export type FileSeparation = FileSize | NumberOfFiles;

export type IncompleteScrobbles = {
  minimumListening: number;
};

export type DataCleaning = {
  duplicatedScrobbles?: boolean;
  incompleteScrobbles?: IncompleteScrobbles;
};

export type Options = {
  cleanData?: DataCleaning;
  period?: { start: string; end: string };
  fileSeparation?: FileSeparation;
};
