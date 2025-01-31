import colors from "@/constants/colors";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>
          Dev<Text style={{ color: colors.green }}>App</Text>
        </Text>
        <Text style={styles.slogan}>O novo futuro da programação!</Text>
      </View>

      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput placeholder="Digite seu email" style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Senha</Text>
          <TextInput placeholder="Digite sua senha" style={styles.input} secureTextEntry/>
        </View>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
        </Pressable>

        <Link href='/(auth)/signup/page' style={styles.link}>
         <Text>Não possui uma conta? Clique aqui!</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 34,
    backgroundColor: colors.zinc,
  },
  header: {
    paddingLeft: 14,
    paddingRight: 14,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 8,
  },
  slogan: {
    fontSize: 34,
    color: colors.white,
    marginBottom: 4,
  },
  form: {
    flex:1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 34,
    paddingLeft: 14,
    paddingRight: 14
  },
  label: {
    color: colors.zinc,
    marginBottom: 4
  },
  input: {
    borderWidth:1,
    borderColor: colors.gray,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingTop: 14,
    paddingBottom: 14
  },
  button:{
    backgroundColor: colors.green,
    paddingTop: 14,
    paddingBottom: 14,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    borderRadius: 8
  },
  buttonText:{
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold'
  },
  link:{
    marginTop: 16,
    textAlign: 'center'
  }
});
