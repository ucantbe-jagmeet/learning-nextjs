import { useState } from "react"

function CommentsPage(){

    const [comments, setComments] = useState([]);
    const fetchComments = async()=>{
        const resp = await fetch('/api/comments')
        const data = await resp.json()
        setComments(data)
    }


    return<>
        <button onClick={fetchComments}>Load Comments</button>
        <p>{comments.map(comment=>{
            return <div key ={comment.id}>
                {comment.id} {comment.text}
            </div>
        })}</p>
    </>
}
export default CommentsPage