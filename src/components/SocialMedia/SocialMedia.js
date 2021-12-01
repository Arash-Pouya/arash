import React from "react";
import "./SocialMedia.css";
import Arash from "../../assets/images/arash.png";
import { SocialMediaIconsReact } from "social-media-icons-react";

const SocialMedia = (props) => {
  return (
    <div className="title">
      <img src={Arash} className="image2" />
      <div>
        <SocialMediaIconsReact borderColor="rgba(12,255,6,0)" borderWidth="5" borderStyle="solid" icon="linkedin" iconSize="5" roundness="30%" url="https://www.linkedin.com/in/arash-pouya-151a418a/" size="30" />
        <SocialMediaIconsReact borderColor="rgba(12,255,6,0)" borderWidth="5" borderStyle="solid" icon="whatsapp" iconSize="5" roundness="30%" url="https://some-website.com/my-social-media-url" size="30" />
        <SocialMediaIconsReact borderColor="rgba(12,255,6,0)" borderWidth="5" borderStyle="solid" icon="github" iconSize="5" roundness="30%" url="https://some-website.com/my-social-media-url" size="30" />
        <SocialMediaIconsReact borderColor="rgba(12,255,6,0)" borderWidth="5" borderStyle="solid" icon="mail" iconSize="5" roundness="30%" url="https://some-website.com/my-social-media-url" size="30" />
      </div>
    </div>
  );
};

export default SocialMedia;
