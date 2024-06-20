const urlParams = new URLSearchParams(window.location.search);
const topicIndex = urlParams.get('index');

if (topicIndex !== null && !isNaN(topicIndex) && topicIndex < topics.length) {
    const topicName = topics[topicIndex][0];

    const title = document.createElement('title');
    title.textContent = topicName;
    document.head.appendChild(title);

    const topBar = document.querySelector('.top-bar');
    const h1 = document.createElement('h1');
    h1.textContent = topicName;
    topBar.appendChild(h1);
}