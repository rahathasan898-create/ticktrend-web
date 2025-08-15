// File Path: src/lib/components/global/Post.tsx
// This component is now updated with the corrected import path.

import Image from "next/image";
import { SanityPost } from "@/types";
import urlFor from "@/lib/urlFor";
// --- FIX: Corrected the import to match the default export ---
import {PortableTextComponent} from "./PortableTextComponent";

type Props = { post: SanityPost };

export default function Post({ post }: Props) {
  // Safely get the image URL using our robust urlFor function
  const mainImageUrl = post.mainImage ? urlFor(post.mainImage).url() : null;

  return (
    <article className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* --- FIX: Only render the image if the URL exists --- */}
      {mainImageUrl && (
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <Image 
            src={mainImageUrl} 
            alt={post.mainImage?.alt || "Post image"} 
            layout="fill" 
            objectFit="cover" 
            priority 
          />
        </div>
      )}
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-extrabold">{post.title}</h1>
        <div className="text-gray-500 mt-4 text-sm">
          {/* --- FIX: Only render the author if it exists --- */}
          {post.author?.name && (
            <span>By {post.author.name} • </span>
          )}
          {/* Safely format the date */}
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
        </div>
      </header>
      <div className="prose prose-lg max-w-none">
        {/* --- FIX: Only render the body if it exists --- */}
        {post.body && <PortableTextComponent value={post.body} />}
      </div>
    </article>
  );
}
