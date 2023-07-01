import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({content ,onDeleteComment}){
  function handleDeleteComment(){
    onDeleteComment(content)
  }
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/josiasroberto.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Josias Roberto</strong>
              <time title="28 de junho de 2023" dateTime='2023-06-28 10:00:00'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}