import Prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown) {
  const apiEndpoint = process.env.PRISMIC_ENDPOINT;
  const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

  const prismic = Prismic.client(
    apiEndpoint,
    {
      req,
      accessToken
    }
  );

  return prismic;
}
