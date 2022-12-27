import React from "react";
import useFetch from "../../customHooks/useFetch";
import useValue from "../../customHooks/useValue";
import useWindowDimensions from "../../customHooks/useWindowDimensions";

const Post = () => {
  const { data, loading } = useFetch();
  const [value, setValue] = useValue();
  const size = useWindowDimensions();

  if (loading) {
    return <>Loading...</>;
  }

  console.log(size, "size");

  return (
    <div>
      <input value={value} onChange={setValue} type="text" />
      <div>{data && data.title && <p>{data.title}</p>}</div>
    </div>
  );
};

export default Post;