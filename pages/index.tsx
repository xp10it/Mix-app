import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';
import Paragraph from "../components/Paragraph/Paragraph";

const Home = (): JSX.Element => {
  return (
    <>
      <Htag tag='h1'>text</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta dignissimos distinctio doloribus explicabo fugiat in minus provident sint veniam?
      </Paragraph>
    </>
  );
};

export default Home;
