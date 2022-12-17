import React from "react";

import { Button, Htag, Paragraph, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import {GetStaticProps} from "next";

function Home(): JSX.Element {
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

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find');

  return {
    props: {
      menu,
      firstCategory
    }
  };
};
