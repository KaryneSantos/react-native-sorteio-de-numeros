import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Text, View } from 'react-native';

export default function App() {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [resultadoSorteio, setResultadoSorteio] = useState([]);

  const sortearNumero = () => {
    console.log("Valor mínimo:", minValue);
    console.log("Valor máximo:", maxValue);

    const min = parseInt(minValue);
    const max = parseInt(maxValue);

    let numeros = [];
    for (let i = min; i <= max; i++) {
      numeros.push(i);
    }

    numeros.sort(() => Math.random() - 0.5);

    console.log("Sorteado");

    const resultado = numeros.slice(0, min);
    console.log(resultado);

    setResultadoSorteio(resultado);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <Text style={styles.title}>Sorteio RK</Text>
        <Text style={styles.subTitle}>Hora de ver quem é o vencedor</Text>
      </View>
      <View style={styles.sorteioView}>
        <Text style={styles.obsSorteio}>Escolha os valores mínimo e máximo para fazer o sorteio</Text>
        <View style={styles.inputsContainer}>
          <View style={styles.inputRow}>
            <Text>Valor mínimo:</Text>
            <TextInput style={styles.inputs} value={minValue} onChangeText={(text) => setMinValue(text)} />
          </View>
          <View style={styles.inputRow}>
            <Text>Valor máximo:</Text>
            <TextInput style={styles.inputs} value={maxValue} onChangeText={(text) => setMaxValue(text)} />
          </View>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={sortearNumero}>
          <Text style={styles.button}>SORTEAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultadoSorteio}>
        {resultadoSorteio.map((numero, index) => (
          <Text style={styles.textoResultado} key={index}>{numero}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#1f4f66',
    height: 100,
  },
  title: {
    color: "#1E90FF",
    marginTop: 40,
    marginLeft: 10,
    fontSize: 20,
  },
  subTitle: {
    color: "#fff",
    marginLeft: 10,
  },
  inputs: {
    height: 40,
    width: 130,
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 20
  },
  buttonContainer: {
    backgroundColor: '#1f4f66',
    alignItems: 'center',
    marginTop: 10,
    width: 200,
    paddingVertical: 10,
  },
  button: {
    color: '#fff',
    textAlign: 'center',
  },
  sorteioView: {
    marginHorizontal: 30,
    marginTop: 50,
    alignItems: "center"
  },
  obsSorteio: {
    padding: 2,
    marginBottom: 25
  },
  inputsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 20,
  },
  resultadoSorteio: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: "#1E90FF",
    marginTop: 50,
    alignSelf: 'center',
    color: "#fff",
    fontSize: 25,
    textAlign: 'center',
  },
  textoResultado: {
    color: "#fff",
    fontSize: 40,
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 80,
  }
});
