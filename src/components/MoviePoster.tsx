import { useNavigation } from '@react-navigation/native';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterfaces';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 420, width =300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation()

  /* console.log(movie.poster_path); */
  return (
    <TouchableOpacity
      onPress={ () => navigation.navigate("DatailScreen", movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal:2,
        paddingBottom:20,
        paddingHorizontal:7
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.50,
    shadowRadius: 3.84,

    elevation: 10,
  },
});
