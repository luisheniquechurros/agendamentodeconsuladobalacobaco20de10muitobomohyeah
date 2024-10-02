import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.bemvindus}>
        <Image style={styles.imglogo} source={require('../../src/pogo1.png')} />
        <Text style={styles.vinda}>Boas-vindas!</Text>
      </View>
      <View style={styles.retangulolegal}>
        <TextInput style={styles.inputespecialidade} placeholder="Digite a especialidade" placeholderTextColor="#A9A9A9"/>
        <TextInput style={styles.inputlocalizacao} placeholder="Digite sua localização" placeholderTextColor="#A9A9A9"/>
        <Link href="/app_logado/" style={styles.botao}>Buscar</Link>
      </View>
      <Text style={styles.depoimentos}>Depoimentos</Text>
      <Text style={styles.depoimento}>Gente, se vocês receberem um link do Dr. Paulo sobre desenvolvedores de sistema solteiros, não cliquem, ele instala um vírus que faz você falar Latim!</Text>
      <Text style={styles.autor}>Júlio, 40 anos, São Paulo/SP.</Text>
      <View style={styles.linha}></View>
      <Text style={styles.depoimento}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</Text>
      <Text style={styles.autor}>Júlio, 40 anos, São Paulo/SP.</Text>
      <View style={styles.linha}></View>
      <Text style={styles.depoimento}>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.</Text>
      <Text style={styles.autor}>Júlio, 40 anos, São Paulo/SP.</Text>
      <View style={styles.linha}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imglogo: {
    marginTop: 0,
    marginLeft: 0,
  },
  bemvindus: {
    alignSelf: 'flex-start',
    marginLeft: 0,
  },
  vinda: {
    color: "#339CFF",
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 24,
    marginTop: 5,
    marginBottom: 32,
  },
  inputespecialidade: {
    width: 280,
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 16,
    marginTop: 26,
  },
  inputlocalizacao: {
    width: 280,
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  retangulolegal: {
    width: 311,
    height: 208,
    backgroundColor: "#FFFFFF",
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  botao: {
    marginBottom: 16,
    fontSize: 17,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: "#0B3B60",
    padding: 20,
    borderRadius: 10,
    fontWeight: 'bold',
    width: '80%',
    height: 59,
  },
  depoimentos: {
    color: '#0B3B60',
    marginBottom: 48,
    fontSize: 24,  
    fontWeight: 'bold',
    marginTop: 32,
    textAlign: 'center',
  },
  linha: {
    height: 1,
    backgroundColor: "#CCC",
    width: "100%",
    marginVertical: 10,
  },
  depoimento: {
    color: "#333",
    fontSize: 16,
    textAlign: "justify",
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  autor: {
    color: "#6B6E71",
    fontSize: 20,
    fontWeight: 'bold',
  },
});
