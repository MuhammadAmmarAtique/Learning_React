// Appwrite Databases, Storage and Custom Queries
//We can also make storage separetly from databases for code reusability

import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage; //storage or bucket

  constructor() {
    this.client.setEndpoint(config.appwriteUrl);
    this.client.setProject(config.appwriteProjectId);

    this.databases = new Databases(client);
    this.storage = new Storage(client);
  }

  //1) create Post

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug, // instead of '[DOCUMENT_ID]' iam currently taking slug, we can also use ID.unique() as well here.
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } 
    catch (error) 
    {
        console.log( "Appwrite Configuration Service error :: createPost error :: ", error );
    }
  }
  //2) update Post
        //by using slug we will uniquely identify our post so we will keep it outside object for our ease.
  async updatePost( slug, { title, content, featuredImage, status }) { 
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug, 
        {
            title,
            content,
            featuredImage,
            status,
          }
      );
    }  
    catch (error) 
    {
        console.log( "Appwrite Configuration Service error :: updatePost error :: ", error );
    }
  }

  //3) Delete Post
        
    async deletePost( slug) { 
        try {
            await this.databases.deleteDocument(  //we dont need to return any value we just have to delete post
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug
            );
            return true
        }  
        catch (error) 
        {
            console.log( "Appwrite Configuration Service error :: deletePost error :: ", error );
        }
        return false
        }
}

const service = new Service();

export default service;
