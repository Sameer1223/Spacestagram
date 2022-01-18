import React, { Component, useState, useEffect } from 'react';
import { MediaCard } from '@shopify/polaris';
import './styles.css';
import './Main.css';

function Main() {
    const postsLimit = 5;

    const [items, setItems] = useState([]);
    const [likesCount, setLikesCount] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    const [liked, setLiked] = useState([]);

    useEffect(() => {
        document.body.style.backgroundColor = "#fafafa";
        fetch("https://api.nasa.gov/planetary/apod?api_key=pk00Sd8ZOdFNUNVrgaTXB0se6kHJcGxlJjJfrBhM&count=" + postsLimit)
        .then(res => res.json())
        .then((json) => {
            setItems(json);
            setDataIsLoaded(true);
            setLikesCount(new Array(postsLimit).fill(0));
            setLiked(new Array(postsLimit).fill(false))
        })
        .catch(err => {
            console.log(err);
        });
    }, [])

    const likeImage = (index) => {
        liked[index] = !liked[index];
        if (liked[index]){
            likesCount[index] += 1;
        } else {
            likesCount[index] -= 1;
        }
        console.log(liked, likesCount);
    }

    return (
        <div className="card-container">
            {items.map((item, i) => (
                <div className="card" key={i}>
                    <MediaCard
                        title={item.title}
                        primaryAction={{
                            content: liked[i]? 'Unlike' : 'Like',
                            onAction: () => {
                                likeImage(i);
                            },
                        }}
                        description={item.explanation.split(" digg_url =")[0] }
                        popoverActions={[{content: 'Share', onAction: () => {}}]}
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
                    <p className="likes">{likesCount[i]} Likes</p>
                </div>
            ))}
            <div className="buttonDiv">
                <button onClick={() => {}} className="loadMore">Load more</button>
            </div>
        </div>
    );
}

export default Main;

/*
1. Image Cards [DONE]
2. Like Button
3. Load More
4. Description? Read more
5. Header/Footer
6. Share function popup
7. Share function page and request
8. Make it look nice
*/

/*
<MediaCard
    title="Getting Started"
    primaryAction={{
        content: 'Learn about getting started',
        onAction: () => {},
    }}
    description="Discover how Shopify can power up your entrepreneurial journey."
    popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
    >
        <img
            alt=""
            width="100%"
            height="100%"
            style={{
                objectFit: 'cover',
                objectPosition: 'center',
            }}
            src={items.hdurl} />
</MediaCard>
*/