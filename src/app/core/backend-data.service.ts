import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, setDoc, getDoc, query, where } from "firebase/firestore"

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {

  constructor(private firestore: AngularFirestore) { }


  // Receives the users data and enters it to the firebase realtime database
  // Enter new user only if it does not already exist
  // INFO: This function adds a default picture and an empty course list to the useres data
  async addNewUser(username: String, first_name: String, surname: String, email: String, dateOfBirth: String, password: String) :Promise<boolean>{
    let db = this.firestore.firestore;
    const data = { 
      user_id: this.cyrb53(username.toString()), 
      username, 
      first_name, 
      surname, 
      email, 
      dateOfBirth, 
      password, 
      courses: [], 
      profilePicture: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }

    let isNewUser: boolean;

    // Here: serach database for doc with name = this.cyrb53(this.username).toString() --> user_id
    const userDoc = await getDoc(doc(db, 'users', this.cyrb53(username.toString()).toString()));
    if(userDoc.exists()){
      isNewUser = false;
    }else{
      isNewUser = true;
    }

    // Here: search database for email already in use
    /*const docData = await db.collection('users').where('email', '==', email);
    const q = query(db.collection('users'), where('email' , '==', email));
    q.converter?.fromFirestore()
    console.log(docData);
    if(docData != null){
      isNewUser = false;
      console.log("email does alredy exist");
    }else{
      isNewUser = true;
      console.log("new email");
    }*/

    // Here: set isNewUser if user or email is not already registerd
    

    // Only add new user account if user is not already in the database and returen appropriate response
    if(isNewUser){
      await setDoc(doc(db, 'users', this.cyrb53(username.toString()).toString()), data);  // creates a new doc with the userId as doc name
      return true;
    }else{
      return false;
    } 
  }


  // 53-Bit hash function from https://github.com/bryc/code/blob/master/jshash/experimental/cyrb53.js
  private cyrb53(str: string, seed = 0){
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    };
}
