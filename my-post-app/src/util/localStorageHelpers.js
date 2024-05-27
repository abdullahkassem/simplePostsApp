function addItemToLiked(item) {
    if( searchForItem(item) != -1){
        console.log("element already exists");
        return;
    }
    const prevArr = JSON.parse(localStorage.getItem("likesArray"));
    localStorage.setItem('likesArray', JSON.stringify([...prevArr, item]));
}

function removeItemFromLiked(item) {
    const prevArr = JSON.parse(localStorage.getItem("likesArray"));
    localStorage.setItem('likesArray', JSON.stringify([...prevArr.filter(element => element !== item)]));
}

function searchForItem(item) {
    const prevArr = JSON.parse(localStorage.getItem("likesArray"));
    return prevArr.indexOf(item);

}

export { addItemToLiked, removeItemFromLiked, searchForItem }