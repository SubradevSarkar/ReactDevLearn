import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteEndPoint)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // login user
        this.logIn({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async logIn({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite server :: getCurrentUser :: error" + error);
    }
    return null;
  }

  async logOut() {
    try {
      await this.account.deleteSessions("current");
    } catch (error) {
      throw new Error(error);
    }
  }
}

const authService = new AuthService();

export default authService;
