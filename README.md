# React Calculator!

![](https://i.giphy.com/iPw3q8epQcMgw.gif)

### Setup
* run `npm install` in this directory to get all of the dependencies. 


### Assignment
In this directory is a basic React calculator. The UI is built out, but the calculator isn't functional...yet.

Completion will be parts 1-3 and includes getting basic functionality out of this calculator.

### Tips for Getting Started
* Consider how and where state should be managed for this app. 
* What props will need to be passed around the app?
* Visualise what components are necessary and draw the Component layout.


## 1. Basic click functionality on tiles
* Inside the Calculator Component create a function that will console.log the value of the button clicked in the Tile Component.(Hint: What object is being generated? - It rythmes with shmevent) 
* This function should be passed down as props to the Tile component. 
* Once you have the basic console.log for each tile click, add some state to the Calculator so that it can hold a current display value. 
* The display component should render the display value determined in the Calculator's state. 
* Finish up this feature by having the display component render the symbol of the tile that you click on. 

## 2. Updating State
* Your calculator should be able to hold on to a few pieces of state: 
    * the current value being displayed
    * the running total
    * the most recent operator
    * make sure you are able to keep track of the numbers that need to be calculated as well as which operation that needs to be done
* You will need to handle numbers and operators differently, and it would be best to write a function for handling each type


## 3. Basic Calculations
* You will need functions for addition, subtraction, multiplication, and division. 
* When the user clicks the "=" tile, run the correct calculation for the given operator, and print the result to the console.
* Finally, after the calculation is completed have the answer displayed correctly on the page. 


## BONUS
1. Write a function to handle clicking the '+/-' button 
2. Write a funciton to handle the '%' button. Ex: 10 % -> 0.10, 22 % -> 0.22
2. Write a function that will show the calculators recent history when you double click on the display component
3. Add animations to the display when changes occur


## 🚀 Completion looks like:

 You completed the Component layout and uploaded it to your repo in gitHub. 
 
 You completed all functionality for your React calculator app.

## 🚀 Your homework submission should include:

- A pull request on this repo
- Completion, comfort, wins, losses, questions... you know the drill.

## This homework is due 🚨 ON SUNDAY AT 11PM 🚨


