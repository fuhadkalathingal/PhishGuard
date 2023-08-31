$chat = $(".chat");
$profile = $(".user-profile");

/* ===================================
    Screen resize handler
====================================== */
const smallDevice = window.matchMedia("(max-width: 767px)");
const largeScreen = window.matchMedia("(max-width: 1199px)");
smallDevice.addEventListener("change", handleDeviceChange);
largeScreen.addEventListener("change", handleLargeScreenChange);

handleDeviceChange(smallDevice);
handleLargeScreenChange(largeScreen);

function handleDeviceChange(e) {
  if (e.matches) chatMobile();
  else chatDesktop();
}

function handleLargeScreenChange(e) {
  if (e.matches) profileToogleOnLarge();
  else profileExtraLarge();
}

function chatMobile() {
  $chat.addClass("chat--mobile");
}

function chatDesktop() {
  $chat.removeClass("chat--mobile");
}

function profileToogleOnLarge() {
  $profile.addClass("user-profile--large");
}

function profileExtraLarge() {
  $profile.removeClass("user-profile--large");
}

/* ===================================
    Events
====================================== */

$(".messaging-member").click(function () {
  $chat.fadeIn();
  $chat.addClass("chat--show");
});

$(".chat__previous").click(function () {
  $chat.removeClass("chat--show");
});

$(".chat__details").click(function () {
  $profile.fadeIn();
  $profile.addClass("user-profile--show");
});

$(".user-profile__close").click(function () {
  $profile.removeClass("user-profile--show");
});

$(".messages-page__dark-mode-toogler").click(function () {
  $("body").toggleClass("dark-mode");
});

document.addEventListener("DOMContentLoaded", function() {
  const messageInput = document.getElementById("message");
  const sendButton = document.getElementById("sendButton");
  const messageList = document.getElementById("messageList");

  sendButton.addEventListener("click", function(event) {
    event.preventDefault();

    const messageText = messageInput.value.trim();
    if (messageText !== "") {
      const messageItem = document.createElement("li");
      messageItem.classList.add("chat__list-messages", "li");

      const messageBubble = document.createElement("div");
      messageBubble.classList.add("chat__bubble", "chat__bubble--me");
      messageBubble.textContent = messageText;

      messageItem.appendChild(messageBubble);
      messageList.appendChild(messageItem);

      // Scroll to the bottom of the message list
      messageList.scrollTop = messageList.scrollHeight;

      // Clear the input field
      messageInput.value = "";
    }
  });
});