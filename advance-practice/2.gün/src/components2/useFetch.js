import React, { useEffect, useState } from "react";
import paginate from "./util";
import axios from "axios";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const resp = await axios(url);
    console.log(resp);
    setData(paginate(resp.data));
    console.log(resp.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, data };
};
