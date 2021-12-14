import Prismic from "@prismicio/client";

export const CreatePrismicClient = (req?: unknown) => {
  const prismic = Prismic.client("https://devmarlonblog.prismic.io/api/v2", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
  });

  return prismic;
};
