import { parseCreatedAt } from '../../funtions/parseDate';

export const Title = (props: any): JSX.Element => {
  const { post } = props;

  return (
    <div>
      <p className="text-xl font-medium mx-3 leading-7 my-2">{post?.title}</p>
      <p className="text-xs mx-3 my-3 text-gray-500">Daniel Kamasi - {parseCreatedAt(post?.createdAt)}</p>
    </div>
  );
};
