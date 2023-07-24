import Router from "./shared/Router";
import GlobalStyle from "./utils/GlobalStyle";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <Router />
      <GlobalStyle />
      </QueryClientProvider>
    </>
  );
}

export default App;
