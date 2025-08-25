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
    <div class="w-[300px] bg-[#ffffff] border-1 border-[#d7d7d7] rounded flex flex-col p-6 m-4">
      <div class="text-2xl text-gray-700 font-semibold text-center">Sign Up</div>
      <form novalidate class="mt-4">
        <div class="flex flex-col">
          <label for="email" class="ml-0.5 text-[0.75rem] font-bold text-gray-800">Email</label>
          <input type="email" id="email" class="text-sm bg-[#f1f1f1] rounded border-1 border-[#d7d7d7] mt-1 py-1 px-2 outline-hidden text-gray-700 invalid:border-red-400 invalid:border-2" />
        </div>
        <div class="flex flex-col mt-4">
          <label for="country" class="ml-0.5 text-[0.75rem] font-bold text-gray-800">Country</label>
          <select id="country" class="text-sm bg-[#f1f1f1] rounded border-1 border-[#d7d7d7] mt-1 py-1 px-2 outline-hidden text-gray-700">
            <option value="" hidden>Select your country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
            <option value="jp">Japan</option>
            <option value="in">India</option>
         </select>
        </div>
        <div class="flex flex-col mt-4">
          <label for="postalcode" class="ml-0.5 text-[0.75rem] font-bold text-gray-800">Postal Code</label>
          <input type="text" id="postalcode" class="text-sm bg-[#f1f1f1] rounded border-1 border-[#d7d7d7] mt-1 py-1 px-2 outline-hidden text-gray-700 invalid:border-red-400 invalid:border-2" />
        </div>
        <div class="flex flex-col mt-4">
          <label for="password" class="ml-0.5 text-[0.75rem] font-bold text-gray-800">Password</label>
          <input type="password" id="confirm-password" class="text-sm bg-[#f1f1f1] rounded border-1 border-[#d7d7d7] mt-1 py-1 px-2 outline-hidden text-gray-700 invalid:border-red-400 invalid:border-2" />
        </div>
        <div class="flex flex-col mt-4">
          <label for="confirm-password" class="ml-0.5 text-[0.75rem] font-bold text-gray-800">Confirm Password</label>
          <input type="password" id="confirm-password" class="text-sm bg-[#f1f1f1] rounded border-1 border-[#d7d7d7] mt-1 py-1 px-2 outline-hidden text-gray-700 invalid:border-red-400 invalid:border-2" />
        </div>
        <div class="flex flex-row justify-end mt-10">
          <input type="submit" value="Submit" class="bg-blue-600 text-blue-200 px-6 py-1.5 rounded text-sm"/>
        </div>
      </form>
    </div>
  `;


  content.appendChild(signUpFormPage);

  handleFormValidation();
}

function handleFormValidation() {
  const emailField = document.querySelector("#email");
  emailField.addEventListener("input", () => {
    emailField.setCustomValidity("");
    if (!emailField.validity.valid) {
      return;
    }

    if (!emailField.value.endsWith("@mygov.co.in")) {
      emailField.setCustomValidity("Enter only mygov-email address...");
    }
  });

  const countryField = document.querySelector("#country");

  const postalcodeField = document.querySelector("#postalcode");
  postalcodeField.addEventListener("input", () => {
    postalcodeField.setCustomValidity("");
    if (!postalcodeField.validity.valid) {
      return;
    }


  })


  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {

    if (!emailField.value.endsWith("@mygov.co.in")) {
      emailField.setCustomValidity("Enter only mygov-email address...");
    } else {
      emailField.setCustomValidity("");
    }

    if (!emailField.validity.valid) {
      alert(emailField.validationMessage);
      event.preventDefault();
      return;
    }


    if (countryField.value == "") {
      countryField.setCustomValidity("Select a country...");
    } else {
      countryField.setCustomValidity("");
    }

    if (!countryField.validity.valid) {
      alert(countryField.validationMessage);
      event.preventDefault();
    }
  });

}
