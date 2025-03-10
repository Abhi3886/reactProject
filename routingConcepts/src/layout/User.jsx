import React from "react";
import { useParams } from "react-router";

export default function User() {
  const { userid } = useParams();
  return (
    <div className=" w-full bg-gray-100 text-center">
      <h1> User page: {userid}</h1>
    </div>
  );
}
