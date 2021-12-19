import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
// import 'swiper/css/navigation';
// import 'swiper/components/navigation/navigation.min.css';

export default function FilmDatepicker() {
  return (
    <Datapicker>
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        centeredSlides={true}
        initialSlide={2}
        modules={[Navigation]}
        navigation
        style={{ width: '500px' }}>
        <SwiperSlide>
          <DatepickerCell>
            <Month className="month">Дек</Month>
            <Number className="number">17</Number>
            <Day className="day">Пт</Day>
          </DatepickerCell>
        </SwiperSlide>
        <SwiperSlide>
          <DatepickerCell>
            <Month className="month">Дек</Month>
            <Number className="number">18</Number>
            <Day className="day">Сб</Day>
          </DatepickerCell>
        </SwiperSlide>
        <SwiperSlide>
          <DatepickerCell active>
            <Month className="month">Дек</Month>
            <Number className="number">19</Number>
            <Day className="day">Сегодня</Day>
          </DatepickerCell>
        </SwiperSlide>
        <SwiperSlide>
          <DatepickerCell>
            <Month className="month">Дек</Month>
            <Number className="number">20</Number>
            <Day className="day">Пн</Day>
          </DatepickerCell>
        </SwiperSlide>
        <SwiperSlide>
          <DatepickerCell>
            <Month className="month">Дек</Month>
            <Number className="number">21</Number>
            <Day className="day">Вт</Day>
          </DatepickerCell>
        </SwiperSlide>
        <SwiperSlide>
          <DatepickerCell>
            <Month className="month">Дек</Month>
            <Number className="number">22</Number>
            <Day className="day">Ср</Day>
          </DatepickerCell>
        </SwiperSlide>
        <SwiperSlide>
          <DatepickerCell>
            <Month className="month">Дек</Month>
            <Number className="number">23</Number>
            <Day className="day">Чт</Day>
          </DatepickerCell>
        </SwiperSlide>
      </Swiper>
      {/* <DatepickerCell>
        <Month className="month">Дек</Month>
        <Number className="number">17</Number>
        <Day className="day">Пт</Day>
      </DatepickerCell>

      <DatepickerCell>
        <Month className="month">Дек</Month>
        <Number className="number">18</Number>
        <Day className="day">Сб</Day>
      </DatepickerCell>

      <DatepickerCell active>
        <Month className="month">Дек</Month>
        <Number className="number">19</Number>
        <Day className="day">Сегодня</Day>
      </DatepickerCell>

      <DatepickerCell>
        <Month className="month">Дек</Month>
        <Number className="number">20</Number>
        <Day className="day">Пн</Day>
      </DatepickerCell>

      <DatepickerCell>
        <Month className="month">Дек</Month>
        <Number className="number">21</Number>
        <Day className="day">Вт</Day>
      </DatepickerCell> */}
    </Datapicker>
  );
}

// Styled Components
const Datapicker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 210px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.15) 100%
    );
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
const DatepickerCell = styled.div`
  padding: 12px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.active ? 'var(--gray-2)' : 'var(--gray-0)')};
`;
const Month = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-4);
  line-height: 1;
`;
const Number = styled.div`
  padding: 8px;
  font-size: 24px;
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
