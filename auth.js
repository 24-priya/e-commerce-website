function signUp() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Sign-up successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Sign-up failed: " + error.message);
    });
}

function signIn(event) {
  event.preventDefault(); // ✅ stop form reload
  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Sign-in successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Sign-in failed: " + error.message);
    });
}

