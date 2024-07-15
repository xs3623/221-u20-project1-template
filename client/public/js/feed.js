document.addEventListener('DOMContentLoaded', function()  {
    function goToMaristEdu()  {
        goToLocation('http://my.marist.edu');
    }

    document.getElementById('portal_button').addEventListener('click', goToMaristEdu);

    document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu);
});

let currentStories = [];

/*
function feedItem(title, body, link, image) {
    this.title = title;
    this.body = body;
    this.link = link;
    this.image = image;


}
let post1 = new feedItem();

post1.body = "Body 1",
post1.title = "Marist story 1",
post1.link = "http://example.com/story1",
post1.image = "images/campus.png",

currentStories.push(post1);

*/
    currentStories.push({
        Title: 'Marist story 1',
        Body: 'Body 1',
        linkUrl: 'http://example.com/story1',
        imageUrl: 'images/campus.png'
    });

    currentStories.push({
        Title: 'Marist Story 2',
        Body: 'Body 2',
        linkUrl: 'https://example.com/story2',
        imageUrl: 'images/news_pic.jpg'
    });

    currentStories.push({
        Title: 'Marist story 3' ,
        Body: 'Body 3',
        linkUrl: 'http://example/com/story3',
        imageUrl: 'images/hancock.jpeg'
    });
console.log(currentStories);

    function displayItem(feedItem) {
        let newsFeedElement = document.getElementById('newsfeed');

        let itemHTML = ` 
            <div class="feed-item">
                <h2><a href="${feedItem.linkUrl}" target="_blank">${feedItem.Title}</a></h2>
                <p>${feedItem.Body}</p>
                <a href="${feedItem.linkUrl}" target="_blank">
                    <img id="feedPhoto" src="${feedItem.imageUrl}" alt="${feedItem.Title}">
                </a>
            </div>
        `;

        newsFeedElement.innerHTML += itemHTML;
    }

    currentStories.forEach(function(item) {
        displayItem(item);

    }) 
    
