import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/compat/firestore';
import { doc, setDoc, getDoc, deleteDoc, query, where, getDocs, collection, DocumentReference} from "firebase/firestore"
import { User } from './user';
import { Evaluation } from './evaluation';

@Injectable({
  providedIn: 'root'
})

export class BackendDataService {
  constructor(private firestore: AngularFirestore) { 

  }

  // Receives the users data and enters it to the firebase realtime database
  // Enter new user only if it does not already exist
  // INFO: This function adds a default picture and an empty course list to the useres data
  async addNewUser(user: User): Promise<string> {
    let db = this.firestore.firestore;
    let message = "";

    // Here: serach database for doc with matching user-id = this.cyrb53(this.username).toString() --> user_id
    const userDoc = await getDoc(doc(db, 'users', this.cyrb53(user.username.toString()).toString()));
    if (userDoc.exists()) {
      return "Username already exists"
    } else {
      // Here: search database for email already in use
      const q = query(collection(db, 'users'), where('email' , '==', user.email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if (doc.data()['email'] === user.email) {
          message =  "User with this E-Mail already exists\n Please log in"
        }
      });
    }
    if (message != "User with this E-Mail already exists\n Please log in") {
      // Only add new user account if user is not already in the database and returen appropriate response
      const data = { 
        userID: this.cyrb53(user.username.toString()), 
        username: user.username, 
        firstName: user.firstName,
        surname: user.surname, 
        email: user.email, 
        dateOfBirth: user.dateOfBirth, 
        password: user.password, 
        courses: user.courses, 
        profilePicture: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      }
      // Creates a new doc with the userId as doc name
      await setDoc(doc(db, 'users', data.userID.toString()), data);
      message = "You successfully registered"
    }
    return message;
  }

  async addCourse(courseID: number, courseName: string, courseDescription: string): Promise<string> {
    let db = this.firestore.firestore

    //Check if course already exists
    const documentReference = doc(db, "courses", this.cyrb53(courseID.toString()).toString());
    const courseDoc = await getDoc(documentReference);

    //Create data
    const data = {
      courseID: courseID,
      courseName: courseName,
      courseDescription: courseDescription
    }

    //Add data if it does not exist yet
    if(!courseDoc.exists()) {
      setDoc(documentReference, data);
      return "Course added"
    }

    return "Course already exists"
  }

  async addReview(evaluation: Evaluation): Promise<string> {
    let db = this.firestore.firestore

    //Create data
    const data = {
      courseID: evaluation.courseID,
      date: evaluation.date,
      username: evaluation.username,
      rating: evaluation.rating,
      review: evaluation.review
    }

    //Check if course already exists
    const courseReference = doc(db, "courses", this.cyrb53(evaluation.courseID.toString()).toString());
    const courseDocument = await getDoc(courseReference);
    if(!courseDocument.exists()) {
      console.log("Add Course");
      return "Please add the course first";
    } else { 
      const reviewReference = doc(db, "reviews", this.cyrb53(evaluation.courseID.toString()).toString());
      await setDoc (reviewReference, data);
      console.log("Review added");
      return "Review added";
    }
  }

  // Retrieve user data from username and return data
  async getUserData(username: String) {
    let db = this.firestore.firestore;
    const userDoc = await getDoc(doc(db, 'users', this.cyrb53(username.toString()).toString()));
    return userDoc
  }

  // Retrieeve the reviews for a given user
  async getEvaluations(username: string) {
    let db = this.firestore.firestore;
    const q = query(collection(db, 'reviews'), where('username' , '==', username));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  }
  
  // Retrieve login data from token return tokenDoc
  async getloggedInData(id: String| null): Promise<DocumentData|null>{
    if(id == null){
      return null;
    }
    let db = this.firestore.firestore;
    const tokenDoc = await getDoc(doc(db, 'loggedIn', id.toString()));
    return tokenDoc;
  }

  // Retrieve logIn data from token return tokenDoc
  async removeloggedInData(id: String| null): Promise<boolean>{
    if(id == null){
      return false;
    }
    let db = this.firestore.firestore;
    console.log('id to delete: ', id);
    await deleteDoc(doc(db, 'loggedIn', id.toString()));
    return true;
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
