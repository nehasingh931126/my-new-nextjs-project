import NewArtForm from '../../components/arts/NewArtForm';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Fragment } from 'react';
function NewArt () {
    const router = useRouter();
    async function onAddArtHandler(artObject) {
        const response = await fetch("/api/new-art", {
            method: 'POST',
            body: JSON.stringify(artObject),
            headers: {
                'Content-type': 'application/json'
            }

        });
        const data = await response.json();
        console.log(data);
        router.push('/')
    }
    return (
      <Fragment>
        <Head>
          <title>Add new Art to Gallery</title>
          <meta name="description" content="Upload your creative Art"></meta>
        </Head>
        <NewArtForm onAddArt={onAddArtHandler}></NewArtForm>
      </Fragment>
    );
}


export default NewArt;