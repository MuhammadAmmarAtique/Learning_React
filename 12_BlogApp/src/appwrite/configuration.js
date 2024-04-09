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

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  // (DATABASES)
  //1) Create Post
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    //here unique id for a post is slug
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
    } catch (error) {
      console.log(
        "Appwrite Configuration Service error :: createPost error :: ",
        error
      );
    }
  }
  //2) Update Post
  // (by using slug we will uniquely identify our post so we will keep it outside object for our ease.)
  async updatePost(slug, { title, content, featuredImage, status }) {
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
    } catch (error) {
      console.log(
        "Appwrite Configuration Service error :: updatePost error :: ",
        error
      );
    }
  }

  //3) Delete Post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        //we dont need to return any value we just have to delete post
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(
        "Appwrite Configuration Service error :: deletePost error :: ",
        error
      );
    }
    return false;
  }

  //4) Get Post   (to take one post)
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(
        "Appwrite Configuration Service error :: getPost error :: ",
        error
      );
    }
  }

  //5) We need all that post in which status is "active", for that we will write custom query along with method
  // databases.listDocuments()

  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        // note: query result comes in the form of array
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
        // This custom query will filter the result.
        // Inside this array we can give multiple queries.
      );
    } catch (error) {
      console.log(
        "Appwrite Configuration Service error :: getAllPosts error :: ",
        error
      );
    }
  }

  // (STORAGE)
  // 1) Upload file method/ Service(confirm if its create file or upload file as sir named it as upload, its confusing)
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(
        "Appwrite Configuration Service error :: uploadFile error :: ",
        error
      );
    }
  }

  // 2) Delete file method/ Service
  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log(
        "Appwrite Configuration Service error :: deleteFile error :: ",
        error
      );
      return false;
    }
  }

  //3) File preview  (We will not write it in async await as its response is very fast)
  getFilePreview(fileId) {
    this.storage.getFilePreview(config.appwriteBucketId, fileId);
  }
}

const service = new Service();
export default service; // it will be better if we gave it a name of appwrite service TODO
