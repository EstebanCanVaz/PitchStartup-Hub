import SearchForm from "@/components/SearchForm";
import StartupCard, {StartupTypeCard} from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { auth } from "@/auth";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  const query = (await searchParams).query;
  const params = { search : query || null };

  const session = await auth();

  const { data: posts} = await sanityFetch({ query : STARTUP_QUERY, params });

  return (
    <>
              <section className="blue_container">
        <h1 className="heading">Share Your Vision, <br />Build Your Network</h1>
        <p className="sub-heading !max-w-3xl">
          Share your ideas, discover amazing projects, and connect with the community.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold m-10">
          {query ? `Search results for "${query}"` : "Explore Startups"}
        </p>

        <ul className="m-10 mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-result">No Startups Found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  )
}

