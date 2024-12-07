/* eslint-disable @typescript-eslint/no-unused-vars */
import SearchForm from "../components/SearchForm";


export default async function Home({searchParams  } :
  { searchParams : Promise< { query?: string }>
}) 
    {
      const query = (await searchParams).query;
  return (
    <>
    <section className="pink_container">
    
    <h1 className="heading">
      Pitch your startuP,
      <br />
      Connect with Entrepreneurs
    </h1>

{/* To override the default utility class we can use " ! " to override as !max-h-1 like this  */}
    <p className="sub-heading !max-w-3xl">
        Submit your startup idea and connect with like-minded entrepreneurs.
    </p>


        <SearchForm query={query} />

        
    </section>
    </>
  );
}
