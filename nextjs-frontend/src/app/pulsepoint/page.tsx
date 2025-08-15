// File Path: src/app/pulsepoint/page.tsx

import { client } from "@/lib/sanity.client";
import { postsQuery } from "@/lib/sanity.queries";
import PostCard from "@/lib/components/global/PostCard";
import { SanityPost } from "@/types";

async function getPosts() {
  const posts: SanityPost[] = await client.fetch(postsQuery);
  return posts;
}

export default async function PulsePointPage() {
  const posts = await getPosts();

  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900">PulsePoint</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            In-depth, strategic content. This is our publication for topic
            breakdowns and evergreen guides.
          </p>
        </div>

        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-slate-700">
              No posts yet!
            </h2>
            <p className="mt-2 text-slate-500">
              Check back soon for the latest articles.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}