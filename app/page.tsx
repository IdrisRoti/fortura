import Subscribe from './../components/Subscribe';
import RecentPosts from './../components/RecentPosts';
import AllBlogs from './../components/AllBlogs';
import { PostType } from '@/components/Posts';


export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`)
  const posts = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return posts;
};

const Home = async() => {
  const posts: PostType[] = await getData()

  return (
    <main className='max-w-[1400px] mx-auto'>
      <Subscribe />
      <RecentPosts posts={posts}/>
      <AllBlogs posts={posts}/>
    </main>
  );
}

export default Home