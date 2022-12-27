import React from "react";
import useFetch from "../../customHooks/useFetch";
import useValue from "../../customHooks/useValue";

const Post = () => {
  const { data, loading } = useFetch();
  const [value, setValue] = useValue();

  if (loading) {
    return <>Loading...</>;
  }

  console.log(value, "value");

  return (
    <div>
      <input value={value} onChange={setValue} type="text" />
      <div>{data && data.title && <p>{data.title}</p>}</div>
    </div>
  );
};

export default Post;
