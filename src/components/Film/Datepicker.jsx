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
import SwiperArrowSvg from "../../svg/SwiperArrowSvg";

// Detect current day and make list of days for sessions [hardcoded]
const day = "2022-05-24";
const availableDaysList = determineDaysBetween(day, 7);

export default function FilmDatepicker({ filmId, setFormats, setTimes }) {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [currentDay, setCurrentDay] = React.useState("");

  const onSwiperChange = (swiper) => {
    setCurrentDay(availableDaysList[swiper.activeIndex]);
  };

  React.useEffect(() => {
    if (!currentDay || !filmId) return;

    fetchDaySessions(filmId, currentDay).then((sessions) => {
      // Find only unique formats, make array
      const formats = sessions.reduce((acc, { format }, index) => {
        if (index === 0) return [...acc, format];

        return acc.some((item) => item.id === format.id)
          ? acc
          : [...acc, format];
      }, []);

      // Find times for every unique format
      const timeList = {};

      sessions.forEach((session, i) => {
        const { id, formatId, time, date, price } = session;

        timeList[formatId] = timeList[formatId]
          ? [
              ...timeList[formatId],
              {
                id: i,
                sessionId: id,
                name: time.slice(0, -3),
                date,
                price,
              },
            ]
          : [
              {
                id: i,
                sessionId: id,
                name: time.slice(0, -3),
                date,
                price,
              },
            ];
      });

      setFormats(formats);
      setTimes(timeList);
    });
  }, [currentDay, filmId]);

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
        {availableDaysList?.map((date, i) => (
          <SwiperSlide key={i}>
            <DatepickerCell>
              <Month className="month">{getMonthName(date)}</Month>
              <Number className="number">{getMonthDay(date)}</Number>
              <Day className="day">{getWeekDay(date)}</Day>
            </DatepickerCell>
          </SwiperSlide>
        ))}
        <SwiperArrow left ref={navigationPrevRef}>
          <SwiperArrowSvg left />
        </SwiperArrow>
        <SwiperArrow next ref={navigationNextRef}>
          <SwiperArrowSvg next />
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
      90deg,
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

  [data-theme="dark"] &:after,
  [data-theme="dark"] &:before {
    background: linear-gradient(
      90deg,
      rgba(25, 25, 31, 0.95) 0%,
      rgba(25, 25, 31, 0.15) 100%
    );
  }

  [data-theme="dark"] &:after {
    background: linear-gradient(
      270deg,
      rgba(25, 25, 31, 0.95) 0%,
      rgba(25, 25, 31, 0.15) 100%
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
  ${(props) => (props.left ? "left: 0;" : "right: 0;")};
  z-index: 3;
  transform: translateY(-50%);
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;
