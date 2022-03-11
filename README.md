# Assignment 4: A Dynamic Webpage Using JS

In this assignment, as I understand it, I need to build a web application where you can earn, transfer, loan and spent money on a selection of laptops provited by an API.

## How to use
### Bank container
- The bank container shows how much money you have in the bank and how high the loan is.
- Clinking on the loan button will open a popup where you can fill in how high of a loan you want.
- You can only loan dubble the amount of money you currently have in the bank.
- You can only take one loan at a time.

### Work container
- The work container shows how much money you have earned.
- Clicking on the work button will increase the amount of earned money by 100.
- Clicking on the bank button will transfer the full amount of earned money to the bank.
- If you have a loan, 10% of the transferd amount will be taken to repay the loan.
- Clicking on the repay loan in full button will fully repay the loan from the work balance, but only if there is enough (it makes more sense to me to put this button in the bank container but the assignment clearly says it should be here).

### Laptop containers
- When clicking on the laptop name a drop down menu will appear with all available laptops from a API JSON.
- Below that the features of the laptop will be listed.
- In the buttom container a image of the selected laptop will appear, with a name, discription and price.
- Below the laptop price is a buy button, when clicking on it you will buy it with the money from your bank.

## Not working features
- Loan is not invisible when you don't have one.
- Repay loan in full button is not invisible when you dont have a loan.
- The laptop specs will always get 8 specs, if a laptop does not have 8 the missing specs will read as undefined, instead of just not being there.

Everything else works, have fun with it.

### Made by Timothy Blom

#### Made with JavaScript, SCC & HTML