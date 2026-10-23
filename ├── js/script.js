// Put your WhatsApp number here: country code + number, no + or spaces
const WHATSAPP_NUMBER = "47125160";

const dict = {
  en: {
    nav_about: "About", nav_services: "Services", nav_programs: "Programs", nav_contact: "Contact",
    hero_title: "Strong body.<br>Balanced life.",
    hero_sub: "Football coaching, strength training and life balance with Omar Ayari.",
    hero_cta: "Start with me", hero_cta2: "See programs",
    about_title: "From the pitch to everyday life",
    about_text: "I'm Omar Ayari. I play football, I coach at a football academy, I train in the gym and I'm still a student. I learned that strength only lasts when your life is in balance, and that is what I coach.",
    services_title: "What I coach",
    s1_title: "Football", s1_text: "Technique, positioning and match mindset for young players and amateurs.",
    s2_title: "Strength", s2_text: "Gym programs built around your level and your goal.",
    s3_title: "Balance", s3_text: "Plan your week so training, study, work and rest all get their place.",
    programs_title: "Programs",
    p1_title: "Player program", p1_text: "Weekly football sessions focused on your weak points.",
    p2_title: "Strength program", p2_text: "A gym plan with clear weekly progress.",
    p3_title: "Balance program", p3_text: "Sport, study and rest organized in one routine.",
    ask: "Ask for details",
    contact_title: "Let's talk", contact_text: "Tell me your goal and I will reply on WhatsApp.",
    f_name: "Your name", f_msg: "Your goal", f_send: "Send on WhatsApp",
    langBtn: "العربية", waText: "Hello Omar, my name is {name}. My goal: {msg}"
  },
  ar: {
    nav_about: "من أنا", nav_services: "الخدمات", nav_programs: "البرامج", nav_contact: "تواصل",
    hero_title: "جسم قوي.<br>حياة متوازنة.",
    hero_sub: "تدريب كرة القدم، لياقة بدنية وتوازن في الحياة مع عمر عياري.",
    hero_cta: "ابدأ معي", hero_cta2: "شاهد البرامج",
    about_title: "من الملعب إلى الحياة اليومية",
    about_text: "أنا عمر عياري. ألعب كرة القدم، وأدرّب في أكاديمية لكرة القدم، وأتمرّن في الجيم، وما زلت طالباً. تعلّمت أن القوة لا تدوم إلا عندما تكون حياتك متوازنة، وهذا ما أدرّب عليه.",
    services_title: "ماذا أدرّب",
    s1_title: "كرة القدم", s1_text: "التقنية والتمركز وعقلية المباريات للاعبين الصغار والهواة.",
    s2_title: "القوة", s2_text: "برامج جيم مبنية على مستواك وهدفك.",
    s3_title: "التوازن", s3_text: "نظّم أسبوعك ليأخذ التدريب والدراسة والعمل والراحة مكانهم.",
    programs_title: "البرامج",
    p1_title: "برنامج اللاعب", p1_text: "حصص كرة قدم أسبوعية تركّز على نقاط ضعفك.",
    p2_title: "برنامج القوة", p2_text: "خطة جيم مع تقدّم أسبوعي واضح.",
    p3_title: "برنامج التوازن", p3_text: "الرياضة والدراسة والراحة في روتين واحد منظّم.",
    ask: "اطلب التفاصيل",
    contact_title: "لنتحدث", contact_text: "أخبرني بهدفك وسأردّ عليك عبر واتساب.",
    f_name: "اسمك", f_msg: "هدفك", f_send: "أرسل عبر واتساب",
    langBtn: "English", waText: "مرحباً عمر، اسمي {name}. هدفي: {msg}"
  }
};

let current = "en";

function setLang(lang) {
  current = lang;
  const t = dict[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.innerHTML = t[el.dataset.i18n];
  });
  document.getElementById("langBtn").textContent = t.langBtn;
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.getElementById("langBtn").addEventListener("click", () => {
  setLang(current === "en" ? "ar" : "en");
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const msg = document.getElementById("msg").value.trim();
  const text = dict[current].waText.replace("{name}", name).replace("{msg}", msg);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
});

let saved = "en";
try { saved = localStorage.getItem("lang") || "en"; } catch (e) {}
setLang(saved);
