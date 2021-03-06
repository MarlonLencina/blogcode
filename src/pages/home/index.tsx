import Head from "next/head";
import { Header, Main, Posts, Post } from "./StyleHome";
import { Icon as Iconify } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GetStaticProps } from "next";
import { CreatePrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

type postProps = {
  title: string;
  slug: string;
  createdAt: string;
};

type postsProps = {
  posts: postProps[];
};

export default function Home({ posts }: postsProps) {
  return (
    <>
      <Head>
        <title>codeBlog | Devmarlon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <img src="/images/logo.svg" alt="" />
        <nav>
          <a href="https://github.com/MarlonLencina">
            <Iconify icon="akar-icons:github-fill" />
          </a>
          <a href="https://www.linkedin.com/in/devmarlonlencina/">
            <Iconify icon="akar-icons:linkedin-fill" />
          </a>
          <a href="https://twitter.com/devmarlontech">
            <Iconify icon="akar-icons:twitter-fill" />
          </a>
        </nav>
      </Header>
      <Main>
        <h1>
          &lt;code<span>blog</span>/&gt;
        </h1>
        <p>
          Meu nome é Marlon Lencina, tenho 17 anos e sou o autor do blog, aqui
          voce vai encontrar dicas, insights e bastante codigo{" "}
        </p>
        <div>
          Últimos posts
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: "1.5", repeat: Infinity }}
          >
            <Iconify icon="noto:backhand-index-pointing-down" />
          </motion.div>
        </div>
      </Main>
      <Posts>
        {posts.map((post) => {
          return (
            <Post key={post.slug}>
              <div>
                <div>
                  <h1>{post.title}</h1>
                  <div>
                    <p>{post.createdAt}</p>
                    <span>Devmarlon</span>
                  </div>
                </div>
                <Link href={`/post/${post.slug}`}>
                  <a href="">
                    &lt;Abrir
                    <br />
                    Post/&gt;
                  </a>
                </Link>
              </div>
            </Post>
          );
        })}
      </Posts>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = CreatePrismicClient();
  const res = await prismic.query(
    Prismic.Predicates.at("document.type", "post"),
    {
      fetch: [
        "post.title",
        "post.text",
        "post.image",
        "post.content",
        "post.contentdois",
      ],
      pageSize: 5,
    }
  );

  const posts = res.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      createdAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  // console.log(posts);

  return {
    props: {
      posts,
    },
  };
};
