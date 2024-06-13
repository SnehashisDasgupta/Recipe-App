import RecipeCard from "../components/RecipeCard";

const FavouritesPage = () => {
  const fav= false;

  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4">My Favourites</p>

        {!fav && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="/404.svg" alt="404" className="h-3/4" />
          </div>
        )}

        {fav && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </div>
        )}
      </div>
    </div>
  )
}

export default FavouritesPage;