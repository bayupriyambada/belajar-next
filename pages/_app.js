import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
import { ChakraProvider } from '@chakra-ui/react';
function MyApp({ Component, pageProps }) {
   return (
      <ChakraProvider>
         <Component {...pageProps} />
      </ChakraProvider>
   );
}

export default MyApp;
