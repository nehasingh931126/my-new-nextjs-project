import classes from './ArtDetail.module.css';

function ArtDetail(props) {
    return (<section className={classes.details}>
        <img src={props.url} alt="Roni Barch<"></img>
        <h3>{props.photographer}</h3>
        <h3>{props.likes}</h3>
        <p>{props.description}</p>
    </section>)
}

export default ArtDetail;