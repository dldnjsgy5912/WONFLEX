import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import GradeIcon from '@mui/icons-material/Grade';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Detail = () => {
  const { id } = useParams();
  console.log('id', id);

  const [movieNmae, setMovieName] = useState<any>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getMovie = async () => {
    try {
      setMovieName([]);
      setError(null);
      setLoading(true);

      const {
        data: {
          data: { movie },
        },
      } = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
      setMovieName(movie);
      // console.log(movie.data.data.movies);
      console.log(movie);
      console.log(id);
    } catch (e) {
      // setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  if (error) return <div>에러</div>;
  if (loading)
    return (
      <div key="uniqueKey">
        <Spinner animation="border" variant="danger" />
      </div>
    );

  // if (!movieNmae) return setMovieName([]);

  return (
    <div className="container">
      <img src={movieNmae.background_image} alt="" className="bg" />
      <div className="bg-bk"></div>
      <div className="row">
        <div className="col-md-6">
          <img src={movieNmae.large_cover_image} alt="" width="100%" />
        </div>
        <div className="col-md-6">
          <h1>{movieNmae.title}</h1>
          <h4 className="mt-5">{movieNmae.description_full}</h4>
          {/* <Button variant="success">
            <a href={movieNmae.torrents[1].url}>다운로드</a>
          </Button> */}
          {/* <a href={movieNmae.torrents[0].url}>다운로드</a> */}
          <div key="uniqueKey">
            <h5 className="mt-3">
              <GradeIcon />: {movieNmae.rating}
            </h5>
            <h5 className="mt-3">
              <ThumbUpOffAltIcon />: {movieNmae.like_count}
            </h5>
            <h5 className="mt-3">
              <ArrowDownwardIcon />: {movieNmae.download_count}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
