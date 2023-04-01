import NewArtForm from '../../components/arts/NewArtForm';
function NewArt () {
    function onAddArtHandler(artObject) {
        console.log(artObject);
    }
    return (<NewArtForm onAddArt={onAddArtHandler}></NewArtForm>)
}


export default NewArt;