// -----------------------------------------------------------------------------
// projects.ts — single source of truth for project data.
// Author: Humayun Butt
//
// This file has no JSX and no React imports on purpose: it's just a typed
// array of plain objects. Both the /projects listing page and the
// /projects/:id detail page import from here, so adding a project or fixing
// a typo happens in exactly one place.
//
// The `.ts` extension (not `.tsx`) signals to TypeScript that there's no
// JSX inside. If you ever add a React element to this file, rename it to
// `.tsx` — otherwise the compiler will refuse to parse the angle brackets.
// -----------------------------------------------------------------------------
// Keep image imports explicit and descriptive so the portfolio data remains easy
// to maintain and review when new project assets are added.
import disasterReliefImage from '../assets/disaster-relief.jpg';
import ethicalAiImage from '../assets/ethical-ai.jpg';
import beautySetImage from '../assets/all-beauty-sentiment-analysis.jpg';

// Shape of one project entry. Grouping the list-card fields (image, role,
// outcome) together with the detail-page fields (description, techStack,
// timeline) into one type means the listing and detail views can't get
// out of sync — both read from the same object.
export type Project = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  role: string;
  outcome: string;
  // Detail-only fields:
  description: string[];
  techStack: string[];
  timeline: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'disaster-relief',
    title: 'Disaster Relief Predictions',
    image: disasterReliefImage,
    imageAlt: 'Illustration of a disaster relief dashboard and analytics concept',
    role: 'AI & Data Analyst',
    outcome:
      'Built a multi-model deep learning pipeline for disaster tweet classification that improved real-time detection accuracy and supported rapid crisis-response decisions.',
    description: [
      'This project focused on improving real-time disaster notification accuracy by building deep learning pipelines to automatically distinguish between actual disaster-related messages and non-disaster chatter.',
      'Using Kaggle\'s Natural Language Processing with Disaster Tweets dataset containing 7,613 labeled tweets, the study compared lightweight models trained from scratch with large pre-trained transformers and analyzed the trade-offs between speed and accuracy.',
      'The strongest performer was a fine-tuned BERT-Base-Uncased model, which reached a peak accuracy of 84.7% and an F1-score of 0.82. The lightweight CNN and LSTM baselines trained faster and remained valuable for resource-constrained deployment scenarios.'
    ],
    techStack: ['BERT', 'CNN', 'LSTM', 'Word2Vec', 'Doc2Vec', 'GloVe', 'Keras', 'FastAPI', 'Kafka'],
    timeline: 'Jan 2025 – Apr 2025'
  },
  {
    id: 'trailtracker',
    title: 'Ethically Accountable AI in the Justice System',
    image: ethicalAiImage,
    imageAlt: 'Illustration representing AI ethics and justice system accountability',
    role: 'Research Analyst',
    outcome:
      'Examined how algorithmic automation in law enforcement can amplify bias and compromise fairness, transparency, and due process without strict accountability safeguards.',
    description: [
      'This research analyzes the urgent ethical concerns of automating law enforcement, examining how algorithms frequently amplify historical inequalities rather than deliver objectivity. While AI tools offer increased efficiency and decision-making consistency, deploying them without strict legal safeguards directly compromises transparency, privacy, and the foundational right to due process.',
      'The project audits four high-risk algorithmic sectors currently implemented within criminal justice systems globally: predictive policing, risk assessment algorithms, facial recognition technology, and AI in sentencing. These systems often reinforce existing inequities and can undermine judicial discretion and individual rights.',
      'The primary recommendation is the mandatory establishment of a comprehensive accountability framework that includes independent pre-deployment fairness audits, continuous post-deployment bias updates, privacy-first architectures, and human-in-the-loop oversight to preserve individualized justice.'
    ],
    techStack: ['COMPAS', 'PSA', 'PredPol (Geolitica)', 'State v. Loomis', 'US Judiciary Guidelines (2022)', 'EU AI Act'],
    timeline: 'Jan 2025 – Apr 2025'
  },
  {
    id: 'orderflow-api',
    title: 'Sentiment Analysis of the "All Beauty" Dataset',
    image: beautySetImage,
    imageAlt: 'Illustration representing NLP, sentiment analysis, and recommendation systems',
    role: 'Data Scientist',
    outcome:
      'Developed an end-to-end NLP pipeline that built predictive sentiment models and enhanced recommender engines using Amazon\'s All Beauty dataset, achieving highly accurate review classification and rating correction.',
    description: [
      'This project developed an end-to-end NLP pipeline to build predictive sentiment models and enhance recommender engines using Amazon\'s "All Beauty" dataset. Initially encompassing 5,269 customer reviews, the data was rigorously deduplicated and cleaned down to 4,242 unique entries.',
      'A major challenge discovered during data exploration was an extremely imbalanced rating distribution, with a high average customer satisfaction score of 4.77 out of 5. Furthermore, strong product concentration was revealed: just 6 out of 85 products generated over 75% of the entire dataset\'s reviews.',
      'Text preprocessing workflows normalized the text via lowercasing, punctuation stripping, tokenization, and stopword removal. Lexicon-based baseline packages such as VADER and TextBlob were compared, and the advanced models used TF-IDF feature vectors to classify sentiment with strong quality-aware recommendation output.'
    ],
    techStack: ['Logistic Regression', 'MLP Classifier', 'TF-IDF', 'VADER', 'TextBlob', 'Python', 'NLP', 'Scikit-Learn'],
    timeline: 'Jan 2025 – Apr 2025'
  }
];
