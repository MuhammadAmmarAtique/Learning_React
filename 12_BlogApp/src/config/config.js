const config = 
{
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),     //API_ENDPOINT
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),  //Database tables
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),      //Storage
}

export default config