import { useNavigate } from 'react-router-dom';
import { Greeter } from '../../components/Greeter';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { CheckToken } from '../../funtions/CheckToken';
import { useAuth } from '../../context/AuthContext';

export const Dashboard = (): JSX.Element => {
  const { user } = useAuth();
  CheckToken(user);

  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useQuery(['post'], () => {
    return axios
      .get('http://localhost:8800/api/posts')
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
      <div>
        <p className="mx-4 mb-1 mt-5 text-xl">
          <button
            onClick={() => {
              navigate('/dashboard/add');
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>{' '}
                <path
                  d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{' '}
              </g>
            </svg>
          </button>
        </p>
        <p className="mx-4 mb-3 text-xl">Posts</p>

        {posts?.map((post: any): JSX.Element => {
          return (
            <button
              className="block w-full my-1"
              onClick={() => {
                navigate(`/dashboard/article/${post.postId}`);
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
    </div>
  );
};
