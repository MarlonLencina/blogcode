import { Container, GoBack, Article } from "./StylesPost";
import { Icon } from "@iconify/react";
import { GetStaticProps, GetStaticPaths } from "next";
import { CreatePrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { RichText as ReactRichText } from "prismic-reactjs";
import Link from "next/link";

type post = {
  post: postProps;
};

type postProps = {
  slug: string;
  image: string;
  title: string;
  createdAt: string;
  contentFirst: any;
  contentSecond: any;
};

const Post = ({ post }: post) => {
  console.log(post);

  return (
    <>
      <Container>
        <Link href="/" passHref>
          <GoBack>
            <Icon icon="ant-design:arrow-left-outlined" />
            <p>Voltar para home</p>
          </GoBack>
        </Link>
        <Article>
          <h1>{post.title}</h1>
          <div>
            <p>Marlon Lencina</p>
            <time>{post.createdAt}</time>
          </div>
          <img src={post.image} alt="" />

          <ReactRichText render={post.contentFirst} />
          <ReactRichText render={post.contentSecond} />
        </Article>
      </Container>
    </>
  );
};

export default Post;

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const prismic = CreatePrismicClient();
  const slug = ctx.params.slug as string;
  const res = await prismic.getByUID("post", slug, {});
  console.log(res.data.content);

  const post = {
    slug: res.uid,
    image: res.data.image.url,
    title: RichText.asText(res.data.title),
    createdAt: new Date(res.last_publication_date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    // contentFirst: RichText.asText(res.data.content),
    // contentSecond: RichText.asText(res.data.content1),
    contentFirst: res.data.content,
    contentSecond: res.data.content1,
  };

  // console.log(JSON.stringify(res, null, 2));
  console.log(post);

  return {
    props: {
      post,
    },
  };
};
