import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter()
    const { slug } = router.query

  return (
    <div>
            Product: { slug }
    </div>
  )
}
export default Post
