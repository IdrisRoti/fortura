import Posts from "@/components/Posts";
import axios from "axios";

const getData = async (cat: string | string[] | undefined) => {
  const res = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/posts?cat=${cat}`
  );
  return res.data;
};

const Category = async ({
  searchParams,
}: {
  searchParams: { [cat: string]: string | string[] | undefined };
}) => {
  const { cat } = searchParams;
  const catPosts = await getData(cat);

  return (
    <div className="pt-[70px] max-w-[1400px] mx-auto p-2">
      <h2 className="font-bold text-2xl mb-3">
        <span className="text-blue-600 capitalize">{cat}</span> Posts
      </h2>
      <main>
        <Posts postsData={catPosts} />
      </main>
    </div>
  );
};

export default Category;
