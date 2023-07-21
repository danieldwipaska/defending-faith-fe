import axios from 'axios';
import { useState } from 'react';

import { parseCreatedAtTime } from '../../funtions/parseDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthContext';

export const Comment = (props: any): JSX.Element => {
  const { user } = useAuth();
  const { comments, postId, refetchComment } = props;
  const [comment, setComment] = useState('');
  // const [commentIdDelete, setCommentIdDelete] = useState('')

  const readComment = (event: any) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    axios
      .post(
        'http://localhost:8800/api/comments',
        {
          postId,
          comment,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`,
          },
        }
      )
      .then((res) => {
        refetchComment();
        setComment('');
      })
      .catch((err) => {
        return console.log(err);
      });
  };

  const handleDelete = (commentId: string) => {
    const isDelete = window.confirm('Are you sure to delete this comment?');
    if (!isDelete) return;

    axios
      .delete(`http://localhost:8800/api/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
      })
      .then((res) => {
        refetchComment();
      })
      .catch((err) => {
        return console.log(err);
      });
  };

  return (
    <div>
      <p className="mx-7 lg:mx-10 my-5 text-sm font-medium text-gray-600">{comments?.length} Comment(s)</p>
      <div className="grid grid-cols-6 mx-7 lg:mx-10">
        <div className="col-span-5 lg:col-span-2">
          <input required type="text" placeholder="Type your comment" className="px-3 py-2 w-full text-sm border-2 border-gray-400 rounded-lg" onChange={readComment} value={comment} />
        </div>
        <div className="mx-4">
          <button onClick={handleSubmit}>
            <svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M14 16.5974L21.0072 13.4725C22.3309 12.8822 22.3309 11.1178 21.0072 10.5275L4.49746 3.16496C3.00163 2.49789 1.45007 3.97914 2.19099 5.36689L5.34302 11.2706C5.58818 11.7298 5.58817 12.2702 5.34302 12.7294L2.19099 18.6331C1.45006 20.0209 3.00163 21.5021 4.49746 20.835L9.24873 18.7162"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{' '}
              </g>
            </svg>
          </button>
        </div>
      </div>
      {comments?.map((comment: any): JSX.Element => {
        return (
          <div>
            <p className="mx-8 text-sm text-slate-600 mt-5 mb-2">{comment.username}</p>
            <div className="flex">
              <p className="inline mx-16 text-sm text-gray-600">{comment.comment}</p>
              {user?.username === comment.username ? (
                <button
                  onClick={() => {
                    handleDelete(comment.commentId);
                  }}
                >
                  <FontAwesomeIcon icon={faClose} style={{ color: '#000000' }} />
                </button>
              ) : null}
            </div>

            <p className="mx-16 text-xs text-gray-400">{parseCreatedAtTime(comment.createdAt)}</p>
          </div>
        );
      })}
    </div>
  );
};
