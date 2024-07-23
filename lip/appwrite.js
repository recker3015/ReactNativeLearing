import {
  Client,
  Account,
  ID,
  Avatars,
  Databases,
  Query,
} from "react-native-appwrite";
// import SignIn from "../app/(auth)/sign-up";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.abhi.treehouse",
  projectId: "6698e3df00390e7cc8be",
  databaseId: "6698e50a0027bcad8dbb",
  userCollectionId: "6698e51d001a14cf4fc5",
  videoCollectionId: "6698e531003bc46b7c83",
  storageId: "6698e6ad003340c8c49a",
};
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
export const createUser = async (email, password, name) => {
  try {
    console.log("creating user..");
    const newAccount = await account.create(ID.unique(), email, password, name);
    if (!newAccount) throw error;
    const avatarUrl = avatars.getInitials(name);
    await SignInUser(email, password);
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountid: newAccount.$id,
        email: email,
        username: name,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const SignInUser = async (email, password) => {
  try {
    console.log("signing in..");
    const session = await account.createEmailPasswordSession(email, password);
    if (!session) throw error;
    return session;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getCurrentUser = async () => {
  try {
    console.log("getting current user..");
    const currentAccount = await account.get();
    if (!currentAccount) throw error;
    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("accountid", currentAccount.$id)]
    );
    if (!createUser) throw error;
    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
