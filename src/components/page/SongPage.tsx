import SongItem from "../Song/Song"

const SongPage = () => {
  return (
    <SongItem {...{id: 2, url: '../../../assets/skriptonit_-_belmejn_(z2.fm).mp3', artist: 'Danzel Curry', title: 'Myself', duration: 281, artwork: 'https://www.billboard.com/wp-content/uploads/media/denzel-curry-clout-cobain-2018-billboard-1548.jpg?w=942&h=623&crop=1'}} />
  )
}

export default SongPage;