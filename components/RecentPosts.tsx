import { PostType } from './Posts';
import RecentPostCard from './RecentPostCard';
import FirstRecentPost from './FirstRecentPost';

const RecentPosts = async ({posts}:{posts: PostType[]}) => {
    
  return (
    <section className="px-2 mt-16">
        <h2 className="text-2xl">Recent blog Posts</h2>
        <div className="md:grid md:grid-cols-2 md:items-start mt-4">
            {/* RECENT POST 1 */}
            <FirstRecentPost post={posts && posts[0]} />
            <div className='md:ml-4'>
                {/* RECENT POST 2 */}
            <div className='mb-4'><RecentPostCard post={posts && posts[1]}/></div>
                {/* RECENT POST 3 */}
                <RecentPostCard post={posts && posts[2]}/>
            </div>
        </div>
        <hr className='mt-5 mb-5' />
    </section>
  )
}

export default RecentPosts