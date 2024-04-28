import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import showdown from "showdown";

const API_KEY = "AIzaSyCxL0ETBKqBtbBmEFrTcFnTg9MK45VGbUE";
const genAI = new GoogleGenerativeAI(API_KEY);
const safetySettings = [
	{ category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
	{ category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
	{ category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH }
]

const model = genAI.getGenerativeModel({ model: "gemini-pro", safetySettings});

const Val = {
	recognition: new (window.SpeechRecognition || window.webkitSpeechRecognition)(),
	synth: window.speechSynthesis,
	model: genAI.getGenerativeModel({ model: "gemini-pro", safetySettings}),
    prompt: "대화하는 사람이 어린 아이임을 가정하여 짧고 간결하게 답변해줘. 불필요한 말은 하지 말고 대화하는 사람을 부르는 말은 절대 하지 말아줘. 지금 얘기하는 것들을 다시 언급하는 것도 절대 하지마. 그리고 단답형으로 대답하지 말고 아주 간단한 설명을 덧붙여줘. "
}

const Elem = {
	chat: document.querySelectorAll(".chat"),
	button: document.querySelectorAll("button"),
	waiting: document.getElementById("waiting"),
    listening: document.getElementById("listening"),
    speaking: document.getElementById("speaking"),
    question: document.getElementById("question"),
    answer: document.getElementById("answer")
}

const Func = {
	getRandomBorder: () => { return "border-" + (Math.floor(Math.random() * 6) + 1); },
	showButton: (button) => {
		 Elem.button.forEach(elem => { elem.classList.add("hide"); });
		 button.classList.remove("hide");
	},
	questionToAI: async (text) => {
		const result = await model.generateContent(Val.prompt + text);
        const response = await result.response;
        return response.text();
	},
	readText: (text) => {
		const utter = new SpeechSynthesisUtterance(text);
        utter.pitch = 1;
        utter.rate = 1;
        Val.synth.speak(utter);
        return utter;
	},
	markdownToHTML: (text) => {
		var converter = new showdown.Converter();
        return converter.makeHtml(text);
	}
}

Val.recognition.lang = "ko";

export { Val, Elem, Func };