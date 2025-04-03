import{ createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "./firebase";

export function userRegister(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function userLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function userLogout() {
  return signOut(auth);
  // return !auth;
}

export { auth };

