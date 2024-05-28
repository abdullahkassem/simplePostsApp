

export default function PageTitle({title}) {

  //printing appropriate title 
  let titleText;
    if(title == "/")
      titleText = "Home"
    else if(title == "/favourites")
      titleText = "My Favorites"


  return (
    <div className="pageTitle">
        {titleText}
    </div>
  )
}
