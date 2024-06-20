document.addEventListener("DOMContentLoaded", function() {
    const valueContainer = document.querySelector(".value-tag-container .tags");
    const calculationContainer = document.querySelector(".calculation-tag-container .tags");
    const expressionContainer = document.querySelector(".expression-tag-container .tags");

    tags.forEach(tag => {
        const tagName = tag[0];
        const tagCategory = tag[1];
        const tagOpacity = tag[2];
        const tagElement = document.createElement("div");
        tagElement.textContent = tagName;
        tagElement.classList.add("tag");

        let backgroundColor;
        switch(tagCategory) {
            case 0:
                backgroundColor = `rgba(25, 185, 155, ${tagOpacity})`;
                valueContainer.appendChild(tagElement);
                break;
            case 1:
                backgroundColor = `rgba(240, 195, 15, ${tagOpacity})`; 
                calculationContainer.appendChild(tagElement);
                break;
            case 2:
                backgroundColor = `rgba(230, 75, 60, ${tagOpacity})`; 
                expressionContainer.appendChild(tagElement);
                break;
        }
        tagElement.style.backgroundColor = backgroundColor;
    });
});
