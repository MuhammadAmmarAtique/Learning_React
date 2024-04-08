// Authentication using Appwrite

import config from "../config/config";
import { Client, Account, ID } from "appwrite";
//Here we are not copy pasting code from appwrite authentication "getting started section" rather we will write our
// own code, This is just a code improvement or a better approach.

// AuthService in capital letter is class and in small letter is object, here we are making object and
//  exporting it.

export class AuthService {
  client = new Client(); // Yahan par "client" aur "account" tab banaay ga jab bhi is Class (AuthService) ka
  account; // new object banaay ga. (see appwrite Authentication doc)

  constructor() {
    //if in some day we decide to use "firebase" instead of "appwrite", we will just change
    // constructor() and we are good to go!
    this.client.setEndpoint(config.appwriteUrl);
    this.client.setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  //1) Sign-up
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create( ID.unique() ,email ,password ,name );
          if (userAccount) {
            //if account is created , i want user to login at that point also
            return this.login( { email, password })
          } else {
            return userAccount;
          }
    }
     catch (error) {
      console.log("Appwrite Authentication Service error :: createAccount error :: " , error)

    }
  }

  //2) Login/ Sign-in
  async login({ email, password}) {
    try 
    {
      return  await this.account.createEmailSession(email, password);
    } 
    catch (error) {
      console.log("Appwrite Authentication Service error :: login error :: " , error)

    }
  }

   //3) Logout
   async logout() {
    try 
    {
      return  await this.account.deleteSessions();  //deleteSession and deleteSessions are two different functions.
    }                        //deleteSessions will logout user from all the devices
    catch (error) {
      console.log("Appwrite Authentication Service error :: Logout error :: " , error) //gracefully handling error
    }
  }

   //4) getCurrentUser    (if user lands directly on home page, we will check if user is login or not ?)
   async getCurrentUser() {
    try 
    {
      return  await this.account.get();
    } 
    catch (error) {
      console.log("Appwrite Authentication Service error :: getCurrentUser error :: " , error)
    }

    return null;  //If an error occurs during the execution of await this.account.get(), the code catches the error
    //  in the catch block and logs it using console.log(). After handling the error, the function returns null
  }
}

const authService = new AuthService();

export default authService;
