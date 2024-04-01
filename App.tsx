import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Box, NativeBaseProvider, StatusBar } from "native-base";

import { Heading } from "native-base";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  console.log(fontsLoaded);

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#121214"
        translucent
      />
      <Box flex={1} alignItems="center" justifyContent="center">
        <Heading fontSize="2xl">Hello Native Base</Heading>
      </Box>
    </NativeBaseProvider>
  );
}
