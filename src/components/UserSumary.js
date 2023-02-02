const UserSumary = ({ props }) => {
  return (
    <div>
      <h1>Results</h1>
      <div className="body">
        <p>Name:{name}</p>
        <p>Email:{email}</p>
        <p>Password:{password}</p>
      </div>
    </div>
  );
};

export default UserSumary;
