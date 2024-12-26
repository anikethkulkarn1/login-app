
import { Stack } from "expo-router";

const NewsLayout = () => {
  return (
    <Stack style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#99ffff",
      }}>
      <Stack.Screen name="index" options={{ headerTitle: "News" }} />
    </Stack>
  );
};

export default NewsLayout;
