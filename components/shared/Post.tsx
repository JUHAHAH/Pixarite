interface Props {
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export default function Post({
  title,
  content,
  author,
  createdAt,
  updatedAt,
}: Props) {
  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
      <div>{author}</div>
      <div>{createdAt}</div>
      <div>{updatedAt}</div>
    </div>
  );
}
