import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const colorHistory = '#0e4429';
const colorActivy = '#39d353';

const dioMessage = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/28885835?v=4';
const urlToMyGithub = 'https://github.com/FarleyGuimaraes';

const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link....');
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Farley no quarto com fundo cinza"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Nome: Farley Guimarães"
          style={[style.defaultText, style.name]}>
          Farley Guimaraes
        </Text>
        <Text
          accessibilityLabel="Nickname: farley guimaraes"
          style={[style.defaultText, style.nickname]}>
          farleyguimaraes
        </Text>
        <Text
          accessibilityLabel="Descrição: Graduando em Sistemas de Informação | @farleyguimaraes"
          style={[style.defaultText, style.description]}>
          Graduando em Sistemas de Informação | @farleyguimaraes
        </Text>

        <View style={style.historyContainer}>
          {dioMessage.map(linha =>
            linha.map(coluna => {
              if (coluna === 1) {
                return <View style={[style.history, style.activity]} />;
              } else {
                return <View style={style.history} />;
              }
            }),
          )}
        </View>

        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    // Column
    backgroundColor: colorGithub,
    flex: 1, // Expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  historyContainer: {
    width: '65%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  history: {
    backgroundColor: colorHistory,
    width: 10,
    height: 10,
    borderRadius: 2,
    margin: 1,
  },
  activity: {
    backgroundColor: colorActivy,
  },
});
