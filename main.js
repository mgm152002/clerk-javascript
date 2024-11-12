import { Clerk } from '@clerk/clerk-js';

// Fetch the Clerk publishable key from environment variables
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const clerk = new Clerk(clerkPubKey);

// Load Clerk
await clerk.load();

// Check if the user is authenticated
if (clerk.user) {
  // User is authenticated, render the user button
  document.getElementById("app").innerHTML = `
    <div id="user-button"></div>
  `;

  const userButtonDiv = document.getElementById("user-button");

  // Mount the user button
  clerk.mountUserButton(userButtonDiv);

  // Redirect to the proxy path, which will internally redirect to localhost:3000
  window.location.href = "/protected";  // This will be proxied by Vite
} else {
  // User is not authenticated, render the sign-in page
  document.getElementById("app").innerHTML = `
    <div id="sign-in"></div>
  `;

  const signInDiv = document.getElementById("sign-in");

  // Mount the sign-in component
  clerk.mountSignIn(signInDiv);
}