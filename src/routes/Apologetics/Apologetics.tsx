import { useState } from 'react';
import { Greeter } from '../../components/Greeter';
import { LearnMore } from '../../components/LearnMore';
import { Nav } from '../../components/Nav';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { menu } from '../../enums/menu';
import { CheckToken } from '../../funtions/CheckToken';
import { useAuth } from '../../context/AuthContext';

export const Apologetics = (): JSX.Element => {
  const { user } = useAuth();
  CheckToken(user);

  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useQuery(['post'], () => {
    return axios
      .get(`http://localhost:8800/api/posts?category=${menu.apologetics}`)
      .then((res) => {
        setPosts(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <Greeter />
      <Nav />
      <p className="mx-6 mt-6 text-lg">Contents</p>

      <div className="mt-3">
        {posts?.map((post: any): JSX.Element => {
          return (
            <button
              className="block w-full my-1"
              onClick={() => {
                navigate(`/apologetics/article/${post.postId}`);
              }}
            >
              <div className="rounded-full bg-black text-white mx-3 pl-5 pr-2 text-left">
                <div className="grid grid-cols-6">
                  <div className="col-span-5 my-2 self-center">
                    <p className="text-base">{post.title}</p>
                  </div>

                  <div className="justify-self-end my-2">
                    <svg viewBox="0 0 32 32" className="w-9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        {' '}
                        <title>arrow-right-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs>{' '}
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          {' '}
                          <g id="Icon-Set-Filled" transform="translate(-310.000000, -1089.000000)" fill="#ededed">
                            {' '}
                            <path
                              d="M332.535,1105.88 L326.879,1111.54 C326.488,1111.93 325.855,1111.93 325.465,1111.54 C325.074,1111.15 325.074,1110.51 325.465,1110.12 L329.586,1106 L319,1106 C318.447,1106 318,1105.55 318,1105 C318,1104.45 318.447,1104 319,1104 L329.586,1104 L325.465,1099.88 C325.074,1099.49 325.074,1098.86 325.465,1098.46 C325.855,1098.07 326.488,1098.07 326.879,1098.46 L332.535,1104.12 C332.775,1104.36 332.85,1104.69 332.795,1105 C332.85,1105.31 332.775,1105.64 332.535,1105.88 L332.535,1105.88 Z M326,1089 C317.163,1089 310,1096.16 310,1105 C310,1113.84 317.163,1121 326,1121 C334.837,1121 342,1113.84 342,1105 C342,1096.16 334.837,1089 326,1089 L326,1089 Z"
                              id="arrow-right-circle"
                            >
                              {' '}
                            </path>{' '}
                          </g>{' '}
                        </g>{' '}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <LearnMore />
    </div>
  );
};
