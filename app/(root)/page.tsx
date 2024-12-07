/* eslint-disable @typescript-eslint/no-unused-vars */
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";


export default async function Home({searchParams  } :
  { searchParams : Promise< { query?: string }>
}) 
    {
      const query = (await searchParams).query;

      const posts = [
        {
          _createdAt : new Date(),
          views: 55,
          author : { _id : 1 , name : "John Doe"},
          _id : 1,
          descriptions : "This is a description",
          image : "https://www.freepik.com/free-photo/robot-holding-light-bulb_7528593.htm#fromView=keyword&page=1&position=0&uuid=937590c0-dcde-4395-b3e8-f23193019d91",
          category : "Technology",
          title : "Robots",
        },
      ];
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



    <section className="section_container">

      {/* If there is a search query then show "Search Results for that */}
    <p className="text-30-semibold">

        {query ? `Search Results for "${query}"` : "All startUps" }

    </p>

    <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
          posts.map( (post : StartupCardType, index : number) => (
            <StartupCard key={index} post={post} />
          ))
        ) :(
            <p className="no-results"> No startups Found</p>)
        }
    </ul>



    </section>
    </>
  );
}
