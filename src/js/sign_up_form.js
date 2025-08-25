export default function createSignUpFormPage() {
  const content = document.querySelector(".content");
  content.classList.add("h-full");
  content.classList.add("w-full");

  const signUpFormPage = document.createElement("div");
  signUpFormPage.classList.add("h-full");
  signUpFormPage.classList.add("w-full");
  signUpFormPage.classList.add("bg-[#e1e1e1]");
  signUpFormPage.classList.add("flex");
  signUpFormPage.classList.add("flex-col");
  signUpFormPage.classList.add("items-center");
  signUpFormPage.classList.add("justify-center");

  signUpFormPage.innerHTML = /* html */ `
    <div class="w-[300px] bg-[#ffffff] border-1 border-[#d7d7d7] rounded flex flex-col p-6 m-4 drop-shadow-xl">
      <div class="text-2xl text-gray-700 font-semibold text-center">Sign Up</div>
      <form novalidate class="mt-4">
        <div class="flex flex-col">
          <label for="email" class="ml-0.5 text-[0.75rem] font-bold text-gray-800">Email</label>
          <input type="email" id="email" class="text-sm bg-[#f1f1f1] rounded border-1 border-[#d7d7d7] mt-1 py-1 px-2 outline-hidden text-gray-700 invalid:border-red-400 invalid:border-2" />
        </div>
        <div class="flex flex-col mt-4">
          <label for="country" class="ml-0.5 text-[0.75rem] font-bold text-gray-800">Country</label>
          <select id="country" class="text-sm bg-[#f1f1f1] rounded border-1 border-[#d7d7d7] mt-1 py-1 px-2 outline-hidden text-gray-700 invalid:border-red-400 invalid:border-2">
            <option value="" hidden>Select your country</option>
            <option value="us">United States</option>
            <option value="cn">China</option>
            <option value="in">India</option>
            <option value="uae">UAE</option>
         </select>
        </div>
        <div class="flex flex-col mt-4">
          <label for="postalcode" class="ml-0.5 text-[0.75rem] font-bold text-gray-800">Postal Code</label>
          <input type="text" id="postalcode" class="text-sm bg-[#f1f1f1] rounded border-1 border-[#d7d7d7] mt-1 py-1 px-2 outline-hidden text-gray-700 invalid:border-red-400 invalid:border-2" />
        </div>
        <div class="flex flex-col mt-4">
          <label for="password" class="ml-0.5 text-[0.75rem] font-bold text-gray-800">Password</label>
          <input type="password" id="password" class="text-sm bg-[#f1f1f1] rounded border-1 border-[#d7d7d7] mt-1 py-1 px-2 outline-hidden text-gray-700 invalid:border-red-400 invalid:border-2" />
        </div>
        <div class="flex flex-col mt-4">
          <label for="confirm-password" class="ml-0.5 text-[0.75rem] font-bold text-gray-800">Confirm Password</label>
          <input type="password" id="confirm-password" class="text-sm bg-[#f1f1f1] rounded border-1 border-[#d7d7d7] mt-1 py-1 px-2 outline-hidden text-gray-700 invalid:border-red-400 invalid:border-2" />
        </div>
        <div class="flex flex-row justify-between items-end mt-10">
          <div class="text-green-700 font-bold opacity-0 select-none" id="success-message">Successfully submitted!</div>
          <input type="submit" value="Submit" class="bg-blue-600 text-blue-100 px-6 py-1.5 rounded text-sm h-8"/>
        </div>
      </form>
    </div>
  `;


  content.appendChild(signUpFormPage);

  handleFormValidation();
}

function handleEmailValidation() {
  const emailField = document.querySelector("#email");
  emailField.setCustomValidity("");
  if (!emailField.validity.valid) {
    return;
  }

  if (!emailField.value.endsWith("@mygov.co.in")) {
    emailField.setCustomValidity("Enter only mygov-email address...");
  }
}

function handleCountryPostalCodeValidation() {
  const countryField = document.querySelector("#country");

  const postalcodeConstraints = {
    us: [
      /^\d{5}(-\d{4})?$/,
      "Incompatible US Postal Code!"
    ],
    cn: [
      /^[1-9]\d{5}$/,
      "Incompatible Chinese Postal Code!"
    ],
    in: [
      /^[1-9][0-9]{5}$/,
      "Incompatible Indian Postal Code!"
    ],
    uae: [
      /^\d{5,6}$/,
      "Incompatible UAE Postal Code!"
    ],
  }

  const postalcodeField = document.querySelector("#postalcode");

  postalcodeField.setCustomValidity("");
  if (!postalcodeField.validity.valid) {
    return;
  }

  if (postalcodeField.value == "") {
    postalcodeField.setCustomValidity("Postal code field empty!");
  } else if (countryField.value == "") {
    countryField.setCustomValidity("Country not selected...");
  }
  else {
    countryField.setCustomValidity("");
    postalcodeField.setCustomValidity("");
    switch (countryField.value) {
      case "us":
        if (!postalcodeConstraints.us[0].test(postalcodeField.value)) {
          postalcodeField.setCustomValidity(postalcodeConstraints.us[1]);
        }
        break;
      case "cn":
        if (!postalcodeConstraints.cn[0].test(postalcodeField.value)) {
          postalcodeField.setCustomValidity(postalcodeConstraints.cn[1]);
        }
        break;
      case "in":
        if (!postalcodeConstraints.in[0].test(postalcodeField.value)) {
          postalcodeField.setCustomValidity(postalcodeConstraints.in[1]);
        }
        break;
      case "uae":
        if (!postalcodeConstraints.uae[0].test(postalcodeField.value)) {
          postalcodeField.setCustomValidity(postalcodeConstraints.uae[1]);
        }
        break;
      default:
        countryField.setCustomValidity("Country not selected.");
        postalcodeField.setCustomValidity("Country not selected.");
    }
  }
}

function handlePasswordValidation() {
  const passwordField = document.querySelector("#password");
  passwordField.setCustomValidity("");
  if (!passwordField.validity.valid) {
    return;
  }

  if (passwordField.value == "") {
    passwordField.setCustomValidity("Enter password!");
  } else {
    passwordField.setCustomValidity("");
  }
}

function handleConfirmPasswordValidation() {
  const passwordField = document.querySelector("#password");
  const confirmPasswordField = document.querySelector("#confirm-password");

  confirmPasswordField.setCustomValidity("");
  if (!confirmPasswordField.validity.valid) {
    return;
  }

  if (confirmPasswordField.value == "") {
    confirmPasswordField.setCustomValidity("Confirm password field empty!");
  }
  else if (!(confirmPasswordField.value.localeCompare(passwordField.value) == 0)) {
    confirmPasswordField.setCustomValidity("Password doesn't match!");
  }
  else {
    confirmPasswordField.setCustomValidity("");
  }
}

function handleFormValidation() {
  const emailField = document.querySelector("#email");
  emailField.addEventListener("input", () => {
    handleEmailValidation();
  });

  const countryField = document.querySelector("#country");

  const postalcodeField = document.querySelector("#postalcode");
  postalcodeField.addEventListener("input", () => {
    handleCountryPostalCodeValidation();
  });

  const passwordField = document.querySelector("#password");
  const confirmPasswordField = document.querySelector("#confirm-password");

  passwordField.addEventListener("input", () => {
    handlePasswordValidation();
  })

  confirmPasswordField.addEventListener("input", () => {
    handleConfirmPasswordValidation();
  });

  const successMessage = document.querySelector("#success-message");


  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {

    handleEmailValidation();

    if (!emailField.validity.valid) {
      alert(emailField.validationMessage);
      event.preventDefault();
      return;
    }


    handleCountryPostalCodeValidation();

    if (!countryField.validity.valid) {
      alert(countryField.validationMessage);
      event.preventDefault();
      return;
    }

    if (!postalcodeField.validity.valid) {
      alert(postalcodeField.validationMessage);
      event.preventDefault();
      return;
    }

    handlePasswordValidation();

    if (!passwordField.validity.valid) {
      alert(passwordField.validationMessage);
      event.preventDefault();
      return;
    }

    handleConfirmPasswordValidation();

    if (!confirmPasswordField.validity.valid) {
      alert(confirmPasswordField.validationMessage);
      event.preventDefault();
      return;
    }

    // all validations successful
    successMessage.classList.remove("opacity-0");
    event.preventDefault();
  });
}
