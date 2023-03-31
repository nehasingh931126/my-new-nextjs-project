import Card from '../ui/Card';
import classes from './ArtItem.module.css';
import { useRouter } from 'next/router';
function ArtItem(props) {
  const router = useRouter();
  const submitHandler = ()=> {
    router.push(`/${props.id}`)
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.url}>
          <img src={props.url} alt={props.title} />
        </div>
        <div className={classes.description}>
          <h3>Title: {props.title}</h3>
          <h3>Photographer {props.photographer}</h3>
          <address>Likes {props.likes}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={submitHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default ArtItem;
