import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { sno } = router.query;

  return <div>Post : {sno}</div>;
};

export default Post;
