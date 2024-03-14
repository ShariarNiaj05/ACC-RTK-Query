import { useGetPostsQuery } from "../../Redux/Features/API/baseApi";

const Feed = () => {
  const { data: posts } = useGetPostsQuery();
  return (
    <div>
      {posts?.map((post, i) => (
          <div key={i}>
              <p>Posts</p>
          <h2>
            {i + 1}, {post?.title}
          </h2>
        </div>
      ))}
          
          
    </div>
  );
};

export default Feed;
