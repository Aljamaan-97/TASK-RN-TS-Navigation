import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}

export const unstable_settings = {
  initialRouteName: "index",
};
