import ArtDetail from "../../components/arts/ArtDetail";
import { MongoClient, ObjectId } from "mongodb";

function PhotographDetails(props) {
  const artsData = props.artsData;
  console.log(artsData, "artData");
  return (
    <ArtDetail
      url={artsData.url}
      photographer={artsData.photographer}
      description={artsData.description}
      title={artsData.title}
    ></ArtDetail>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://iamnehasinghatwork:Z2K4MuoKXCQlHnL6@cluster0.v4nqere.mongodb.net/art-gallery?retryWrites=true&w=majority"
  );

  const db = client.db();
  const artsCollection = db.collection("arts");
  const result = await artsCollection.find({}, { _id:1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: result.map((artObject) => ({
      params: { artGalleryId: artObject._id.toString() },
    })),
  };
  // return {
  //   fallback: false,
  //   paths: [
  //     {
  //       params: {
  //         artGalleryId: "15885532",
  //       },
  //     },
  //     {
  //       params: {
  //         artGalleryId: "15885539",
  //       },
  //     },
  //   ],
  // };
}

// this function is pregenerated during the build up process but this is the dynamic path how will react pregenerate all the
// files
export async function getStaticProps(context) {
  const id = context.params.artGalleryId;
  const client = await MongoClient.connect(
    "mongodb+srv://iamnehasinghatwork:Z2K4MuoKXCQlHnL6@cluster0.v4nqere.mongodb.net/art-gallery?retryWrites=true&w=majority"
  );

  const db = client.db();
  const artsCollection = db.collection("arts");
  const result = await artsCollection.findOne({ _id: new ObjectId(id) });

  // fetch data for Single Art;
  return {
    props: {
      artsData: {
        url: result.url,
        description: result.description,
        title: result.title,
        id: result._id.toString(),
      },
    },
  };
}

export default PhotographDetails;
