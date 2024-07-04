import sunsetImage from "./assets/sunset-lukas-rodriguez.jpg";
import beachImage from "./assets/beach-valeriiamiller.jpg";
import profileIcon from "./assets/profileicon.jpg";
import foodImage from "./assets/Food-joseph-gonzalez.jpg";

const posts = [
  {
    id: 1,
    username: "Lukas_",
    profilePic: profileIcon,
    image: sunsetImage,
    likes: 100,
    caption: "Beautiful sunset in the city!",
  },
  {
    id: 2,
    username: "Miller_Val",
    profilePic: profileIcon,
    image: beachImage,
    likes: 75,
    caption: "Throwback to a great beach day!",
  },
  {
    id: 3,
    username: "JoJo_Foodie",
    profilePic: profileIcon,
    image: foodImage, 
    likes: 20,
    caption: "Can't wait to eat this!",
  },
];

export default posts;

