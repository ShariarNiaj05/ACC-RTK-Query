import {
  useGetPostsQuery,
  useSetPostMutation,
} from "../../Redux/Features/API/baseApi";
import { useForm } from "react-hook-form";

const Feed = () => {
  const { data: posts } = useGetPostsQuery();
  const [setPost, { data: postData }] = useSetPostMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(postData);
  const onSubmit = (data) => {
    setPost(data);
  };

  return (
    <div className=" my-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className=" w-full text-zinc-300 bg-zinc-800 p-3 rounded-md"
          type="text"
          defaultValue="test"
          {...register("post")}
        />

        <button
          className=" bg-zinc-800 text-zinc-300 text-lg p-3 border border-zinc-300 rounded-md"
          type="submit"
        >
          Post
        </button>

        {/* <input type="submit" /> */}
      </form>

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
