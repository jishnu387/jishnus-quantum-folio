export const profile = {
  name: 'Jishnu R.', title: 'AI & Data Science Engineer', email: '', resume: '',
  roles: ['Machine Learning Enthusiast', 'Full Stack Developer', 'AWS Cloud Learner', 'IoT Innovator'],
  socials: { LinkedIn: '', GitHub: '', Instagram: '', YouTube: '', X: '' },
  coding: { LeetCode: '', GitHub: '' },
};
export const projects = [
  { id: 'banking-compliance', title: 'Intelligent banking.\nSafer decisions.', name: 'AI-Powered Banking Compliance Monitoring System', category: 'Generative AI', type: 'AI / AUTOMATION', description: 'An AI-powered system for monitoring banking compliance, bringing large language models and compliance rules into one workflow.', technologies: ['Groq AI', 'Flowise AI', 'LLMs', 'Compliance Rules'], visual: 'compliance', github: '', demo: '' },
  { id: 'stock-prediction', title: 'Finding signals\nin the market.', name: 'AI-Driven Stock Price Prediction', category: 'Machine Learning', type: 'ML / DATA SCIENCE', description: 'Exploring stock price prediction with Python and time-series analysis to identify patterns in financial data.', technologies: ['Python', 'Time-Series Analysis', 'Machine Learning'], visual: 'stocks', github: '', demo: '' },
  { id: 'bus-tracking', title: 'Connected journeys.\nReal-time possibilities.', name: 'GPS Tracking System for Public and Private Bus Transportation', category: 'IoT', type: 'IOT / EMBEDDED SYSTEMS', description: 'A GPS-based transportation tracking system connecting Arduino hardware with GPS positioning and GSM communication.', technologies: ['Arduino Uno', 'NEO-6M GPS', 'SIM800L GSM'], visual: 'tracking', github: '', demo: '' },
  { id: 'career-assistant', title: 'Your next chapter,\nintelligently guided.', name: 'AI-Based Career Recommendation Assistant', category: 'Generative AI', type: 'AI / CAREER TECH', description: 'An AI-based assistant built with Google AI Studio to explore career recommendations and potential professional pathways.', technologies: ['Google AI Studio', 'Generative AI', 'Prompt Engineering'], visual: 'career', github: '', demo: '' },
];
export const skills = [
  { name: 'Programming', icon: 'code', items: ['Python', 'Java'] },
  { name: 'Web Development', icon: 'web', items: ['HTML', 'CSS'] },
  { name: 'AI & Data Science', icon: 'brain', items: ['Machine Learning', 'Generative AI', 'Prompt Engineering'] },
  { name: 'Cloud & Tools', icon: 'cloud', items: ['VS Code', 'Google AI Studio', 'Flowise AI'] },
  { name: 'Internet of Things', icon: 'cpu', items: ['Arduino', 'GPS', 'GSM', 'IoT Application Development'] },
];
export const certifications = ['AWS Academy Graduate – Cloud Architecting', 'AWS Generative AI Foundation training', 'Saylor Academy CS205: Building with Artificial Intelligence'];
export const articles = [];
export const articleTopics = ['Artificial Intelligence', 'Machine Learning', 'AWS', 'Full Stack Development', 'IoT', 'Data Structures & Algorithms'];
export function makeMailto(email, data) {
  if (!email) return null;
  return `mailto:${email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`From: ${data.name} <${data.email}>\n\n${data.message}`)}`;
}
