import "./VideoCarousel.css";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const VideoCarousel = () => {
  const [vAry, setvAry] = useState([]);
  const [count, setcount] = useState(0);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(`/recruitment/${page}.json`)
      .then((res) => {
        setvAry(res.data);
        setcount(0)
      })
      .catch((e) => console.log(e));
  }, [page]);

   console.log(vAry);

  return (
    <div className="App">
      <Carousel
        activeIndex={count}
        onClick={() => {
          if (count >= vAry.length - 1) {
            setcount(0);
            if (page === 1) {
              setPage(2);
            } else {
              setPage(1);
            }
          } else {
            setcount(count + 1);
          }
        }}
      >
        {vAry.map((videoObj) => {
          console.log(count);
          return (
            <Carousel.Item>
              <ReactPlayer
                url={videoObj.video_url}
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
