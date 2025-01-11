import { Client, Databases } from "appwrite";

const client = new Client();

client
  // .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
  .setEndpoint(String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)) // Replace with your Appwrite endpoint
  .setProject(String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)); // Replace with your project ID

const databases = new Databases(client);

export { client, databases };