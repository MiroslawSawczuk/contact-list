import { User } from "../types/domain";

interface ContactsTableProps {
  contacts: User[];
  searchValue: string;
  handleOnCheckedUser(userId: number): void;
}
const ContactsTable = (props: ContactsTableProps): JSX.Element => {
  const { contacts, searchValue, handleOnCheckedUser } = props;

  const colAvatar = (
    avatar?: string | null,
    firstName?: string,
    lastName?: string
  ) =>
    avatar ? (
      <img src={avatar} alt="avatar" />
    ) : (
      <div>
        {firstName?.charAt(0).toUpperCase()} {lastName?.charAt(0).toUpperCase()}
      </div>
    );

  const rowItems = contacts
    .filter((item) => {
      if (
        `${item.firstName.toLowerCase()} ${item.lastName.toLowerCase()}`.includes(
          searchValue
        )
      ) {
        return true;
      } else {
        return false;
      }
    })
    .map((contact) => {
      return (
        <tr key={contact.id}>
          <td>
            {colAvatar(contact.avatar, contact.firstName, contact.lastName)}
          </td>
          <td>
            {contact.firstName} {contact.lastName}
          </td>
          <td>
            <input
              className="form-check-input"
              type="checkbox"
              checked={contact.checked}
              onChange={() => handleOnCheckedUser(contact.id)}
            />
          </td>
        </tr>
      );
    });

  return (
    <table className="table table-sm table-hover">
      <tbody>{rowItems}</tbody>
    </table>
  );
};

export default ContactsTable;
