export interface Song {
  id: number;
  title: string;
  duration: number;
  artwork: string;
  artist: string;
  url: string;
}

export interface SongData {
  allSongs: Song[];
}