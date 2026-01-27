import PropTypes from "prop-types";

function ProfileCard({ name, age, isMember }) {
  return (
    <>
      <div>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>Status: {isMember ? "Active Member" : "Guest"}</h3>
      </div>
    </>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMember: PropTypes.bool.isRequired,
};

export default ProfileCard;
