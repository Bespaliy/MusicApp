import { StyleSheet, Text, View, FlatList, AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery, HttpLink } from '@apollo/client';
import SongPage from './src/components/page/SongPage';
// import { PlaybackService } from './service';
// import TrackPlayer from 'react-native-track-player';

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://192.168.0.188:3000",
}),
  cache: new InMemoryCache(),
  credentials: "include",
  headers: {'Content-Type': 'application/json'}
});



// const GET_SONGS = gql`
//   query { 
//     allSongs {
//       id, title
//     }
//   }
// `;

// const List = () => {
//   const { loading, data, error } = useQuery<SongData>(GET_SONGS);

//   const { allSongs = [] } = data || {};

//   if (loading) {
//     return <Text style={styles.container}>Loading...</Text>
//   }

//   if (error) {
//     console.log({error});
//     return <Text style={styles.container}>Error...</Text>
//   }

//   return (
//     <View style={styles.container}>
//       <Text>up App.js to start working on your app!</Text>
//       <FlatList
//         data={allSongs}
//         renderItem={({ item }: { item: Song }) => <Item title={item.title} />}
//         keyExtractor={(item) => item.id.toString()}
//       />
//       <StatusBar style="auto" />
//     </View>
//   )
// }

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SongPage />
    </ApolloProvider>
  );
}

AppRegistry.registerComponent('MusicApp', () => App);
// TrackPlayer.registerPlaybackService(() => PlaybackService);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 400
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});
