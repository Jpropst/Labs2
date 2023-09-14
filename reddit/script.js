document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('posts-container');
    const subredditInput = document.getElementById('subreddit-input');
    const fetchButton = document.getElementById('fetch-button');

    function fetchRedditPosts(subreddit) {
        fetch(`https://www.reddit.com/r/${subreddit}/.json`)
            .then((response) => response.json())
            .then((data) => {
                postsContainer.innerHTML = '';

                data.data.children.slice(0, 10).forEach((post) => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('post');

                    const postTitle = document.createElement('div');
                    postTitle.classList.add('post-title');
                    postTitle.textContent = post.data.title;

                    if (post.data.media && post.data.media.reddit_video) {
                        const videoElement = document.createElement('video');
                        videoElement.src = post.data.media.reddit_video.fallback_url;
                        videoElement.controls = true;
                        videoElement.width = `300`;
                        videoElement.height = `200`;
                        postElement.appendChild(videoElement);
                    } else if (post.data.url && post.data.url.endsWith('.jpg')) {
                        const postImage = document.createElement('img');
                        postImage.src = post.data.url;
                        postImage.alt = 'Post Image';
                        postImage.width = `300`;
                        postImage.height = `200`;
                        postElement.appendChild(postImage);
                    } else if (post.data.thumbnail && post.data.thumbnail !== 'self' && post.data.thumbnail !== 'default') {
                        const postImage = document.createElement('img');
                        postImage.src = post.data.thumbnail;
                        postImage.alt = 'Post Thumbnail';
                        postImage.width = `300`;
                        postImage.height = `200`;
                        postElement.appendChild(postImage);
                    }

                    const postLink = document.createElement('div');
                    postLink.classList.add('post-link');
                    const link = document.createElement('a');
                    link.href = `https://www.reddit.com${post.data.permalink}`;
                    link.textContent = 'Read More';

                    postLink.appendChild(link);
                    postElement.appendChild(postTitle);
                    postElement.appendChild(postLink);
                    postsContainer.appendChild(postElement);
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    fetchButton.addEventListener('click', () => {
        const subreddit = subredditInput.value.trim();
        if (subreddit) {
            fetchRedditPosts(subreddit);
        }
    });
    fetchRedditPosts('aww');
});