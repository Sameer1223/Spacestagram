import React, { useState, useEffect } from 'react';
import { MediaCard } from '@shopify/polaris';
import '../Styles/styles.css';
import './Main.css';
import SharePopUp from '../Components/SharePopUp';

function Main() {
    const postsLimit = 5;

    const [items, setItems] = useState([]);
    const [likesCount, setLikesCount] = useState(new Array(postsLimit).fill(0));
    const [liked, setLiked] = useState(new Array(postsLimit).fill(false));

    const [buttonPopup, setButtonPopup] = useState(false);
    const [link, setLink] = useState("");

    useEffect(() => {
        document.body.style.backgroundColor = "#fafafa";
        fetch("https://api.nasa.gov/planetary/apod?api_key=pk00Sd8ZOdFNUNVrgaTXB0se6kHJcGxlJjJfrBhM&count=" + postsLimit)
        .then(res => res.json())
        .then((json) => {
            setItems(json);
        })
        .catch(err => {
            console.log(err);
        });
    }, [])

    
    const likeImage = (index) => {
        let newLiked = liked;
        newLiked[index] = !newLiked[index];

        let newCounts = likesCount;
        if (newLiked[index]){
            newCounts[index] += 1;
        } else {
            newCounts[index] -= 1;
        }
        setLiked([...newLiked]);
        setLikesCount([...newCounts]);
    }

    const fetchMore = () => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=pk00Sd8ZOdFNUNVrgaTXB0se6kHJcGxlJjJfrBhM&count=" + postsLimit)
        .then(res => res.json())
        .then((json) => {
            setItems(items.concat(json));
            setLikesCount(likesCount.concat(new Array(postsLimit).fill(0)));
            setLiked(liked.concat(new Array(postsLimit).fill(false)));
        })
        .catch(err => {
            console.log(err);
        });
    }

    const handleShare = (index) => {
        setLink(window.location.origin + '/post/' + items[index].date);
        setButtonPopup(true);
    }

    return (
        <div className="card-container">
            {items.map((item, i) => (
                <div className="card">
                    <MediaCard
                        title={item.title + " - " + item.date}
                        primaryAction={{
                            content: liked[i]? 'Unlike' : 'Like',
                            onAction: () => {
                                likeImage(i);
                            },
                        }}
                        description={item.explanation.split(" digg_url =")[0] }
                        popoverActions={[{content: 'Share', onAction: () => {handleShare(i)}}]}
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
            <SharePopUp url={link} trigger={buttonPopup} setTrigger={setButtonPopup}/>
            <div className="buttonDiv">
                <button onClick={() => {fetchMore()}} className="loadMore">Load more</button>
            </div>
        </div>
    );
}

export default Main;

/*
1. Image Cards [DONE]
2. Like Button
3. Load More
4. Header/Footer
5. Share function popup
6. Share function page and request
7. Make it look nice
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