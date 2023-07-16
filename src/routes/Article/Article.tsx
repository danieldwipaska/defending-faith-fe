import { useLocation, useParams } from 'react-router-dom';
import { Comment } from './Comment';
import { Content } from './Content';
import { Header } from './Header';
import { Title } from './Title';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { menu } from '../../enums/menu';
import { Copyright } from '../../components/Copyright';
import { CheckToken } from '../../funtions/CheckToken';
import { useAuth } from '../../context/AuthContext';

export const Article = (): JSX.Element => {
  const { user } = useAuth();
  CheckToken(user);

  const { postId } = useParams();

  const location = useLocation();

  const HeaderMatch = (): JSX.Element => {
    if (location.pathname.indexOf(`/${menu.dashboard}`) === 0) return <Header from={menu.dashboard} />;
    if (location.pathname.indexOf(`/${menu.apologetics}`) === 0) return <Header from={menu.apologetics} />;
    if (location.pathname.indexOf(`/${menu.exegesis}`) === 0) return <Header from={menu.exegesis} />;
    return <Header />;
  };

  const { data: post } = useQuery(['post'], () => {
    return axios
      .get(`http://localhost:8800/api/posts/${postId}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return console.log(err);
      });
  });

  const { data: comments, refetch: refetchComment } = useQuery(['comment'], () => {
    return axios
      .get(`http://localhost:8800/api/comments?postid=${postId}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return console.log(err);
      });
  });

  return (
    <div>
      <HeaderMatch />
      <Title post={post} />
      <Content post={post} />
      <Comment postId={postId} comments={comments} refetchComment={refetchComment} />
      <Copyright />
    </div>
  );
};
