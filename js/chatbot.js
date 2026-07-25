const chatbotMessages = {
  "hello": "👋 Hello! Welcome to Madiha Mahvish's Portfolio.",
  "hi": "Hi there! 😊 How can I help you?",
  "who are you": "I'm Madiha's AI Portfolio Assistant.",
  "about": "Madiha is a Data Science student passionate about AI, Python, SQL, and Power BI.",
  "skills": "Python, SQL, Power BI, Machine Learning, HTML, CSS, JavaScript, Git & GitHub.",
  "projects": "Featured projects include AI Credit Risk Assessment, Customer Churn Dashboard, AI Job Market Analysis, and more.",
  "contact": "📧 Email: your@email.com\n📍 Hyderabad, India",
  "resume": "Click the 'Download Resume' button on the Home page.",
  "bye": "👋 Thank you for visiting. Have a great day!"
};

function sendMessage() {

    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatMessages");

    const message = input.value.trim().toLowerCase();

    if(message==="") return;

    chatBox.innerHTML +=
    `<div class="user-msg">${message}</div>`;

    let reply = chatbotMessages[message];

    if(!reply){
        reply = "🤖 Sorry, I don't understand. Try: hello, about, skills, projects, contact, resume.";
    }

    setTimeout(()=>{
        chatBox.innerHTML +=
        `<div class="bot-msg">${reply}</div>`;

        chatBox.scrollTop = chatBox.scrollHeight;

    },500);

    input.value="";

}