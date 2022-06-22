import "./VideoCarousel.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";

const VideoCarousel = () => {

  const vp = [
    {
      id:1,
      src:
        "https://media.qa.begenuin.com/recruitment/videos/25f931c5-ea24-4f3c-a5ea-4e6b241858f2_1610788214627.mp4",
      light:
        "https://media.qa.begenuin.com/recruitment/thumbnails/25f931c5-ea24-4f3c-a5ea-4e6b241858f2_1610788214627.jpg",
    },
    {
      id:2,
      src:
        "https://media.qa.begenuin.com/recruitment/videos/285c9ffa-4e7b-4439-873a-e5999c3ec93d_1610372078645.mp4",
      light:
        "https://media.qa.begenuin.com/recruitment/thumbnails/285c9ffa-4e7b-4439-873a-e5999c3ec93d_1610372078645.jpg",
    },
    {
      id:3,
      src:
        "https://media.qa.begenuin.com/recruitment/videos/31b43cba-41cc-45eb-9812-77bf03d2d83b_1610438210534.mp4",
      light:
        "https://media.qa.begenuin.com/recruitment/thumbnails/31b43cba-41cc-45eb-9812-77bf03d2d83b_1610438210534.jpg",
    },
    {
      id:4,
      src:
        "https://media.qa.begenuin.com/recruitment/videos/31b43cba-41cc-45eb-9812-77bf03d2d83b_1610438273102.mp4",
      light:
        "https://media.qa.begenuin.com/recruitment/thumbnails/31b43cba-41cc-45eb-9812-77bf03d2d83b_1610438273102.jpg",
    },
    {
      id:5,
      src:
        "https://media.qa.begenuin.com/recruitment/videos/36a0dd2f-4c8e-48aa-b322-df9e287d0601_1607954734556.mp4",
      light:
        "https://media.qa.begenuin.com/recruitment/thumbnails/36a0dd2f-4c8e-48aa-b322-df9e287d0601_1607954734556.jpg",
    },
    {
      id:6,
      src:
        "https://media.qa.begenuin.com/recruitment/videos/4b94a285-8f46-43fa-bd41-d87885e8e9e8_1610695275794.mp4",
      light:
        "https://media.qa.begenuin.com/recruitment/thumbnails/4b94a285-8f46-43fa-bd41-d87885e8e9e8_1610695275794.jpg",
    },
    {
      id:7,
      src:
        "https://media.qa.begenuin.com/recruitment/videos/6511cd16-8289-4d9a-a9c1-f4b0c42bca0b_1610371833762.mp4",
      light:
        "https://media.qa.begenuin.com/recruitment/thumbnails/6511cd16-8289-4d9a-a9c1-f4b0c42bca0b_1610371833762.jpg",
    },
    {
      id:8,
      src:
        "https://media.qa.begenuin.com/recruitment/videos/6cc380af-7297-4a2c-8db7-3690bd9e3ace_1610950183369.mp4",
      light:
        "https://media.qa.begenuin.com/recruitment/thumbnails/6cc380af-7297-4a2c-8db7-3690bd9e3ace_1610950183369.jpg",
    },
    {
      id:9,
      src:
        "https://media.qa.begenuin.com/recruitment/videos/1aa23a4d-6387-4fbc-8767-2c142cd0aa96_1610091292900.mp4",
      light:
        "https://media.qa.begenuin.com/recruitment/thumbnails/1aa23a4d-6387-4fbc-8767-2c142cd0aa96_1610091292900.jpg",
    },
    {
      id:10,
      src:
        "https://media.qa.begenuin.com/recruitment/videos/978d414b-d461-489b-8468-420a0b26c9d6_1610370671033.mp4",
      light:
        "https://media.qa.begenuin.com/recruitment/thumbnails/978d414b-d461-489b-8468-420a0b26c9d6_1610370671033.jpg",
    },
  ];


  return (
    <div className="App">
      <Carousel>
        {vp.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={true}
              />
              <Carousel.Caption>
                <h3>{videoObj.title}</h3>
                <p>{videoObj.credit}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
