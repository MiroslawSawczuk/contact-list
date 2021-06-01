import { useState, useEffect } from "react";
import ContactsTable from "../components/contactsTable";
import { User } from "../types/domain";
import * as userService from "../services/users-service";
import SearchBar from "../components/searchBar";
import "../styles/contacts.css";

const Contacts = (): JSX.Element => {
  const [contacts, setContacts] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllData = async (): Promise<void> => {
    const users = await userService.getAll();
    setContacts(users);
  };

  const handleOnCheckedUser = (id: number): void => {
    const contactList = [...contacts];
    let user = contactList.find((u) => u.id === id);
    if (user) {
      user.checked = !user.checked;
    }
    setContacts(contactList);

    console.log(contacts.filter((c) => c.checked).map((c) => c.id));
  };

  const handleChangeSearchValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="col-5">
          <div className="search-bar-container">
            <SearchBar
              searchValue={searchValue}
              handleChangeSearchValue={handleChangeSearchValue}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="contacts-table-container">
            <ContactsTable
              searchValue={searchValue}
              contacts={contacts}
              handleOnCheckedUser={handleOnCheckedUser}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
