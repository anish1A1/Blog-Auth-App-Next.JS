/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'




const StartupCard = ({post} : {post : StartupTypecard}) => {

    // Destructuring the post object. Here we are destructuring the author object
    // and rewriting it to authorID and authorName
    const { author : { _id : authorID, name : authorName}} = post;
  return (
    <li className='startup-card group'>
        <div className="flex-between">

            <p className="startup_card_date">
                
                {/* When we make a new Date() in a array,  First we need to format it 
                to a date format. We can create a function for this. It is created in 
                utils.ts file  whch is inside the lib folder
                */}

                {formatDate(post._createdAt)}
            </p>


            <div className="flex  gap-1.5">
                <EyeIcon  className= "size-6 text-primary" />
                <span className="text-16-medium">{post.views}</span>
            </div>
        </div>

            <div className="flex-between mt-5 gap-5">

                <div className="flex-1">
                <Link href={`/users/${post.author._id}`}  >
                    <p className="text-16-medium line-clamp-1">
                        {post.author?.name}
                    </p>
                </Link>


                <Link href= {`/startup/${post._id}`}>
                      <h3 className="text-26-semibold line-clamp-1">
                        {post.title}
                      </h3>
                </Link>
                </div>

               
                
                <Link href= {`/users/${authorID}`}>

                    <Image src={"https://placehold.co/48x48"} alt="placeholder" width={48} height={48}
                    className="rounded-full">

                    </Image>

                </Link>

                
            </div>


            <Link href={`/startup/${post._id}`}>
                    <p className='startup-card_desc'>
                        {post.descriptions}
                    </p>
                    
                   
                    <img src={post.image} alt="placeholder" className='startup-card_img' />
            </Link>



      

        

        <div className="flex-between gap-3 mt-5">
            <Link href={`/?query=${post.category.toLowerCase()}`}>
                <p className="text-16-medium">
                    {post.category}
                </p>
            </Link>

            <Button className='startup-card_btn' asChild>
                <Link href={`/startup/${post._id}`}>
                    Details
                </Link>
            </Button>
        </div>
    </li>
  )
}

export default StartupCard
