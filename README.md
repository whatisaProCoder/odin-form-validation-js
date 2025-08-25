# JavaScript Form Validation - Odin Project Exercise

This project implements a form validation exercise from [The Odin Project's JavaScript curriculum](https://www.theodinproject.com/lessons/node-path-javascript-form-validation-with-javascript). It demonstrates how to use JavaScript's Constraint Validation API to create custom form validation without relying on default browser behaviors.

## 📋 Exercise Overview

The assignment required building a browser form with:

- Email, Country, Postal Code, Password, and Password Confirmation fields
- Live inline validation that informs the user whether fields are properly filled
- A form with the `novalidate` attribute to bypass browser validation
- Custom JavaScript validation for all fields
- Error feedback for invalid fields
- Success feedback on valid submission

## 🚀 Implementation Highlights

- **JavaScript Constraint Validation API**: Used `setCustomValidity()` to implement custom validation rules
- **Real-time Validation**: Fields are validated as users type via `input` event listeners
- **Custom Validation Logic**:
  - Email must end with "@mygov.co.in" domain
  - Country-specific postal code validation using regex patterns
  - Password matching verification
  - Empty field detection
- **Form Control**: Prevents submission with `event.preventDefault()` until all validations pass
- **Visual Feedback**: Shows a success message when the form passes all validations

## 📋 Validation Approach

The form validates:

1. **Email**:
   - Must follow valid email format
   - Must end with "@mygov.co.in" domain

2. **Country and Postal Code**:
   - Country selection is required
   - Postal code validation rules change based on selected country:
     - US: 5 digits or 5+4 format (e.g., 12345 or 12345-6789)
     - China: 6 digits starting with non-zero
     - India: 6 digits starting with non-zero
     - UAE: 5-6 digits

3. **Password**:
   - Cannot be empty

4. **Password Confirmation**:
   - Must match the password field
   - Cannot be empty

## � Key Code Components

The validation is implemented through several functions:

1. **`handleEmailValidation()`**: Validates email format and domain
2. **`handleCountryPostalCodeValidation()`**: Applies country-specific postal code validation
3. **`handlePasswordValidation()`**: Ensures password is not empty
4. **`handleConfirmPasswordValidation()`**: Verifies passwords match
5. **`handleFormValidation()`**: Sets up event listeners and form submission handling

## 📚 Learning Outcomes

This exercise demonstrates:

- Using the JavaScript Constraint Validation API
- Implementing custom validation logic
- Working with form events (`input`, `submit`)
- Handling form submission
- Providing user feedback for validation states
- Creating dependent validations (postal code depends on country)

## 🛠️ Techniques Used

- **`setCustomValidity()`**: Setting custom validation messages
- **`validity.valid`**: Checking if a field passes validation
- **`validationMessage`**: Accessing the validation error message
- **Event handling**: For real-time validation and form submission
- **Regular expressions**: For postal code format validation
- **CSS classes**: For styling invalid fields (using TailwindCSS)

---

© 2025 Pritam Debnath. All rights reserved.
