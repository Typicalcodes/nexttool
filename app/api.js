// api.js

import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const api = axios.create({
  selected: false,
  baseURL: "https://jsonplaceholder.typicode.com", // Base URL of JSONPlaceholder API
});

const mock = new MockAdapter(api);

// Mock the POST request to /posts endpoint with a specific response
mock.onPost("/posts").reply(200, {
  selected: false,
  questions_and_answers: [
    {
      id: 1,
      selected: false,
      question: "What is a smartphone?",
      answer:
        "A smartphone is a mobile device that combines the functions of a cell phone with those of a computer.",
    },
    {
      id: 2,
      selected: false,
      question: "What operating systems are commonly used in smartphones?",
      answer:
        "Common operating systems include Android, iOS, and in some cases, Windows Mobile.",
    },
    {
      id: 3,
      selected: false,
      question: "What are some key features of modern smartphones?",
      answer:
        "Key features include touchscreen interfaces, internet connectivity, cameras, app ecosystems, and multimedia capabilities.",
    },
    {
      id: 4,
      selected: false,
      question: "How do smartphones connect to the internet?",
      answer:
        "Smartphones can connect to the internet through Wi-Fi networks, mobile data connections (such as 4G or 5G), or via Bluetooth tethering.",
    },
    {
      id: 5,
      selected: false,
      question: "What are some security measures in smartphones?",
      answer:
        "Security measures may include passcodes, biometric authentication (such as fingerprint or facial recognition), and encryption for data protection.",
    },
    {
      id: 6,
      selected: false,
      question: "What are some common smartphone screen technologies?",
      answer:
        "Common screen technologies include LCD (Liquid Crystal Display), OLED (Organic Light-Emitting Diode), and AMOLED (Active-Matrix Organic Light-Emitting Diode).",
    },
    {
      id: 7,
      selected: false,
      question: "How do smartphones use GPS?",
      answer:
        "Smartphones use GPS (Global Positioning System) to determine their location, enabling functions like mapping, navigation, and location-based services.",
    },
    {
      id: 8,
      selected: false,
      question: "What is NFC in smartphones?",
      answer:
        "NFC (Near Field Communication) allows smartphones to communicate with other devices or NFC tags by bringing them close together, enabling functions like contactless payments.",
    },
    {
      id: 9,
      selected: false,
      question: "What is the significance of app stores in smartphones?",
      answer:
        "App stores provide platforms for users to download and install applications (apps) onto their smartphones, offering a wide range of functionalities and entertainment.",
    },
    {
      id: 10,
      selected: false,
      question: "How do smartphones utilize sensors?",
      answer:
        "Smartphones incorporate various sensors such as accelerometers, gyroscopes, proximity sensors, and ambient light sensors to enable features like screen rotation, motion detection, and automatic brightness adjustment.",
    },
    {
      id: 11,
      selected: false,
      question: "What is the role of RAM in smartphones?",
      answer:
        "RAM (Random Access Memory) in smartphones is used for running applications and processes, providing temporary storage for data and facilitating multitasking.",
    },
    {
      id: 12,
      selected: false,
      question:
        "What is the difference between 4G and 5G technology in smartphones?",
      answer:
        "5G technology offers faster data speeds, lower latency, and increased capacity compared to 4G, enabling enhanced mobile experiences and supporting emerging technologies like IoT and AR/VR.",
    },
    {
      id: 13,
      selected: false,
      question: "How do smartphones use voice assistants?",
      answer:
        "Voice assistants like Siri (Apple), Google Assistant (Google), and Alexa (Amazon) enable users to interact with their smartphones using voice commands, performing tasks like setting reminders, searching the web, and controlling smart home devices.",
    },
    {
      id: 14,
      selected: false,
      question: "What are some common smartphone battery technologies?",
      answer:
        "Common battery technologies in smartphones include lithium-ion and lithium-polymer batteries, which offer high energy density and rechargeability.",
    },
    {
      id: 15,
      selected: false,
      question: "How do smartphones ensure data privacy?",
      answer:
        "Smartphones employ various measures such as data encryption, secure connections (SSL/TLS), and permissions systems to safeguard user data and ensure privacy.",
    },
    {
      id: 16,
      selected: false,
      question:
        "What is the significance of dual-camera setups in smartphones?",
      answer:
        "Dual-camera setups enable features like optical zoom, depth sensing for portrait mode photos, and improved low-light performance in smartphone photography.",
    },
    {
      id: 17,
      selected: false,
      question: "How do smartphones integrate with wearable devices?",
      answer:
        "Smartphones can connect and communicate with wearable devices such as smartwatches, fitness trackers, and earbuds via Bluetooth or Wi-Fi, allowing for synchronized data tracking and control.",
    },
    {
      id: 18,
      selected: false,
      question: "What role do mobile processors play in smartphones?",
      answer:
        "Mobile processors, also known as system-on-chip (SoC), serve as the central processing unit (CPU) of smartphones, executing tasks and running applications efficiently.",
    },
    {
      id: 19,
      selected: false,
      question:
        "What is the significance of biometric authentication in smartphones?",
      answer:
        "Biometric authentication methods like fingerprint scanning and facial recognition provide secure and convenient ways for users to unlock their smartphones and authenticate transactions.",
    },
    {
      id: 20,
      selected: false,
      question: "How do smartphones support augmented reality (AR) technology?",
      answer:
        "Smartphones utilize AR technology to overlay digital content onto the real world through the device's camera and sensors, enabling immersive experiences in gaming, navigation, and education apps.",
    },
    {
      id: 21,
      selected: false,
      question: "What is AI?",
      answer:
        "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines that are programmed to mimic cognitive functions such as learning and problem-solving.",
    },
    {
      id: 22,
      selected: false,
      question: "What are some examples of AI applications?",
      answer:
        "Examples include virtual assistants (e.g., Siri, Alexa), autonomous vehicles, recommendation systems (e.g., Netflix recommendations), and facial recognition technology.",
    },
    {
      id: 23,
      selected: false,
      question: "What are the two main types of AI?",
      answer:
        "The two main types are Narrow AI (or Weak AI), which is designed for specific tasks, and General AI (or Strong AI), which can perform any intellectual task that a human can.",
    },
    {
      id: 23,
      selected: false,
      question: "What are the two main types of AI?",
      answer:
        "The two main types are Narrow AI (or Weak AI), which is designed for specific tasks, and General AI (or Strong AI), which can perform any intellectual task that a human can.",
    },
    {
      id: 24,
      selected: false,
      question: "What is machine learning?",
      answer:
        "Machine learning is a subset of AI that involves algorithms that allow computers to learn from and make predictions or decisions based on data without being explicitly programmed.",
    },
    {
      id: 25,
      selected: false,
      question: "What is deep learning?",
      answer:
        "Deep learning is a subset of machine learning that uses neural networks with many layers (hence 'deep') to learn from large amounts of data and extract patterns for decision-making.",
    },
    {
      id: 26,
      selected: false,
      question: "How does AI use natural language processing (NLP)?",
      answer:
        "NLP enables AI systems to understand, interpret, and generate human language, facilitating tasks like language translation, sentiment analysis, and chatbots.",
    },
    {
      id: 27,
      selected: false,
      question: "What is computer vision?",
      answer:
        "Computer vision is a field of AI that enables computers to interpret and understand visual information from the real world, such as images and videos.",
    },
    {
      id: 28,
      selected: false,
      question: "What are some ethical considerations in AI?",
      answer:
        "Ethical considerations include issues related to bias in AI algorithms, privacy concerns, job displacement, and the potential for misuse of AI technologies.",
    },
    {
      id: 29,
      selected: false,
      question: "What is reinforcement learning?",
      answer:
        "Reinforcement learning is a type of machine learning where an agent learns to make decisions by trial and error, receiving feedback in the form of rewards or penalties for its actions.",
    },
    {
      id: 30,
      selected: false,
      question: "How is AI used in healthcare?",
      answer:
        "AI is used in healthcare for tasks such as medical imaging analysis, drug discovery, personalized treatment recommendations, and predictive analytics for patient outcomes.",
    },
    {
      id: 31,
      selected: false,
      question: "What are some challenges in AI development?",
      answer:
        "Challenges include data quality and availability, algorithm bias, interpretability of AI systems, ethical concerns, and the need for continuous learning and adaptation.",
    },
    {
      id: 32,
      selected: false,
      question: "What is the Turing Test?",
      answer:
        "The Turing Test is a test proposed by Alan Turing to determine a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human.",
    },
    {
      id: 33,
      selected: false,
      question: "How does AI impact job markets?",
      answer:
        "AI has the potential to automate repetitive tasks and augment human capabilities, leading to job displacement in some sectors while creating new job opportunities in others.",
    },
    {
      id: 34,
      selected: false,
      question: "What is the role of AI in autonomous vehicles?",
      answer:
        "AI enables autonomous vehicles to perceive their environment, make decisions, and navigate safely without human intervention, relying on sensors and advanced algorithms.",
    },
    {
      id: 35,
      selected: false,
      question: "How does AI improve customer service?",
      answer:
        "AI-powered chatbots and virtual assistants can provide 24/7 support, handle routine inquiries, and personalize interactions, enhancing the efficiency and quality of customer service.",
    },
    {
      id: 36,
      selected: false,
      question: "What is the role of AI in finance?",
      answer:
        "AI is used in finance for tasks such as fraud detection, algorithmic trading, risk assessment, credit scoring, and personalized financial advice.",
    },
    {
      id: 37,
      selected: false,
      question: "What is the difference between AI and automation?",
      answer:
        "AI involves machines performing tasks that typically require human intelligence, while automation involves machines performing repetitive tasks automatically without human intervention.",
    },
    {
      id: 38,
      selected: false,
      question: "How does AI impact education?",
      answer:
        "AI can personalize learning experiences, automate administrative tasks for educators, provide adaptive tutoring, and facilitate research and data analysis in education.",
    },
    {
      id: 39,
      selected: false,
      question: "What is the role of AI in cybersecurity?",
      answer:
        "AI is used in cybersecurity for threat detection, anomaly detection, behavior analysis, and automated response to security incidents, helping to identify and mitigate cyber threats.",
    },
    {
      id: 40,
      selected: false,
      question: "What is the future of AI?",
      answer:
        "The future of AI includes advancements in areas such as deep learning, natural language processing, robotics, and AI ethics, with potential impacts on various industries and society as a whole.",
    },
    {
      id: 41,
      selected: false,
      question: "What are the dangers of computer viruses?",
      answer:
        "Computer viruses can corrupt or delete data, disrupt system operations, steal personal information, and spread to other computers.",
    },
    {
      id: 42,
      selected: false,
      question: "How can malware compromise computer security?",
      answer:
        "Malware, such as ransomware and spyware, can infiltrate systems, exploit vulnerabilities, and compromise sensitive information or control of the computer.",
    },
    {
      id: 43,
      selected: false,
      question: "What are the risks associated with phishing attacks?",
      answer:
        "Phishing attacks involve fraudulent emails or websites designed to trick users into revealing personal information, login credentials, or financial details, leading to identity theft or financial loss.",
    },
    {
      id: 44,
      selected: false,
      question: "How do data breaches pose a threat to computer users?",
      answer:
        "Data breaches occur when unauthorized parties gain access to sensitive information stored on computers or networks, resulting in privacy violations, financial losses, and reputational damage.",
    },
    {
      id: 45,
      selected: false,
      question: "What dangers are posed by social engineering tactics?",
      answer:
        "Social engineering tactics exploit human psychology to manipulate individuals into divulging confidential information, granting access to systems, or performing actions that compromise security.",
    },
    {
      id: 46,
      selected: false,
      question: "How do software vulnerabilities contribute to computer risks?",
      answer:
        "Software vulnerabilities, such as coding errors or design flaws, can be exploited by attackers to gain unauthorized access, execute malicious code, or disrupt system functionality.",
    },
    {
      id: 47,
      selected: false,
      question: "What are the consequences of denial-of-service (DoS) attacks?",
      answer:
        "DoS attacks overload computer systems or networks with excessive traffic, causing them to become inaccessible to legitimate users, disrupting operations, and potentially causing financial losses.",
    },
    {
      id: 48,
      selected: false,
      question: "How can computer addiction affect individuals?",
      answer:
        "Computer addiction can lead to social isolation, neglect of responsibilities, physical health problems, and psychological issues such as anxiety or depression.",
    },
    {
      selected: false,
      id: 48,
      question: "How can computer addiction affect individuals?",
      answer:
        "Computer addiction can lead to social isolation, neglect of responsibilities, physical health problems, and psychological issues such as anxiety or depression.",
    },
    {
      selected: false,
      id: 49,
      question: "What risks are associated with excessive screen time?",
      answer:
        "Excessive screen time can contribute to eye strain, disrupted sleep patterns, decreased physical activity, and adverse effects on cognitive development, particularly in children and adolescents.",
    },
    {
      selected: false,
      id: 50,
      question: "How does cyberbullying impact computer users?",
      answer:
        "Cyberbullying involves using computers or digital devices to harass, intimidate, or humiliate others, leading to emotional distress, psychological trauma, and in severe cases, self-harm or suicide.",
    },
    {
      selected: false,
      id: 51,
      question: "What dangers are posed by addiction to online gaming?",
      answer:
        "Addiction to online gaming can result in neglect of real-life responsibilities, impaired social relationships, financial problems, and adverse effects on mental health and well-being.",
    },
    {
      selected: false,
      id: 52,
      question: "How do privacy violations threaten computer users?",
      answer:
        "Privacy violations involve unauthorized access to personal information or online activities, compromising individuals' autonomy, security, and trust, and potentially leading to identity theft or discrimination.",
    },
    {
      selected: false,
      id: 53,
      question:
        "What risks are associated with the use of insecure Wi-Fi networks?",
      answer:
        "Insecure Wi-Fi networks can expose users to eavesdropping, data interception, and unauthorized access by hackers, compromising the confidentiality and integrity of transmitted information.",
    },
    {
      selected: false,
      id: 54,
      question: "What dangers are posed by online scams and fraud?",
      answer:
        "Online scams and fraud schemes deceive users into providing money, personal information, or sensitive data under false pretenses, resulting in financial losses, identity theft, or other harm.",
    },
    {
      selected: false,
      id: 55,
      question: "How can cyberstalking impact individuals' safety?",
      answer:
        "Cyberstalking involves using computers or digital communication channels to harass, intimidate, or threaten individuals, causing fear, distress, and potential physical harm.",
    },
    {
      selected: false,
      id: 56,
      question: "What are the dangers of addiction to online gambling?",
      answer:
        "Addiction to online gambling can lead to financial ruin, strained relationships, psychological distress, and adverse effects on mental and emotional well-being, similar to other forms of addiction.",
    },
    {
      selected: false,
      id: 57,
      question:
        "How does exposure to inappropriate content online affect computer users?",
      answer:
        "Exposure to inappropriate or harmful content online, such as violence, pornography, or hate speech, can desensitize individuals, promote negative behaviors, and have adverse effects on mental health and social attitudes.",
    },
    {
      selected: false,
      id: 58,
      question:
        "What risks are associated with oversharing personal information online?",
      answer:
        "Oversharing personal information online can increase the risk of identity theft, stalking, harassment, or exploitation by malicious individuals or organizations seeking to exploit vulnerabilities or manipulate users.",
    },
    {
      selected: false,
      id: 59,
      question: "How does cyber espionage threaten computer security?",
      answer:
        "Cyber espionage involves using computers or networks to covertly gather sensitive information, intellectual property, or trade secrets for espionage or economic espionage purposes, posing significant risks to national security and corporate interests.",
    },
    {
      selected: false,
      id: 60,
      question: "What dangers are posed by addiction to social media?",
      answer:
        "Addiction to social media can lead to feelings of inadequacy, anxiety, and depression, as well as excessive comparison with others, decreased productivity, and reduced real-life social interactions.",
    },
    {
      selected: false,
      id: 61,
      question:
        "How does online radicalization pose a threat to computer users?",
      answer:
        "Online radicalization involves using the internet or social media platforms to promote extremist ideologies, recruit individuals to violent causes, and incite hatred or violence, posing risks to individuals' safety, security, and societal cohesion.",
    },
  ],
});

export default api;
