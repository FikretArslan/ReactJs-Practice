import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
} from "reactstrap";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  /* 
  Calisma prensibi, kendisine verecegimiz iki parametreye dayaniyor.
  1-callback function, dependency array
   Bunlardan ilki, gerceklestirmesini istedigimiz islemleri 
   iceren fonksiyon, ikincisi ise soz konusu fonksiyonun hangi 
   durumlarda calisip hangi durumlarda calismayacagini belirtebilecegimiz
    bir array degeri; 
  cogu zaman alt component’lara gectigimiz props’lar. */

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="d-flex flex-wrap mt-5 gap-5">
      {posts.map((post) => {
        return (
          <Card
            key={post.id}
            className="my-2"
            style={{
              width: "18rem",
            }}
          >
            <CardHeader>{post.id}</CardHeader>
            <CardBody>
              <CardTitle tag="h5">{post.title}</CardTitle>
              <CardText>{post.body}</CardText>
            </CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
