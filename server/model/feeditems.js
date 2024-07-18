function feeditem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;


}
exports.feeditem = (title, body, linkUrl, imageUrl) => {
    return new feeditem(title, body, linkUrl, imageUrl);
}

//let post1 = new feedItem();