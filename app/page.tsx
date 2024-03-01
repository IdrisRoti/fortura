import Subscribe from './../components/Subscribe';
import RecentPosts from './../components/RecentPosts';
import AllBlogs from './../components/AllBlogs'

export default function Home() {
  return (
    <main className='max-w-[1400px] mx-auto'>
      <Subscribe />
      <RecentPosts />
      <AllBlogs />
    </main>
  );
}
