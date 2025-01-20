
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import chair from "./images/chair.jpg";
import chair1 from "./images/chair1.jpeg";
import chair2 from "./images/chair2.jpg";
import chair4 from "./images/chair4.jpg";

const fadeImages = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  chair,
  chair1,
  chair2,
  chair4,
];

export default function ImageSlider() {
  return (
    
    <div className="slide-container mx-24 my-5 p-4">
      <Fade>
        <div className="each-fade " style={{ width: "100%", height: "500px" }}>
          <img src={fadeImages[0]} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="each-fade" style={{ width: "100%", height: "500px" }}>
          <img src={fadeImages[1]} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="each-fade" style={{ width: "100%", height: "500px" }}>
          <img src={fadeImages[2]} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="" style={{ width: "100%", height: "500px" }}>
          <img src={fadeImages[3]} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="" style={{ width: "100%", height: "500px" }}>
          <img src={fadeImages[4]} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="" style={{ width: "100%", height: "500px" }}>
          <img src={fadeImages[5]} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </Fade>

    </div>
  );
}
