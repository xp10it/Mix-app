import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";
import Paragraph from "../components/Paragraph/Paragraph";
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";

const Home = (): JSX.Element => {
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
      <Tag color="red" size='medium'>t2</Tag>
      <Rating rating={3} />
    </>
  );
};

export default Home;
