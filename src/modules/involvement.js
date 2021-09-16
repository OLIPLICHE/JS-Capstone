/* eslint-disable indent */
/* eslint-disable linebreak-style */
const involvement = {
    likes: (likesData, mealID) => {
      const mealLikes = likesData.find((i) => i.item_id === mealID);
      if (mealLikes !== undefined) {
        return mealLikes.likes;
      }
      return 0;
    },
  };

  export default involvement;
