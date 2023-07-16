import { Editor } from '@tinymce/tinymce-react';
import { Greeter } from '../../components/Greeter';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CheckToken } from '../../funtions/CheckToken';
import { useAuth } from '../../context/AuthContext';

export const AddPost = (): JSX.Element => {
  const { user } = useAuth();
  CheckToken(user);

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const readTitle = (event: any) => {
    setTitle(event.target.value);
  };
  const readSummary = (event: any) => {
    setSummary(event.target.value);
  };
  const readContent = (event: any) => {
    setContent(event.target.getContent());
  };
  const readCategory = (event: any) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    setUsername(`${user.username}`);
  }, []);

  const handleSubmit = () => {
    if (!content) return alert('Content should not be empty.');

    const formData = new FormData();

    formData.append('title', title);
    formData.append('summary', summary);
    formData.append('categories', category);
    formData.append('content', content);
    formData.append('username', username);

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        'content-type': 'multipart/form-data',
      },
    };

    axios
      .post('http://localhost:8800/api/posts', formData, config)
      .then(function (response) {
        navigate('/dashboard');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div className="grid grid-cols-6 py-3 px-3 bg-gray-200">
          <div>
            <button
              onClick={() => {
                navigate('/dashboard');
              }}
            >
              <svg viewBox="0 -2 32 32" version="1.1" className="w-8" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <title>arrow-left</title> <desc>Created with Sketch Beta.</desc> <defs> </defs>{' '}
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    {' '}
                    <g id="Icon-Set" transform="translate(-412.000000, -933.000000)" fill="#000000">
                      {' '}
                      <path
                        d="M438,957 C438,958.104 437.104,959 436,959 L416,959 C414.896,959 414,958.104 414,957 L414,937 C414,935.896 414.896,935 416,935 L436,935 C437.104,935 438,935.896 438,937 L438,940 L440,940 L440,937 C440,934.791 438.209,933 436,933 L416,933 C413.791,933 412,934.791 412,937 L412,957 C412,959.209 413.791,961 416,961 L436,961 C438.209,961 440,959.209 440,957 L440,954 L438,954 L438,957 L438,957 Z M443,946 L421.414,946 L426.657,940.757 C427.048,940.367 427.048,939.733 426.657,939.343 C426.267,938.952 425.633,938.952 425.242,939.343 L418.343,946.242 C418.135,946.451 418.046,946.728 418.06,947 C418.046,947.272 418.135,947.549 418.343,947.758 L425.242,954.657 C425.633,955.048 426.267,955.048 426.657,954.657 C427.048,954.267 427.048,953.633 426.657,953.242 L421.414,948 L443,948 C443.553,948 444,947.553 444,947 C444,946.448 443.553,946 443,946 L443,946 Z"
                        id="arrow-left"
                      >
                        {' '}
                      </path>{' '}
                    </g>{' '}
                  </g>{' '}
                </g>
              </svg>
            </button>
          </div>
          <div className="col-span-4 self-center">
            <p className="text-base text-center">Post</p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="my-2">
        <p className="mx-4 text-base">Title</p>

        <textarea required className="mx-4 mt-2 w-11/12 h-28 py-2 px-3 border border-black rounded-sm" placeholder="Title..." onChange={readTitle} />
      </div>
      <div className="my-2">
        <p className="mx-4 text-base">Summary</p>

        <textarea required className="mx-4 mt-2 w-11/12 h-44 py-2 px-3 border border-black rounded-sm" placeholder="Summary..." onChange={readSummary} />
      </div>
      <div className="my-2">
        <p className="mx-4 text-base">Category</p>

        <input required type="text" className="mx-4 mt-2 w-11/12 py-2 px-3 border border-black rounded-sm" placeholder="Category..." onChange={readCategory} />
      </div>
      <div className="my-2">
        <p className="mx-4 text-base">Content</p>
        <div className="mx-4 mt-2">
          <Editor
            // apiKey="y7gnmtbsaxnjbgh3405ioqbdm24eit5f0ovek49w8yvq5r9q"
            initialValue=""
            init={{
              branding: false,
              height: 400,
              menubar: true,
              plugins:
                'print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern',
              toolbar: 'formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat',
              image_advtab: true,
              skin: 'oxide-dark',
              content_css: 'dark',
            }}
            onChange={readContent}
          />
        </div>
      </div>
      <div className="my-7 text-center">
        <button onClick={handleSubmit} className="border bg-slate-400 py-3 px-7 rounded-full">
          Submit
        </button>
      </div>
    </div>
  );
};
