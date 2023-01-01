// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../api/movieApi';
import { Spinner } from 'react-bootstrap';

const PopularMovies = () => {
  const navigate = useNavigate();
  // fetch
  const { data, isLoading, isError, error } = useQuery(['PopularMovies'], getPopularMovies);

  if (isLoading)
    return (
      <div key="uniqueKey">
        <Spinner animation="border" variant="danger" />
      </div>
    );

  if (isError) return <div>Error! {JSON.stringify(error)}</div>;

  return (
    <div className="container">
      <h4>Popular Movies</h4>
      <div className="row">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {data?.data.data.movies.map((movie: any) => {
            return (
              <SwiperSlide>
                <div
                  key={movie.id}
                  className="col-md-12"
                  onClick={() => {
                    navigate(`/detail/${movie.id}`);
                  }}
                >
                  <img src={movie.large_cover_image} alt="" width="100%" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularMovies;
