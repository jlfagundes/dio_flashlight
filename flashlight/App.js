import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';

const App = () => {
  const [toggle, setToggle] = useState(false);

  // boas práticas fazer uma função de callback
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  // observando um estado
  useEffect(() => {
    // ligar flash do celular
    Torch.switchState(toggle);
    console.log('trocou o estado do flash do celular');
  }, [toggle]); // componente a ser observado

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
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
