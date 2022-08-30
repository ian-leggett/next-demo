import "../styles/globals.css";
import GlobalLayout from "../components/global-layout";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    // <GlobalLayout>
    getLayout(<Component {...pageProps} />)
  );
  {
    /* </GlobalLayout> */
  }
}

export default MyApp;

// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
