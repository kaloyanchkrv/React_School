import MainPage from "./components/MainPage";
import { AppShell } from "@mantine/core";
import Header from "./components/Header";
import ThemeProvider from "./theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <AppShell
          padding="md"
          header={<Header />}
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
        >
          <MainPage />
        </AppShell>
      </div>
    </ThemeProvider>
  );
}

export default App;
