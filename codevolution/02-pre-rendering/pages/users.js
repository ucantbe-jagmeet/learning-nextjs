import User from "../components/user.js";

function UserList({ users }) {
  return (
    <>
      <h1>List of Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();

  return {
    props: {
      users: data,
    },
  };
}
