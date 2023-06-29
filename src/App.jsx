import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'

import './global.css'

export function App() {
    return (
    <>
    <Header/>
    <div className={styles.wrapper}>

      <Sidebar/>

      <main>
        <Post 
          author="Josias Roberto" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis molestias, obcaecati accusamus quibusdam dignissimos maiores, placeat suscipit vero voluptate omnis repellendus ipsa deleniti eaque dolor reprehenderit! Rerum, assumenda. Nulla."
        />
      
        <Post 
          author="Elvis Presley" 
          content="Reach out to Jesus!"
        />
      </main>

    </div>
    
    </>
  )
}

