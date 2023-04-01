import { useRouter } from "next/router";
import ArtDetail from "../../components/arts/ArtDetail";
function PhotographDetails(props) {
  const artsData = props.artsData;
  return (
    <ArtDetail
      url={artsData.url}
      photographer={artsData.photographer}
      description={artsData.description}
    ></ArtDetail>
  );
}

export async function getStaticPaths() {
    return {
      fallback: false,
      paths: [
        {
          params: {
            artGalleryId: "15885532",
          },
        },
        {
          params: {
            artGalleryId: "15885539",
          },
        },
      ],
    };
}


// this function is pregenerated during the build up process but this is the dynamic path how will react pregenerate all the
// files
export async function getStaticProps(context) {
   const id = context.params.artGalleryId;
   console.log(id);
  // fetch data for Single Art;
  return {
    props: {
      artsData: {
        id: id,
        url: "https://images.pexels.com/photos/15955945/pexels-photo-15955945.jpeg?auto=compress&cs=tinysrgb&h=350",
        avg_color: "#A49880",
        photographer: "Eugenia Remark",
        title: "Topic",
      },
    },
  };
}

export default PhotographDetails;
