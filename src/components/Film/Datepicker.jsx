import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation } from "swiper";
import { fetchDaySessions } from "../../http/filmAPI";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import {
  determineDaysBetween,
  getMonthDay,
  getMonthName,
  getWeekDay,
} from "../../utils/dateConvertor";

export default function FilmDatepicker({ filmId, setFormats, setTimes }) {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [currentDay, setCurrentDay] = React.useState("");

  // TODO: Detect current day and make list of days for sessions
  const day = "2022-05-23";
  const arr = determineDaysBetween(day, 7);

  const onSwiperChange = (swiper) => {
    setCurrentDay(arr[swiper.activeIndex]);
  };

  React.useEffect(() => {
    fetchDaySessions(filmId, currentDay).then((data) => {
      const sessions = data;
      console.log(sessions);

      // Find only unique formats, make array
      const formats = sessions.reduce((acc, { format }, index) => {
        if (index === 0) return [...acc, format];

        return acc.some((item) => item.id === format.id)
          ? acc
          : [...acc, format];
      }, []);

      // Find times for every unique format
      const obj = {};

      const times = sessions.forEach((session) => {
        obj[session.formatId] = obj[session.formatId]
          ? [...obj[session.formatId], session.time.slice(0, -3)]
          : [session.time.slice(0, -3)];
      });

      console.log("times", obj);

      setFormats(formats);
      // setTimes();
    });
  }, [currentDay, filmId, setFormats, setTimes]);

  return (
    <Datapicker>
      <Swiper2
        spaceBetween={0}
        slidesPerView={5}
        centeredSlides={true}
        slideToClickedSlide={true}
        initialSlide={0}
        modules={[Navigation]}
        onSlideChange={onSwiperChange}
        onSwiper={onSwiperChange}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        style={{ width: "500px" }}
      >
        {arr?.map((date, i) => (
          <SwiperSlide key={i}>
            <DatepickerCell>
              <Month className="month">{getMonthName(date)}</Month>
              <Number className="number">{getMonthDay(date)}</Number>
              <Day className="day">{getWeekDay(date)}</Day>
            </DatepickerCell>
          </SwiperSlide>
        ))}
        <SwiperArrow left ref={navigationPrevRef}>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.70694 12.793L4.41394 8.5H13.9999V6.5H4.41394L8.70694 2.207L7.29294 0.792999L0.585938 7.5L7.29294 14.207L8.70694 12.793Z"
              fill="black"
            />
          </svg>
        </SwiperArrow>
        <SwiperArrow next ref={navigationNextRef}>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.29306 12.793L9.58606 8.5H6.29425e-05V6.5H9.58606L5.29306 2.207L6.70706 0.792999L13.4141 7.5L6.70706 14.207L5.29306 12.793Z"
              fill="black"
            />
          </svg>
        </SwiperArrow>
      </Swiper2>
    </Datapicker>
  );
}

// Styled Components
const Swiper2 = styled(Swiper)`
  position: relative;
  z-index: 1;

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 200px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.15) 100%
    );
    z-index: 2;
  }

  &:after {
    left: unset;
    right: 0;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.15) 100%
    );
  }
`;

const Datapicker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const DatepickerCell = styled.div`
  padding: 12px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background-color 0.15s ease;
  background-color: var(--gray-0);
  cursor: pointer;
  user-select: none;
`;

const Month = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-4);
  line-height: 1;
`;

const Number = styled.div`
  padding: 8px;
  font-size: 22px;
  font-weight: 700;
  color: var(--gray-8);
  line-height: 1;
`;

const Day = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-4);
  line-height: 1;
`;

const SwiperArrow = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: 0;" : "right: 0;")}
  z-index: 3;
  transform: translateY(-50%);
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;
