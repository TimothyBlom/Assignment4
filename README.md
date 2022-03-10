# Assignment 4: A Dynamic Webpage Using JS

In this assignment, as I understand it, I need to build a web application where you can earn, transfer, loan and spent money on a selection of laptops provited by an API JSON.

## Features
### Bank container
The bank container shows how much money you have
Clinking on the loan button will open a popup where you can fill in how high of a loan you want and confirm it.
You can only loan dubble the amount of money you currently have in the bank.
You can only take one loan at a time, atempting a second loan will result in an error popup.
If you do not have a loan, it be invisible (instead of it being 0).

### Work container
The work container shows how much money you have earned.
Clicking on the work button will increase the amount of earned money by 100.
Clicking on the bank button will transfer the full amount of earned money to the bank.
If you have a loan, 10% of the transferd amount will be taken to repay the loan.
If you have a loan a "repay loan" button will appear that will repay the loan from the money in the work container (it makes more sense to me to put this button in the bank container but the assignment clearly says it should be here).

### Laptop containers
When clicking on the laptop name a drop down menu will appear with all available laptops from a API JSON.
Below that the 6 features of the laptop will be listed.
In the buttom container a image of the selected laptop will appear, with a name, discription and price.
Below the laptop price is a buy button, when clicking on it you will buy it with the money from your bank.

## Secondary Features
When earning and transfering money a prompt on top of the screen will show displaying your action.
The list of laptops will display which laptops you have bought.
The site has a mobile version.