import ArtList from '../components/arts/ArtList';
import { useEffect, useState } from 'react';
const DUMMY_DATA = [
    {
        "id": 15955945,
        "url": "https://images.pexels.com/photos/15955945/pexels-photo-15955945.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#A49880",
        "photographer": "Eugenia Remark",
        "title": "Topic"
    },
    {
        "id": 15954328,
        "url": "https://images.pexels.com/photos/15954328/pexels-photo-15954328.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#A0A0A0",
        "photographer": "Artūras Kokorevas",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15954341,
        "url": "https://images.pexels.com/photos/15954341/pexels-photo-15954341.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#50584D",
        "photographer": "Artūras Kokorevas",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15948114,
        "url": "https://images.pexels.com/photos/15948114/pexels-photo-15948114.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#343434",
        "photographer": "Gülru Sude",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15940448,
        "url": "https://images.pexels.com/photos/15940448/pexels-photo-15940448.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#838489",
        "photographer": "Josh Hild",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15871758,
        "url": "https://images.pexels.com/photos/15871758/pexels-photo-15871758.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#3C3C3C",
        "photographer": "Miftah Rafli Hidayat",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15868534,
        "url": "https://images.pexels.com/photos/15868534/pexels-photo-15868534.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#929292",
        "photographer": "Kate Andreeshcheva",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15868535,
        "url": "https://images.pexels.com/photos/15868535/pexels-photo-15868535.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#B8AA9F",
        "photographer": "Kate Andreeshcheva",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15861292,
        "url": "https://images.pexels.com/photos/15861292/pexels-photo-15861292.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#717C78",
        "photographer": "Kelsey Wilkerson",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15860715,
        "url": "https://images.pexels.com/photos/15860715/pexels-photo-15860715.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#B7ACAA",
        "photographer": "Chris Hepworth",
        "title": "Topic",
        "description": ""
    },
    {
        "id": 15850463,
        "url": "https://images.pexels.com/photos/15850463/pexels-photo-15850463.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#89503D",
        "photographer": "Axel Sandoval",
        "title": "Topic",
        "description": ""
    },
    {
        "id": 15850737,
        "url": "https://images.pexels.com/photos/15850737/pexels-photo-15850737.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#926A5E",
        "photographer": "IMDAT AKGÜN",
        "title": "Topic",
        "description": ""
    },
    {
        "id": 15836000,
        "url": "https://images.pexels.com/photos/15836000/pexels-photo-15836000.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#533F26",
        "photographer": "Instantanés de Chrissie",
        "title": "Topic",
        "description": ""
    },
    {
        "id": 15836010,
        "url": "https://images.pexels.com/photos/15836010/pexels-photo-15836010.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#51493C",
        "photographer": "Instantanés de Chrissie",
        "title": "Topic",
        "description": ""
    },
    {
        "id": 15927957,
        "url": "https://images.pexels.com/photos/15927957/pexels-photo-15927957.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#848670",
        "photographer": "Darwis Alwan",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15926006,
        "url": "https://images.pexels.com/photos/15926006/pexels-photo-15926006.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#8B806E",
        "photographer": "Nati",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15912787,
        "url": "https://images.pexels.com/photos/15912787/pexels-photo-15912787.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#55504A",
        "photographer": "Ольга Солодилова",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15903178,
        "url": "https://images.pexels.com/photos/15903178/pexels-photo-15903178.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#7F8180",
        "photographer": "Alvaro Camacho",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15898922,
        "url": "https://images.pexels.com/photos/15898922/pexels-photo-15898922.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#645C51",
        "photographer": "Red-heart Li",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15896384,
        "url": "https://images.pexels.com/photos/15896384/pexels-photo-15896384.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#85868A",
        "photographer": "figen  kokol",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15885836,
        "url": "https://images.pexels.com/photos/15885836/pexels-photo-15885836.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#5F554C",
        "photographer": "Saliha  Sevim",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15885532,
        "url": "https://images.pexels.com/photos/15885532/pexels-photo-15885532.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#656462",
        "photographer": "Joaquin Carfagna",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15875908,
        "url": "https://images.pexels.com/photos/15875908/pexels-photo-15875908.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#563A2C",
        "photographer": "Kelsey Wilkerson",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 6103141,
        "url": "https://images.pexels.com/photos/6103141/pexels-photo-6103141.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#A79B95",
        "photographer": "Gautham Krishnan",
        "title": "Topic",
        "description": "",
        "likes": 1

    },
    {
        "id": 15878571,
        "url": "https://images.pexels.com/photos/15878571/pexels-photo-15878571.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#B2B1AF",
        "photographer": "Danik Prihodko",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15872062,
        "url": "https://images.pexels.com/photos/15872062/pexels-photo-15872062.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#453D30",
        "photographer": "Nati",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15868531,
        "url": "https://images.pexels.com/photos/15868531/pexels-photo-15868531.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#78868F",
        "photographer": "Kate Andreeshcheva",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15865829,
        "url": "https://images.pexels.com/photos/15865829/pexels-photo-15865829.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#E9E9E9",
        "photographer": "Sabina Kallari",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15865184,
        "url": "https://images.pexels.com/photos/15865184/pexels-photo-15865184.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#9AA295",
        "photographer": "Danik Prihodko",
        "title": "Topic",
        "description": "",
        "likes": 1
    },
    {
        "id": 15794810,
        "url": "https://images.pexels.com/photos/15794810/pexels-photo-15794810.jpeg?auto=compress&cs=tinysrgb&h=350",
        "avg_color": "#B5B8B1",
        "photographer": "Luana Freitas",
        "title": "Topic",
        "description": "",
        "likes": 1
    }
];

function ArtGallery(props) {
    // const [loadedArt, setArtList] = useState([]);
    // useEffect(()=> {
    //     setArtList(DUMMY_DATA);
    // }, []);

    return (<ArtList arts={props.arts}></ArtList>)
}
export async function getStaticProps() {
    // fetch data from the API
    return {
        props: {
            arts: DUMMY_DATA
        }
    }
}

export default ArtGallery;

