import { Link } from "react-router-dom"
//import {loadingGift} from '../assets/images/GiftNotFound.mp4'

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h5> Sorry, we can't seem to find the page you're looking for.</h5>
      <img src={'../assets/images/GiftNotFound.mp4'} alt=" " />
      <Link to={"/"} >
           <button> Go Back </button>
      </Link>
    </div>
  );
};

export default NotFound;
