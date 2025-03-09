# Title: View Random Cards

# Narrative:

**As** a user  

**I** want to be able to view a list of random cards with images of dogs  

**So that** I can change their order  

**And** add more cards  

---

# Acceptance Criteria:

## Scenario 1: User's name appears on the card listing screen

**Given** that I am on the random card listing screen  

**Then** the user's name should appear in the top right corner  

---

## Scenario 2: Card listing is loading

**Given** that I am on the random card listing screen  

**And** the cards have not yet been loaded  

**Then** a loading indicator should be displayed  

---

## Scenario 3: Card listing has been loaded

**Given** that I am on the random card listing screen  

**And** the photos of the initial 5 cards have already loaded  

**Then** 5 cards with random images should be displayed  

**And** each card should contain the following fields:  
- name;  
- image;  
- description;  
- a random value from 0 to 10 that we can call **points**;  

---

## Scenario 4: Draw a new card

**Given** that I am on the random card listing screen  

**And** the "Draw a new random card" button is enabled  

**When** I click the "Draw a new random card" button  

**Then** a new random card should be added to the list of cards  

**And** this new card should appear at the end of the list  

---

## Scenario 5: Clicked the "Draw a new random card" button 3 times

**Given** that I have already clicked the "Draw a new random card" button 3 times  

**Then** the "Draw a new random card" button should be disabled  

**And** the button text should change to  
**"Limit reached (3x)"**  

---

## Scenario 6: Clicked the "Shuffle Cards" button

**Given** that I am on the random card listing screen  

**When** I click the "Shuffle Cards" button  

**Then** the order of the cards on the screen should change  

---

## Scenario 7: Opened the random card screen without the user’s name

**Given** that I am on the random card listing screen  

**And** I have not set the user’s name  

**Then** I should be redirected to the user registration screen  