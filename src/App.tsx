import { Header } from './components/Header'
import { List } from './components/List'

import './global.css'

export function App() {
  
  return (
    <div className="App">
      <Header />
      <main>
        <List/>
      </main>
    </div>
  )
}