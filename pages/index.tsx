import React from "react";

import { Button, Htag, Paragraph, Tag, Rating } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">text</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Paragraph size="large">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        dicta dignissimos distinctio doloribus explicabo fugiat in minus
        provident sint veniam?sfdsf
      </Paragraph>
      <Tag color="red" size="medium">
        t2
      </Tag>
      <Rating rating={3} isEditable />
    </>
  );
}
