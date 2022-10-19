import Link from "next/link";
import Image from "next/image";
import apolloClient from "../../lib/apollo";
import styles from "../../styles/Home.module.css";
import { GetSeriesByIDQuery } from "../../lib/queries";
import { Asset } from "../api/graphl/types";

// fetch the props on the server side
export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  const { data, error, loading } = await apolloClient.query({
    query: GetSeriesByIDQuery,
    variables: { id: params.id },
  });
  return {
    props: {
      data,
      loading,
      error: error || null,
    },
  };
}

const Series = ({
  data,
  loading,
  error,
}: {
  data: any;
  loading: boolean;
  error: any;
}) => {
  if (loading) return <p>Loading ....</p>;

  if (error) return <p>Oops something went wrong {error.message}</p>;
  if (data) {
    return (
      <div className={styles.container}>
        <div
          className={styles.cardBig}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${data?.asset?.primaryImage.url.replace(
              /profile:nextgen-web-heroportrait-243x365/,
              "profile:nextgen-web-herolandscape-1920x"
            )})`,
            backgroundPositionX: "0rem",
            backgroundSize: "cover",
          }}
        >
          <div>
            <h2 className={styles.subTitle}>More About this Series</h2>
          </div>
          <p className={styles.detailTitle}>{data?.asset?.title}</p>
          <p className={styles.detailDescription}>{data?.asset?.description}</p>
          <Link href="/">
            <a className={styles.subTitle}>Back to Home</a>
          </Link>
        </div>
        <div>
          <ul className={styles.grid}>
            {data?.asset?.recommendedAssets.map((rec: Asset) => {
              return (
                <div className={styles.cardDetail} key={rec?.id}>
                  <Link href={`/series/${rec?.id}`} passHref>
                    <a>
                      <Image
                        style={{
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                          aspectRatio: "16/9",
                          padding: "4rem",
                        }}
                        width={"243px"}
                        height={"365px"}
                        src={rec.primaryImage.url}
                        alt="Primary Image of Series"
                      />
                      <p>{rec.title}</p>
                    </a>
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
};

export default Series;
