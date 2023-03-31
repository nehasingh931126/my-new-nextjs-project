import {useRouter} from 'next/router'
function DetailsPage() {
    const route = useRouter();
    const parameter =  route.query.newsId;
    console.log(parameter);

    // send the request to the backend Api
    // to fetch the news Item with newsId
    
    return <h1>The Details Page</h1>
}

export default DetailsPage;
