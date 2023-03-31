import ArtItem from './ArtItem';
import classes from './ArtList.module.css';

function ArtList(props) {
  return (
    <ul className={classes.list}>
      {props.arts.map((artObject) => (
        <ArtItem
          key={artObject.id}
          id={artObject.id}
          url={artObject.url}
          photographer={artObject.photographer}
          likes={artObject.likes}
          title={artObject.title}
          description={artObject.description}
        />
      ))}
    </ul>
  );
}

export default ArtList;
