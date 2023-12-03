import conf from "../conf/conf.js";
import { Client, ID, Storage, Databases, Query } from "appwrite";

class Service {
  client = new Client();
  storage;
  database;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteEndPoint)
      .setProject(conf.appwriteProjectId);

    this.storage = new Storage(this.client);
    this.database = new Databases(this.client);
  }

  //post  service
  async createPost({ title, content, featureImage, status, userId }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique,
        {
          title,
          content,
          featureImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  async updatePost(postId, { title, content, featureImage, status }) {
    try {
      return await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId,
        {
          title,
          content,
          featureImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  async deletePost(postId) {
    try {
      await this.database.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(postId) {
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
    }
  }

  async getPosts(query = [Query.equal("status", "active")]) {
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        query
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
    }
  }

  //file upload service
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  filePreview(fileId) {
    return this.storage.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
