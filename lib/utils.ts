import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// When we need to create a function for our add we can create in this 
// file 


// this function will format the date. Here it will take a date and format it
// to a date format
export function formatDate( date: string ) {
  return new Date (date).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }

  )
}