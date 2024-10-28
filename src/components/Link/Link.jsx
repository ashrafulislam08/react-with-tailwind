import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <li className="mr-10 hover:bg-yellow-300 p-2">
      <a className="text-lg" href={route.path}>
        {route.name}
      </a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
