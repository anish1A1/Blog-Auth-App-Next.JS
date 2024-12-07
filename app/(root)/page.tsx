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
          author : { _id : 1},
          _id : 1,
          descriptions : "This is a description",
          image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FRuko-Programmable-Interactive-Control-Present%2Fdp%2FB085WPHTHW&psig=AOvVaw2WNdpjQwKqyg0MztG2cjBk&ust=1733627431105000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNii69LXlIoDFQAAAAAdAAAAABAE",
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
