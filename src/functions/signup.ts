import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth, db } from "./firebase";
import { addDoc, collection ,doc, setDoc, serverTimestamp } from "firebase/firestore";

interface FormData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  country: string;
  telephone: string,
  referral_code: string 
  invite?: string 
}

export async function signup(formData: FormData) {
  const { email, password, first_name, last_name, username, country, telephone, referral_code } = formData;
  try {
    // Sign up the user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Send email verification
    await sendEmailVerification(user);
    await updateProfile(user, {displayName: first_name})
    // Create a document for the user in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      first_name,
      last_name,
      country,
      username,
      telephone,
      referredBy: referral_code || null,
      referralEarnings: 0,
      balance: 0,
      createdAt: serverTimestamp(),
    });

    await setDoc(doc(db, "users", referral_code, "referrals", user.uid), {
      uid: user.uid,
      name: first_name,
      status: "active"
    });
    
    console.log("User signed up and data saved to Firestore.");
    return true;
  } catch (error: any) {
    console.error("Signup error:", error.message);

    // Provide meaningful error message for the UI
    if (error.code === "auth/email-already-in-use") {
      throw new Error("This email is already in use. Please try logging in.");
    } else if (error.code === "auth/weak-password") {
      throw new Error("The password must be at least 6 characters long.");
    } else {
      throw new Error("An error occurred during signup. Please try again.");
    }
  }
}