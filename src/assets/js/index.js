// Dark mode with tailwind css
const themeToggleBtn = document.getElementById("theme-toggle");
const enableDarkMode = () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
};
const enableLightMode = () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
};
themeToggleBtn.addEventListener("click", () => {
  // if set via local storage previously
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "light") {
      enableDarkMode();
    } else {
      enableLightMode();
    }
    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      enableLightMode();
    } else {
      enableDarkMode();
    }
  }
});

// ----------------Sharing blog posts
const link = encodeURI(window.location.href);
const title = encodeURIComponent(document.querySelector("title").textContent);
const shareContainer = document.getElementById("shareContainer");
const shareButtons = document.querySelectorAll(".shareBtn");
// Check if the shareContainer exists
if (shareContainer) {
  // Loop through each share button(<a>) element and set the appropriate href attribute
  shareButtons.forEach((shareBtn) => {
    switch (shareBtn.id) {
      case "twitter":
        shareBtn.href = `https://twitter.com/intent/tweet?text=${title}%0A&url=${link}%0A%0A&via=HallgurdBakr`;
        break;
      case "fb":
        shareBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${link}`;
        break;
      case "linkedin":
        shareBtn.href = `https://linkedin.com/sharing/share-offsite/?url=${link}`;
        break;
      case "messenger":
        shareBtn.href = `fb-messenger://share?link=${link}`;
        break;
      case "telegram":
        shareBtn.href = `https://t.me/share/url?url=${link}`;
        break;
      default:
        console.warn("Unexpected share button id");
        break;
    }
  });
}

// -----------Implement client-side validation for the contact form
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const pathname = window.location.pathname;
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    if (pathname === "/ckb/contact/") {
      alert("تکایە هەموو خانەکان پربکەوە.");
    } else {
      alert("Please fill out all fields.");
    }
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    if (pathname === "/ckb/contact/") {
      alert("تکایە ئیمێڵێکی درووست بنووسە.");
    } else {
      alert("Please enter a valid email address.");
    }
    return false;
  }
  return true;
}
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitBtn");

  if (submitButton) {
    submitButton.addEventListener("click", (event) => {
      event.preventDefault(); // to prevent the default form submission action
      if (validateForm()) {
        document.forms["contactForm"].submit();
        resetFormAfterSubmission();
      }
      return false;
    });
  }
});
// resetting the form after a half-second delay (after successful validation and submission)
function resetFormAfterSubmission() {
  setTimeout(function () {
    const contactForm = document.forms["contactForm"];
    contactForm.reset();
  }, 500);
}

// for language switch button
const languageBtn = document.getElementById("languageBtn");
const currentPathname = window.location.pathname;
languageBtn.addEventListener("click", () => {
  if (currentPathname.startsWith("ckb", 1)) {
    localStorage.setItem("preferredLanguage", "en");
    const ReToEN = currentPathname.replace("ckb", "en");
    window.location.assign(ReToEN);
  } else {
    localStorage.setItem("preferredLanguage", "ckb");
    const ReToCKB = currentPathname.replace("en", "ckb");
    window.location.assign(ReToCKB);
  }
});
