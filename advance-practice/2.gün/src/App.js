import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import Follower from "./components2/Follower";

import { useFetch } from "./components2/useFetch";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const oncekiSayfa = () => {
    setPage((tiklanan) => {
      let geri = tiklanan - 1;
      if (geri < 0) {
        geri = data.length - 1;
      }
      return geri;
    });
  };

  const sonrakiSayfa = () => {
    setPage((tiklanan) => {
      let ileri = tiklanan + 1;
      if (ileri > data.length - 1) {
        ileri = 0;
      }
      return ileri;
    });
  };
  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <div className="container">
      <h1 className="text-center m-5">
        {loading ? "yükleniyor" : "FOLLOWERS"}
      </h1>
      <div className="container d-flex flex-wrap gap-5">
        {followers.map((follower) => {
          return <Follower key={follower.id} {...follower} />;
        })}
      </div>

      {!loading && (
        <div className="d-flex justify-content-center gap-3   m-5">
          <Button onClick={oncekiSayfa}>önceki</Button>

          {data.map((item, index) => {
            return (
              <Button key={index} onClick={() => handlePage(index)}>
                {index + 1}
              </Button>
            );
          })}

          <Button onClick={sonrakiSayfa}>sonraki</Button>
        </div>
      )}
    </div>
  );
}

export default App;
