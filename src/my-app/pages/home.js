import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Footer from '../components/footer.js';
import estilos from '../estilos/home';

const API_KEY = 'a7c8f3e436b89729fc0f9d797ee42c55';

export default function Home() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchText, setSearchText] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    async function fetchTopRatedData() {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );
        const seriesResponse = await fetch(
          `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );

        if (movieResponse.ok && seriesResponse.ok) {
          const movieData = await movieResponse.json();
          const seriesData = await seriesResponse.json();

          const filteredMovies = movieData.results.filter(
            movie => movie.poster_path !== null && movie.title.length <= 20
          );

          const filteredSeries = seriesData.results.filter(
            serie => serie.poster_path !== null && serie.name.length <= 20
          );

          setTopRatedMovies(filteredMovies);
          setTopRatedSeries(filteredSeries);
        } else {
          console.error('Erro ao buscar os melhores filmes ou séries avaliadas');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    }

    fetchTopRatedData();
  }, []);

  useEffect(() => {
    if (topRatedMovies.length > 0) {
      const interval = 10000; // 10 segundos

      const rotateImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % topRatedMovies.length);
      };

      const imageRotationInterval = setInterval(rotateImage, interval);

      return () => {
        clearInterval(imageRotationInterval);
      };
    }
  }, [topRatedMovies, currentImageIndex]);

  const handleSearch = () => {
    navigation.navigate('MidiaPesquisada', { pesquisado: searchText });
  };

  const handleInfosMidias = (midia) => {
      navigation.navigate('InfosMidias', {
      categoria: midia.genres ? midia.genres.map(genre => genre.name).join(', ') : '',
      imagem: `https://image.tmdb.org/t/p/w500${midia.poster_path}`,
      nome: midia.title || midia.name,
      sinopse: midia.overview,
      nota: midia.vote_average.toFixed(1),
    });
  };
  

  return (
    <ScrollView>
      <View style={estilos.container}>
        <View style={estilos.nav}>
          <Image style={estilos.logo} source={require('../assets/logo.png')} />
              <View style={estilos.areaPesquisa}> 
                <TextInput onChangeText={text => setSearchText(text)} placeholder="Pesquise por título"/>
                <TouchableOpacity onPress={handleSearch}>
                    <Image style={estilos.lupa} source={require('../assets/lupa.png')} />
                </TouchableOpacity>
              </View>
          <Image style={estilos.iconPerfil} source={require('../assets/imagePerfil.png')} />
        </View>
        <View style={estilos.imagemGrande}>
          {topRatedMovies.length > 0 && (
            <Image
              style={estilos.imgGrande}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${
                  topRatedMovies[currentImageIndex].poster_path
                }`,
              }}
            />
          )}
        </View>
        <Text style={estilos.txtmidias}>Melhores filmes avaliados</Text>
        <View style={estilos.midiasAvaliados}>
          <ScrollView horizontal={true}>
            {topRatedMovies.map((movie) => (
              <View key={movie.id} style={estilos.containerPequeno}>
                <View>
                <TouchableOpacity onPress={() => handleInfosMidias(movie)}>
                    <Image
                    style={estilos.imgPequena}
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                        }}
                        />
                  </TouchableOpacity>
                    <Text style={estilos.txtNomeDoFilme}>{movie.title}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <Text style={estilos.txtmidias}>Melhores séries avaliadas</Text>
        <View style={estilos.midiasAvaliados}>
          <ScrollView horizontal={true}>
            {topRatedSeries.map((serie) => (
              <View key={serie.id} style={estilos.containerPequeno}>
                <View>
                <TouchableOpacity onPress={() => handleInfosMidias(serie)}>
                    <Image
                    style={estilos.imgPequena}
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${serie.poster_path}`,
                        }}
                        />
                  </TouchableOpacity>
                    <Text style={estilos.txtNomeDoFilme}>{serie.name}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
