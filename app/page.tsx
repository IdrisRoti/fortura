import Subscribe from './../components/Subscribe';
import RecentPosts from './../components/RecentPosts';
import AllBlogs from './../components/AllBlogs'
import { getSession } from '@/utils/getSession';

export default function Home() {

  const session = getSession()

  return (
    <main className='max-w-[1400px] mx-auto'>
      {!session && <Subscribe />}
      <RecentPosts />
      <AllBlogs />
    </main>
  );
}
