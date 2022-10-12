import { Image, StyleSheet, View } from 'react-native';
import { Audio } from 'expo-av';
import { Song } from '../../common/type/song.type';
import { 
  ButtonPause, 
  ButtonPauseStick, 
  ButtonResumeTringle, 
  Title,
  TitleContainer,
  MusicBar } from './Song.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState, useEffect } from 'react';
import { Sound } from 'expo-av/build/Audio';

const SongItem = (props: Song) => {
  const [isPaused, setTogglePaused] = useState(true);
  const { title, duration, artwork, artist } = props;
  const [sound, setSound] = useState<Sound>();
  
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../../../skriptonit_-_belmejn_(z2.fm).mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    setTogglePaused(!isPaused);
    await sound.playAsync();
  }

  useEffect(() => {
    if (sound) {
      !isPaused || sound.pauseAsync();
    }
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [isPaused]);

  return (
    <View style={styles.songMain}>
      <Image
        resizeMode="cover"
        style={styles.songImg}
        source={{uri: artwork}} />
      <TitleContainer>
        <Title>{artist} - {title}</Title>   
      </TitleContainer>
      <View style={styles.songBar}>
        <Icon name="backward" style={styles.ward} size={50}/>
        <ButtonPause onPress={playSound}>
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