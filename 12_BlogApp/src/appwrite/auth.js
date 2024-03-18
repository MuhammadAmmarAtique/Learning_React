// Authentication using Appwrite

import config from "../config/config"
import { Client, Account, ID } from "appwrite";
//Here we are not copy pasting code from appwrite authentication "getting started section" rather we will write our 
// own code, This is just a code improvement or a better approach.


// AuthService in capital letter is class and in small letter is object, here we are making object and 
//  exporting it.

export  class AuthService {
     client = new Client();  // Yahan par "client" aur "account" tab banaay ga jab bhi is Class (AuthService) ka 
     account;                // new object banaay ga. (see appwrite Authentication doc) 

     constructor()
     {
       this.client.setEndpoint(config.appwriteUrl);
       this.client.setProject(config.appwriteProjectId);

       this.account = new Account(this.client);
     }
}

const authService = new AuthService();

export default authService;