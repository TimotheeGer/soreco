import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { slickDot } from "../page-demo/script";
import Scrollspy from "react-scrollspy";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
import ServiceList from "../elements/service/ServiceList";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import Team from "../elements/Team";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import FooterTwo from "../component/footer/FooterTwo";
import Contact from "../elements/contact/ContactTwo";
import Helmet from "../component/common/Helmet";

import logoLight from "../assets/images/logo/logo-soreco-light.png";
import logoAllDark from "../assets/images/logo/logo-soreco.png";
import aboutImg from "../assets/images/about/sophie_gerberon.jpg";

const SlideList = [
  {
    textPosition: "text-center",
    category: "",
    title: "Solution de recouvrement",
    description:
      "Découvrez notre solution de recouvrement flexible et efficace, conçue pour s'adapter aux besoins spécifiques de chaque entreprise. Optimisez votre gestion des créances avec une technologie de pointe.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

const list = [
  {
    image: "image-1",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-2",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Getting tickets to the big show",
  },
];

class Construction extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }
  stickyHeader() {}
  render() {
    const PostList = BlogContent.slice(0, 5);

    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector(".header--fixed").classList.add("sticky");
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    const videoBackgroundStyle = {
      // border: "5px solid red",
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
    };

    const videoStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: -1,
    };

    const contentStyle = {
      position: "relative",
      zIndex: 1,
      color: "white",
      textAlign: "center",
      fontSize: "3rem",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 'bold',
      background: 'linear-gradient(90deg, #ADD8E6, #FFFFFF)', // Dégradé de bleu clair à blanc
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    };

    const logoStyle = {
      position: 'absolute',
      top: '20px',
      left: '20px',
      width: '150px', // Ajustez la taille selon vos besoins
      zIndex: 2,
    };

    return (
      <Fragment>
        <div style={videoBackgroundStyle}>
          <img src={logoLight} alt="Logo" style={logoStyle} />
          <video autoPlay loop muted style={videoStyle}>
            <source src="/mer_md.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div style={contentStyle}>Page en construction. Disponible bientôt.</div>
          <audio autoPlay loop volume="1">
            <source src="/whisky-and-night-view.mp3" type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </Fragment>
    );
  }
}

export default Construction;
