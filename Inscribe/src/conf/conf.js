const ENV = import.meta.env;

const conf = {
  appwriteEndPoint: String(ENV.VITE_APPWRITE_URL),
  appwriteProjectId: String(ENV.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(ENV.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(ENV.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(ENV.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
