import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imglogo} source={require('../src/logo.png')} />
      <Text style={styles.pedirdados}>Agora, mais alguns dados</Text>
      <Text style={styles.pedirdadosv}>sobre você</Text>
      <Text style={styles.campo}>CEP</Text>
      <TextInput style={styles.inputcep} placeholder="Digite seu CEP" placeholderTextColor="#A9A9A9"/>
      <Text style={styles.campo}>Endereço</Text>
      <TextInput style={styles.inputendereco} placeholder="Insira seu endereço" placeholderTextColor="#A9A9A9"/>
      <Text style={styles.campo}>Número</Text>
      <TextInput style={styles.inputnumero} placeholder="Insira seu número" placeholderTextColor="#A9A9A9"/>
      <Text style={styles.campo}>Complemento</Text>
      <TextInput style={styles.inputcomplemento} placeholder="Insira sua complemento" placeholderTextColor="#A9A9A9"/>
      <Link href="/cadastro3" style={styles.botao}>Avançar</Link>
      <Link href="/cadastro1" style={styles.botaov}>Voltar</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imglogo: {
    marginBottom: 72,
  },
  pedirdados: {
    color: '#6B6E71',
    fontSize: 24,  
    fontWeight: 'bold',
  },
  pedirdadosv: {
    color: '#6B6E71',
    marginBottom: 48,
    fontSize: 24,  
    fontWeight: 'bold',
  },
  campo: {
    color: '#0B3B60',
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginBottom: 5,
    fontSize: 16,
  },
  inputcep: {
    width: 311,
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 24,
  },
  inputendereco: {
    width: 311,
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 24,
  },
  inputnumero: {
    width: 311,
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 24,
  },

  inputcomplemento: {
    width: 311,
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 24,
  },
  botao: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor:"#0B3B60",
    padding: 20,
    borderRadius: 10,
    fontWeight: 'bold',
    width: '80%',
    height: '7%',
  },
  botaov: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor:"#90989F",
    padding: 20,
    borderRadius: 10,
    fontWeight: 'bold',
    width: '80%',
    height: '7%',
  },
  esqueceuasenha: {
    fontSize: 16,
    color: '#0B3B60',
    textDecorationLine: 'underline',
    marginBottom:40,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  cadastre: {
    color: "#6B6E71",
    fontSize: 16,
  },
  cadastrar: {
    color: "#339CFF",
    fontSize: 16,
  }
}); 