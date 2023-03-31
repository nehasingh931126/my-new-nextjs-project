import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Arts</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Arts</Link>
          </li>
          <li>
            <Link href='/new-art'>Add New Art</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
