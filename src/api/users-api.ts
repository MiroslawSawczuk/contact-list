import { UserApi } from "../types/helper-api-types";

const root =
  "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json";

export const getAll = async (): Promise<UserApi[]> => {
  try {
    const response: Response = await fetch(root);
    const users: UserApi[] = await response.json();

    return users;
  } catch (ex) {
    console.error(ex);
    throw ex;
  } finally {
  }
};
