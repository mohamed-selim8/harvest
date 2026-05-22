import "./test.css";
import { Shopping } from "../Catagories/Categ";
// unique id
import { v4 as uuidv4 } from "uuid";

// import swiper navigation
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// material icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
function Testimonial() {
  return (
    <section className="container my-4">
      <div className="row">
        <div className="col-12">
          <Shopping categ={"Testimonial"} />
        </div>

        {/* back & forward */}
        <div className="col-12 my-3 d-flex justify-content-end">
          <div>
            <span className="class-back">
              <ArrowBackIosIcon
                className=" p-1 m-1 back custom-prev"
                style={{ cursor: "pointer" }}
              />
            </span>
            <span className="class-forward ">
              <ArrowForwardIosIcon
                className=" p-1 m-1 forward custom-next"
                style={{ cursor: "pointer" }}
              />
            </span>
          </div>
        </div>

        <Swiper
          loop={true}
          breakpoints={{
            640: { spaceBetween: 20 },
            768: { spaceBetween: 20 },
            1024: { spaceBetween: 20 },
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map((e) => {
            return (
              <SwiperSlide key={e.id} className="card col-md-6 shadow rounded">
                <div className=" d-flex align-items-center p-3">
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      border: "2px dotted",
                      borderRadius: "50%",
                    }}
                    className="p-1 mx-3 border-warning"
                  >
                    <img
                      src={e.img}
                      alt=""
                      className="w-100 h-100"
                      style={{
                        borderRadius: "50%",
                        border: "2px solid orange",
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="text-warning">{e.name}</h2>
                    <p className="text-black-50">{e.profession}</p>
                    <span>
                      {Array.from({ length: e.rate }, (_, index) => (
                        <StarIcon className="text-warning" />
                      ))}
                    </span>
                  </div>
                </div>
                <p className="text-black-50">{e.para}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

let review = [
  {
    id: uuidv4(),
    name: "Ahmed Ali",
    profession: "Pscycologist",
    rate: 4,
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae omnis tenetur eaque eligendi repellat natus?",
    img: "imgs/customer2.jpg",
  },
  {
    id: uuidv4(),
    name: "Malik Amir",
    profession: "Designer",
    rate: 3,
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae omnis tenetur eaque eligendi repellat natus?",
    img: "imgs/customer4.jpg",
  },
  {
    id: uuidv4(),
    name: "Emad Khalid",
    profession: "Fitness Coach",
    rate: 3,
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae omnis tenetur eaque eligendi repellat natus?",
    img: "imgs/customer2.jpg",
  },
  {
    id: uuidv4(),
    name: "Nour Omar",
    profession: "UI/UX",
    rate: 2,
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae omnis tenetur eaque eligendi repellat natus?",
    img: "imgs/customer4.jpg",
  },
  {
    id: uuidv4(),
    name: "John Nabil ",
    profession: "Software Engineer",
    rate: 5,
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae omnis tenetur eaque eligendi repellat natus?",
    img: "imgs/customer2.jpg",
  },
];

export default Testimonial;
