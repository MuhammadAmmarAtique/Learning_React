import React from 'react'
import appwriteService from "../appwrite/configuration" // service object
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) { 
    // here $id is a variable for post-id (Remember its a syntax in Appwrite to name id as $id)
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} //featuredImage is  a image id
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard