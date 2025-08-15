// File Path: src/lib/components/global/Resource.tsx
// This new component renders the full content of a single resource.

import { SanityResource } from "@/types";
import { PortableTextComponent } from "./PortableTextComponent";

type Props = { resource: SanityResource };

export default function Resource({ resource }: Props) {
  return (
    <article className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-extrabold">{resource.title}</h1>
      </header>
      <div className="prose prose-lg max-w-none">
        <PortableTextComponent value={resource.body} />
      </div>
    </article>
  );
}
