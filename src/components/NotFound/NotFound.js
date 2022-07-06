import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"
//import {Gift404} from '../../assets/images/GiftNotFound.mp4'

const NotFound = () => {
  return (
      <div className="text-center">
          <h1>404</h1>
          <h5>Sorry, we can't seem to find the page you're looking for.</h5> 
     
          {/*<img src={'../assets/images/404.jpg'} alt=" " />*/}
          <img src={'../../assets/images/GiftNotFound.mp4'} alt=" " />  
    
          <Link to={"/"} >
          <Button variant='outline-dark' size='lg' > Go Back </Button>
          </Link>
        </div>
  );
};

export default NotFound;
