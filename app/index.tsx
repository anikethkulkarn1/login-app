import { Link, useRouter } from "expo-router";
import { View, Pressable, Text, StyleSheet } from "react-native";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.replace("home");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#99ffff",
      }}
    >
      <Pressable onPress={handleLogin}>
        <Text
        
        >
          Login
        </Text>
      </Pressable>

      <Link href="/register" asChild>
        <Pressable>
          <Text
           
          >
            Create account
          </Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default LoginPage;
