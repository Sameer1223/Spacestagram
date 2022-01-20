import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { MediaCard } from '@shopify/polaris';
import '../Styles/styles.css';
import '../Pages/Main.js';

function Post() {
    const [item, setItem] = useState({});
    let { id } = useParams();

    useEffect(() => {
        document.body.style.backgroundColor = "#fafafa";
        fetch("https://api.nasa.gov/planetary/apod?api_key=pk00Sd8ZOdFNUNVrgaTXB0se6kHJcGxlJjJfrBhM&date=" + id)
        .then(res => res.json())
        .then((json) => {
            setItem(json);
        })
        .catch(err => {
            console.log(err);
        });
    }, [id])

    return (
        <div className="card-container">
            <div className="card">
                <MediaCard
                    title={item.title + " - " + item.date}
                    description={item.explanation}
                    portrait={true}
                    >
                        <img
                            alt={item.title}
                            width="100%"
                            height="100%"
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                            src={item.hdurl} />
                </MediaCard>
            </div>
        </div>
    )
}

export default Post;
