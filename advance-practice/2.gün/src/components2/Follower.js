import React from "react";
import { Card, CardBody, CardLink, CardTitle } from "reactstrap";

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt={login} src={avatar_url} />
      <CardBody>
        <CardTitle tag="h5">{login}</CardTitle>
        <CardLink href={html_url}>Profili Görüntüle</CardLink>
      </CardBody>
    </Card>
  );
};

export default Follower;
