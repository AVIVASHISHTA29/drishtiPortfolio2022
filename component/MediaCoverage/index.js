import Image from "next/image";
import styles from "./styles.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import media from "./media.json";
import Card from "./Card";

function MediaCoverage() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className={styles.container} id="media">
      <h1
        style={{
          fontSize: "4rem",
          textAlign: "center",
          fontWeight: "lighter",
          marginTop: 20,
          letterSpacing: "2px",
        }}
      >
        Media Coverage
      </h1>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
      >
        {media.map((url, index) => (
          <Card key={index} url={url} />
        ))}
      </Carousel>
    </div>
  );
}

export default MediaCoverage;
