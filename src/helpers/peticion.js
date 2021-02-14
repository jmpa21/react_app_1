export const peticionHTTP = async(teams) => {
    const url = `https://api.giphy.com/v1/stickers/search?api_key=2WxbuMcF0eXmPC8kwdiE2sN8kFZlJxMU&q=${encodeURI(teams)}&limit=1`;
    const response = await fetch(url);
    const {data} = await response.json();
    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url
        }
    })
    return gifs;
}
