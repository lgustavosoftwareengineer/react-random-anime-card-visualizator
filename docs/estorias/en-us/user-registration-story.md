# Title: User Registration

# Narrative:

**As** a user  

**I** want to register in the application  

**So that** I can see random cards  

---

# Acceptance Criteria:

## Scenario 1: Name field is not filled

**Given** that I have not filled in the name field  

**Then** the "Click to see cards" button should be disabled  

---

## Scenario 2: Name field is filled

**Given** that I have filled in the name field  

**And** the "Click to see cards" button is enabled  

**When** I click on the "Click to see cards" button  

**Then** I should be redirected to the screen that will show me the random cards  