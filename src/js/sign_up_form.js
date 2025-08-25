export default function createSignUpFormPage() {
  const content = document.querySelector(".content");
  content.classList.add("h-full");
  content.classList.add("w-full");

  const signUpFormPage = document.createElement("div");
  signUpFormPage.classList.add("h-full");
  signUpFormPage.classList.add("w-full");
  signUpFormPage.classList.add("bg-gray-900");
  signUpFormPage.classList.add("flex");
  signUpFormPage.classList.add("flex-col");
  signUpFormPage.classList.add("items-center");
  signUpFormPage.classList.add("justify-center");

  signUpFormPage.innerHTML = /* html */ `
    <div class="h-[400px] w-[300px] bg-gray-800 border-1 border-gray-700 rounded flex flex-col p-4">
      <div class="text-2xl text-white font-semibold text-center">Sign Up</div>
    </div>
  `;


  content.appendChild(signUpFormPage);
}
