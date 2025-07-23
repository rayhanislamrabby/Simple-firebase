import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./Firebase/firebase.int.js";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();

  const providertow = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);

        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  const handleGithubleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, providertow)
      .then((resultt) => {
        console.log(resultt.user);

        setUser(resultt.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  const handelSingout = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        console.log("sing out ");
        setUser(null);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  return (
    <>
      <h2>Simple Dimple Firebase</h2>

      {user ? (
        <button onClick={handelSingout}>Sing Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Login With Google</button>
          <button onClick={handleGithubleSignIn}>Login With Github</button>
        </>
      )}

      {user && (
        <div>
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </>
  );
}

export default App;
