import React from "react";
import useFetch from "../../customHooks/useFetch";

const Post = () => {
  const { data, loading } = useFetch();

  if (loading) {
    return <>Loading...</>;
  }

  console.log(data, "data");

  return <div>{data && data.title && <p>{data.title}</p>}</div>;
};

export default Post;
