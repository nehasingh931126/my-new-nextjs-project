import { Fragment } from "react";
import Link from 'next/link';
function NewsPage() {
    return <Fragment>
        <ul>
            <li><Link href="/news/nextjs-is">Nextjs is a great framework</Link></li> 
            <li>Something Else</li>
        </ul>
    </Fragment>
}

export default NewsPage;
