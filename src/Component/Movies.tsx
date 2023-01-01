import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import React from 'react';
import { Pagination } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getMovies } from '../api/movieApi';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pages = searchParams.get('page');
  console.log('pages', pages);

  const [page, setPage] = useState(pages ? pages : '1');

  console.log('page', page);
  const navigate = useNavigate();

  // fetch
  const { data, isLoading, isError, error } = useQuery(['Movies', page], () => getMovies(page), {
    keepPreviousData: true,
  });

  console.log('data', data?.data.data.movies);

  if (isLoading)
    return (
      <div key="uniqueKey">
        <Spinner animation="border" variant="danger" />
      </div>
    );

  if (isError) return <div>Error! {JSON.stringify(error)}</div>;

  // 페이지네이션 기능
  const onHandlePaginate = (e: React.ChangeEvent<unknown>, pageNumber: number) => {
    navigate(`/?page=${pageNumber}`);
    setPage(`${pageNumber}`);
  };

  return (
    <div className="container">
      <div className="row">
        {data?.data.data.movies.map((movie: any) => {
          return (
            <div
              key={movie.id}
              className="col-md-2"
              onClick={() => {
                navigate(`/detail/${movie.id}`);
              }}
            >
              <img src={movie.large_cover_image} alt="" width="100%" />
            </div>
          );
        })}
      </div>
      <Pagination count={Math.ceil(data?.data.data.movie_count / 30)} page={Number(page)} onChange={onHandlePaginate} shape="rounded" color="primary" />
    </div>
  );
};

export default Movies;
