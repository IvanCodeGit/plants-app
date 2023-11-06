import { StatusBar } from "expo-status-bar";
import Navigation from "./app/components/navigation/Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
