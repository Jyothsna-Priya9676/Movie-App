const FAVORITE_KEY = "favorite_movies";

export const getFavorites = () => {
  const favorites = localStorage.getItem(FAVORITE_KEY);

  return favorites ? JSON.parse(favorites) : [];
};

export const addFavorite = (movie) => {
  const favorites = getFavorites();

  const exists = favorites.find(
    (item) => item.id === movie.id
  );

  if (!exists) {
    favorites.push(movie);

    localStorage.setItem(
      FAVORITE_KEY,
      JSON.stringify(favorites)
    );
  }
};

export const removeFavorite = (id) => {
  const favorites = getFavorites().filter(
    (movie) => movie.id !== id
  );

  localStorage.setItem(
    FAVORITE_KEY,
    JSON.stringify(favorites)
  );
};

export const isFavorite = (id) => {
  return getFavorites().some(
    (movie) => movie.id === id
  );
};