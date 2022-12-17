import React from "react";

import { Button, Htag, Paragraph, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
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
      <ul>
        {menu.map((item) => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
