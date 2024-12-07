import { updateDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

export const updateADoc = async (uid: string, updateValues: any) => {
  const userDocRef = doc(db, 'users', uid);
  await updateDoc(userDocRef, updateValues);
  // Update the local userDoc state
};