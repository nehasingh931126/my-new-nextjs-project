import NewArtForm from '../../components/arts/NewArtForm';
import { useRouter } from 'next/router';
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
    return (<NewArtForm onAddArt={onAddArtHandler}></NewArtForm>)
}


export default NewArt;