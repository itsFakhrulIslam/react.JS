const User = ({ user }) => {
  const { name, username, email, city, lat, phone, website } = user;
  return (
    <div>
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>City:</strong> {user.address.city}
      </p>
      <p>
        <strong>Latitude:</strong> {user.address.geo.lat}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Website:</strong> {website}
      </p>
    </div>
  );
};

export default User;
