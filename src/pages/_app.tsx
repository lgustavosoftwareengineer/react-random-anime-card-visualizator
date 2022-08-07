import { App } from 'src/app'
import '../styles/globals.css'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

export default App
