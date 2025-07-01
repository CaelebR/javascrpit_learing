let menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck){
    if(typeof mealToCheck === 'string'){
      return menu._meal = mealToCheck;
    }else{
      console.log('Please enter meal name.');
    }
  },

  set price(priceToCheck){
    if (typeof priceToCheck === 'number'){
      return menu._price = priceToCheck;
    }else{
      console.log('Please enter price of meal');
    }
  },

  get todaysSpecial(){
    if (menu._meal.length >= 1 && menu._price >= 1 && typeof menu._meal === 'string' && typeof menu._price === 'number'){
      return `Today's special is ${menu._meal} for $${menu._price}.`;
    }else{
    return 'Meal or price was not set correctly!';
    }
  }, 
}

menu.meal = 'pasta';
menu.price  = 10;
console.log(menu.todaysSpecial)
//console.log(`meal: ${menu._meal} price: ${menu._price}`)
