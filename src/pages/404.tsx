import { GetStaticProps } from "next";

const PageNotFound = () => {
  return <h1>page not found.</h1>;
};

export default PageNotFound;

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: "/",
      permanent: true,
    },
  };
};