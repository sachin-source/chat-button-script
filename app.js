const container = document.createElement("div");
container.className = "genieweb-container";

const chatbotWrapper = document.createElement("div");
chatbotWrapper.className = "genieweb-chatbot-wrapper";

// Chatbot header
const header = document.createElement("div");
header.className = "genieweb-header";

const headerLeft = document.createElement("div");
headerLeft.className = "genieweb-user";

const userImageWrapper = document.createElement("div");
userImageWrapper.className = "genieweb-user-image-wrapper";

const userImage = document.createElement("img");
userImage.className = "genieweb-user-image";
userImage.src = "/user.jpg";
userImage.alt = "User Image";

const statusIndicator = document.createElement("span");
statusIndicator.className = "genieweb-status-indicator";

userImageWrapper.appendChild(userImage);
userImageWrapper.appendChild(statusIndicator);

const userInfo = document.createElement("div");
userInfo.className = "genieweb-user-info";

const userName = document.createElement("span");
userName.className = "genieweb-user-name";
userName.textContent = "Bob";

const userRole = document.createElement("span");
userRole.className = "genieweb-user-role";
userRole.textContent = "Manager";

userInfo.appendChild(userName);
userInfo.appendChild(userRole);

headerLeft.appendChild(userImageWrapper);
headerLeft.appendChild(userInfo);

const headerRight = document.createElement("div");
headerRight.className = "genieweb-close-icon";

const closeIconPart1 = document.createElement("span");
closeIconPart1.className = "genieweb-close-icon-part1";

const closeIconPart2 = document.createElement("span");
closeIconPart2.className = "genieweb-close-icon-part2";

headerRight.appendChild(closeIconPart1);
headerRight.appendChild(closeIconPart2);

header.appendChild(headerLeft);
header.appendChild(headerRight);

// Chatbot body
const body = document.createElement("div");
body.className = "genieweb-body";

// Time stamp
const timeStamp = document.createElement("div");
timeStamp.className = "genieweb-timestamp";

const timeText = document.createElement("span");
timeText.className = "genieweb-time-text";
timeText.textContent = "12:00";

timeStamp.appendChild(timeText);

// Chat message section
const messageSection = document.createElement("div");
messageSection.className = "genieweb-message-section";

const messageImage = document.createElement("img");
messageImage.className = "genieweb-message-image";
messageImage.src = "/user.jpg";
messageImage.alt = "User Image";

const messageText = document.createElement("span");
messageText.className = "genieweb-message-text";
messageText.textContent = "Hello, how may we help you? Just send us a message now to get assistance.";

messageSection.appendChild(messageImage);
messageSection.appendChild(messageText);

// Social media section
const socialMediaSection = document.createElement("div");
socialMediaSection.className = "genieweb-social-media-section";

const socialMediaText = document.createElement("span");
socialMediaText.textContent = "Start Chat With:";

const socialMediaIcons = document.createElement("div");
socialMediaIcons.className = "genieweb-social-media-icons";

const icons = [
    "/icons/whatsapp.png",
    "/icons/whatsapp.png",
    "/icons/whatsapp.png",
    "/icons/whatsapp.png",
    "/icons/whatsapp.png",
    "/icons/whatsapp.png",
    "/icons/whatsapp.png",
    "/icons/whatsapp.png",
    "/icons/whatsapp.png"
];

icons.forEach((iconSrc) => {
    const icon = document.createElement("img");
    icon.src = iconSrc;
    icon.alt = "Social Media Icon";
    icon.className = "genieweb-icon";
    socialMediaIcons.appendChild(icon);
});

socialMediaSection.appendChild(socialMediaText);
socialMediaSection.appendChild(socialMediaIcons);

body.appendChild(timeStamp);
body.appendChild(messageSection);
body.appendChild(socialMediaSection);

chatbotWrapper.appendChild(header);
chatbotWrapper.appendChild(body);

const chatIconWrapper = document.createElement("div");
chatIconWrapper.className = "genieweb-chat-icon-wrapper";

const chatIcon = document.createElement("img");
chatIcon.className = "genieweb-chat-icon";
chatIcon.src = "/chatIcon.svg";
chatIcon.alt = "Chat Icon";

chatIconWrapper.appendChild(chatIcon);

container.appendChild(chatbotWrapper);
container.appendChild(chatIconWrapper);

document.body.appendChild(container);
