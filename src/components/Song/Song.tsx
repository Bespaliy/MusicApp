import { Image, StyleSheet, View } from 'react-native';
import { Song } from '../../common/type/song.type';
import { 
  ButtonPause, 
  ButtonPauseStick, 
  ButtonResumeTringle, 
  Title,
  TitleContainer,
  MusicBar } from './Song.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

const SongItem = (props: Song) => {

  const [isPaused, setTogglePaused] = useState(false);
  const { title, duration, img, auther } = props;

  return (
    <View style={styles.songMain}>
      <Image
        resizeMode="cover"
        style={styles.songImg}
        source={{uri: img}} />
      <TitleContainer>
        <Title>{auther} - {title}</Title>   
      </TitleContainer>
      <View style={styles.songBar}>
        <Icon name="backward" style={styles.ward} size={50}/>
        <ButtonPause onPress={() => setTogglePaused(!isPaused)}>
          {isPaused ||
            <>
              <ButtonPauseStick />
              <ButtonPauseStick />
            </>
          }
          {!isPaused || <ButtonResumeTringle />}
        </ButtonPause>
        <Icon name="forward" style={styles.ward} size={50}/>
      </View>
      <MusicBar></MusicBar>
    </View>
  )
}

const styles = StyleSheet.create({
  songMain: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1e0039',
  },
  songImg: {
    width: 350,
    height: 350,
    borderRadius: 200,
    marginTop: 100,
  },
  songBar: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00392ff',
    marginTop: 70
  },
  ward: {
    color: 'white',
  },
});

export default SongItem;