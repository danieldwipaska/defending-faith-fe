export const Content = (props: any): JSX.Element => {
  const { post } = props;

  return (
    <div>
      <p className="mx-10 mt-2 text-sm font-medium text-center text-gray-900">Ringkasan</p>
      <p className="mx-10 lg:mx-16 mt-3 mb-5 text-sm leading-4 font-serif text-gray-700">{post?.summary}</p>

      <p className="mx-3 lg:mx-10 mt-5 leading-5 text-sm font-serif">
        <div dangerouslySetInnerHTML={{ __html: post?.content }}></div>
      </p>
    </div>
  );
};
