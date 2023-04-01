import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewArtForm.module.css';

function NewArtForm(props) {
  const titleInputRef = useRef();
  const urlInputRef = useRef();
  const likesInputRef = useRef();
  const descriptionInputRef = useRef();
  const photographerInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredUrl = urlInputRef.current.value;
    const enteredLikes = likesInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const artData = {
      title: enteredTitle,
      url: enteredUrl,
      likes: enteredLikes,
      description: enteredDescription,
    };

    props.onAddArt(artData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Art Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='url'>Art Url</label>
          <input type='url' required id='url' ref={urlInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='photographer'>Art Photographer</label>
          <input type='text' required id='photographer' ref={photographerInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='likes'>Likes</label>
          <input type='text' required id='likes' ref={likesInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Art</button>
        </div>
      </form>
    </Card>
  );
}

export default NewArtForm;
