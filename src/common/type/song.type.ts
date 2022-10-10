export interface Song {
  id: number;
  title: string;
  duration: number;
  img: string;
  auther: string;
}

export interface SongData {
  allSongs: Song[];
}