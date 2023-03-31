import Card from '../ui/Card';
import classes from './ArtItem.module.css';

function ArtItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.url}>
          <img src={props.url} alt={props.title} />
        </div>
        <div className={classes.description}>
          <h3>Title: {props.title}</h3>
          <h3>Author {props.photographer}</h3>
          <address>Likes {props.likes}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default ArtItem;
