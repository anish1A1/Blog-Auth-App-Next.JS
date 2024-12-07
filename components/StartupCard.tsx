import { formatDate } from '@/lib/utils'
import React from 'react'

const StartupCard = ({post} : {post : StartupTypecard}) => {
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

            

        </div>
    </li>
  )
}

export default StartupCard
