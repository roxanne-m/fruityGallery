import React from 'react';

export const Intro = () => {
  return (
    <div className='intro-style'>
      <h2>Welcome to Fruit Gallery!</h2>
      <p>
        A place to view all of the variety of fruits the world has to offer. You
        can view our gallery of fruits and click on them individually in order
        to find out further information about them.
      </p>
      <p>Some information you can discover about the fruit include:</p>
      <ul>
        <li>Name of the Fruit.</li>
        <li>Family of the Fruit.</li>
        <li>Genus of the Fruit.</li>
        <li>Order of the Fruit.</li>
        <li>Nutrition of the Fruit.</li>
        <li>Carbohydrates of the Fruit (per 100g) in grams.</li>
        <li>Protein of the Fruit (per 100g) in grams.</li>
        <li>Fat of the Fruit (per 100g) in grams.</li>
        <li>Calories of the Fruit (per 100g) in grams.</li>
        <li>Sugar of the Fruit (per 100g) in grams.</li>
      </ul>
    </div>
  );
};
