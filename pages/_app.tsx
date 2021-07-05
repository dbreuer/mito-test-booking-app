import type { AppProps } from 'next/app'

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { wrapper } from "../store/store";

import '../styles/colors.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Component {...pageProps} />
      </MuiPickersUtilsProvider>
  )
}
export default wrapper.withRedux(MyApp);
