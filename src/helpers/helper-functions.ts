import { User } from "../types/domain";

export const sortByLastName = (users: User[]): User[] => {
  let nameA = "" as string;
  let nameB = "" as string;
  users.sort((a: User, b: User): number => {
    nameA = a.lastName;
    nameB = b.lastName;

    if (nameA > nameB) {
      return 1;
    } else if (nameA < nameB) {
      return -1;
    } else {
      return 0;
    }
  });

  return users;
};
