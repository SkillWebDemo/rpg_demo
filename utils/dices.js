export function rolld20(number_of_dice) {
    //TODO implement an iterator that returns an array of rolls acording to number_of dice
    returned_roll = Math.floor(Math.random() * 20 + 1);
    alert(returned_roll);
    return returned_roll;
}
