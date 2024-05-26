

export default function PageTitle({title}) {
  let titleText;
    if(title == "/")
      titleText = "Home"
    else if(title == "/favourites")
      titleText = "My Favourites"

  return (
    <div className="pageTitle">
        {titleText}
    </div>
  )
}
