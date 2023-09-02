import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post ,PostType } from "./components/Post"


import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/josiasroberto.png',
      name: 'Josias Roberto',
      role: 'Piloto'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Ignite Feed 🚀'},
      {type: 'link', content: 'josias.design/ignitefeed'},      
    ],
    publishedAt: new Date('2023-06-30 10:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/jakeliny.png',
      name: 'Jakeliny Gracielly',
      role: 'Web developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋'},
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui. Acesse e deixe seu feedback'},
      {type: 'link', content: 'jakeliny.design'},      
    ],
    publishedAt: new Date('2023-06-28 10:00:00'),
  },
]

export function App() {
    return (
    <>
    <Header/>
    <div className={styles.wrapper}>

      <Sidebar/>

      <main>
        {posts.map(post =>{
          return (
            <Post 
              key={post.id}
              post={post}
            />
          )
        })}
      </main>

    </div>
    
    </>
  )
}

