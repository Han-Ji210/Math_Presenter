document.addEventListener('DOMContentLoaded', () => {
    const topicContainer = document.querySelector('.topic-container');

    topics.forEach((topic, topicIndex) => {
        const [topicName, tagIndexes] = topic;
        const topicElement = document.createElement('a');
        topicElement.classList.add('topic');
        topicElement.href = `topic.html?index=${topicIndex}`;

        const topicNameElement = document.createElement('div');
        topicNameElement.textContent = topicName;

        const tagsElement = document.createElement('div');
        tagsElement.classList.add('tags');

        tagIndexes.forEach(index => {
            const [tagName, category, difficulty] = tags[index];
            const tagElement = document.createElement('div');
            tagElement.textContent = tagName;
            tagElement.classList.add('tag');

            // 배경색과 투명도 설정
            let backgroundColor;
            if (category === 0) {
                backgroundColor = `rgba(25, 185, 155, ${difficulty})`;
            } else if (category === 1) {
                backgroundColor = `rgba(240, 195, 15, ${difficulty})`;
            } else if (category === 2) {
                backgroundColor = `rgba(230, 75, 60, ${difficulty})`;
            }

            tagElement.style.backgroundColor = backgroundColor;
            tagElement.style.color = 'black';  // 글씨 색은 항상 검정색

            tagsElement.appendChild(tagElement);
        });

        topicElement.appendChild(topicNameElement);
        topicElement.appendChild(tagsElement);
        topicContainer.appendChild(topicElement);
    });
});
