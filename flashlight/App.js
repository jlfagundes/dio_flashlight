import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity
        onPress={() => {
          setToggle(oldToggle => {
            return !oldToggle;
          });
        }}>
        <Image
          style={toggle ? style.lightinigOn : style.lightinigOff}
          source={
            toggle
              ? require('./assets/icons/eco-light.png')
              : require('./assets/icons/eco-light-off.png')
          }
        />
        <Image
          style={style.dioLogo}
          source={
            toggle
              ? require('./assets/icons/logo-dio.png')
              : require('./assets/icons/logo-dio-white.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightinigOn: {
    resizeMode: 'contain', // mudando o tamanho fica no espaço resevado(container)
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightinigOff: {
    resizeMode: 'contain', // mudando o tamanho fica no espaço resevado(container)
    alignSelf: 'center',
    tintColor: 'white', // consegue trocar a cor da imagem
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: 'contain', // mudando o tamanho fica no espaço resevado(container)
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});
