import {
  Reservation,
  allReservations,
} from "@application/constants/reservations.constants";
import { PageTitle } from "@common/titles.component";
import { useMediaQuery, useTheme } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ResultCard } from "./resultCard.component";

export const PhoneSwiper = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <PageTitle
        text="Mes réservations"
        scribbleColor={theme.palette.orange.light}
        scribbleVerticalOffset={isPhone ? "-54px" : undefined}
      />
      <Swiper
        slidesPerView={isTablet ? 2 : "auto"}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        style={{
          width: "100%",
        }}
      >
        {allReservations.map((r: Reservation) => {
          return (
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
              }}
              key={r.id}
            >
              <ResultCard reservation={r} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
