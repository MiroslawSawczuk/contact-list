import * as usersApi from "../api/users-api";
import { User } from "../types/domain";
import { GenderType } from "../types/enums";
import * as helpers from "../helpers/helper-functions";

export const getAll = async (): Promise<User[]> => {
  try {
    const usersFromApi = await usersApi.getAll();

    var users = usersFromApi.map(
      (u) =>
        ({
          id: u.id,
          firstName: u.first_name,
          lastName: u.last_name,
          email: u.email,
          gender:
            u.gender === GenderType.Male.toString()
              ? GenderType.Male
              : GenderType.Female,
          avatar: u.avatar,
          checked: false,
        } as User)
    );

    users = helpers.sortByLastName(users);

    return users;
  } catch (ex) {
    console.error(ex);
    throw ex;
  } finally {
  }
};
