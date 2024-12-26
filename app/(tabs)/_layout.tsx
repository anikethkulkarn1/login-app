import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "List",
          headerTitle: "Home Screen",
          tabBarIcon: ({ color,size }) => (
            <FontAwesome5 name="list" size={size} color={'blue'} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Account",
          headerTitle: "My Account",
          
          
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={'purple'} />
          ),
        }}
      />

      <Tabs.Screen
        name="list"
        options={
          {
          tabBarLabel: "News",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="newspaper" size={size} color={'green'} />
          ),
        }}
      />
    </Tabs>
  );
};
