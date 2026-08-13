"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Globe2,
  Menu,
  MessageCircle,
  Mic2,
  Phone,
  Play,
  Quote,
  Sparkles,
  Star,
  Users,
  X,
  ShieldCheck,
  Scale,
} from "lucide-react";

const WEBSITE_URL = "https://yves-kabuya.vercel.app/";

/* =========================================================
   CONTACT
   ========================================================= */

const WHATSAPP_NUMBER = "243891369069";
const PHONE_NUMBER = "243891369069";

const WHATSAPP_MESSAGE =
  "Bonjour Yves, je souhaiterais avoir des informations sur vos cours d'anglais.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

const phoneLink = `tel:+${PHONE_NUMBER}`;

/* =========================================================
   COURSES
   ========================================================= */

const courses = [
  {
    icon: Globe2,
    number: "01",
    title: "Anglais général",
    description:
      "Construisez une base solide en vocabulaire, grammaire, compréhension et expression pour communiquer dans les situations du quotidien.",
  },
  {
    icon: Mic2,
    number: "02",
    title: "Conversation & expression",
    description:
      "Développez votre aisance grâce aux conversations guidées, débats, jeux de rôle, discussions et situations de communication réelle.",
  },
  {
    icon: Users,
    number: "03",
    title: "Anglais professionnel",
    description:
      "Améliorez votre capacité à communiquer dans les réunions, présentations, échanges professionnels et environnements internationaux.",
  },
];

/* =========================================================
   TEACHING METHOD
   ========================================================= */

const teachingSteps = [
  {
    number: "01",
    title: "Speak",
    text: "Parlez dès le début à travers des conversations guidées et des échanges naturels.",
  },
  {
    number: "02",
    title: "Debate",
    text: "Développez vos idées, votre vocabulaire et votre confiance grâce aux débats et discussions de groupe.",
  },
  {
    number: "03",
    title: "Practice",
    text: "Travaillez la prononciation, l'écoute, la grammaire, le vocabulaire, les jeux de rôle et les situations pratiques.",
  },
  {
    number: "04",
    title: "Sing along",
    text: "Utilisez la musique et les chansons pour travailler la prononciation, le rythme, l'écoute et mémoriser naturellement de nouvelles expressions.",
  },
  {
    number: "05",
    title: "Apply",
    text: "Transformez les connaissances en compétences utilisables dans la vie quotidienne, les études et le monde professionnel.",
  },
];

/* =========================================================
   TESTIMONIALS
   ========================================================= */

const testimonials = [
  {
    name: "Mandemvo Malila Thereza",
    location: "Kinshasa",
    photo: "/Thereza.jpg",
    featured: true,
    text: "From the very first day of class, he inspired a desire in us to learn and improve our English. His unique teaching style, energy, and professionalism make him an outstanding teacher. His sociable nature makes me look forward to attending class; beyond just the learning itself, he creates a warm and friendly atmosphere.",
  },
  {
    name: "Ruzzdy",
    location: "Kinshasa",
    photo: null,
    featured: false,
    text: "Hello sir Yve. You one of the best teachers I’ve ever had. Mr. Matalana, thank you so much for everything! I once wondered if you also have mood swings sometimes 😄 because your infectious joy really lifts the spirits of everyone around you. The short time we spent together was truly beneficial, not only for my English but also for my life. Keep being the amazing person you are.",
  },
  {
    name: "Jordy ABERI Muyila",
    location: "Kinshasa",
    photo: "/Jordy.jpg",
    featured: false,
    text: "Mr. Yve Kabuya has greatly contributed to improving my English pronunciation through his clear guidance and active participation in class. I appreciate his professional attitude and effective teaching methods, especially his approach to developing our debating skills. He also encourages us to practice using tools like the Pépé application, which supports our progress. His humorous way of teaching, along with making us sing at the end of lessons, creates a positive and enjoyable learning environment.",
  },
  {
    name: "Jiress Mambimbi",
    location: "Kinshasa",
    photo: "/Jiress.jpg",
    featured: false,
    text: "This training is an amazing experience for me. I’m learning new things, improving my English, and becoming more confident every day. My teacher YVES KABUYA is very dedicated and always motivates us to keep improving. I truly appreciate the effort and passion put into this training. I highly recommend it to anyone who wants to improve your English.",
  },
];

/* =========================================================
   QUIZ
   30 UNIQUE QUESTIONS
   ========================================================= */

type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
};

const quizQuestions: QuizQuestion[] = [
  {
    question: "Choose the correct sentence.",
    options: [
      "She work every day.",
      "She works every day.",
      "She working every day.",
      "She is work every day.",
    ],
    answer: 1,
  },
  {
    question: "What is the opposite of “expensive”?",
    options: ["Cheap", "Large", "Heavy", "Difficult"],
    answer: 0,
  },
  {
    question: "Complete: “I ___ from Kinshasa.”",
    options: ["am", "is", "are", "be"],
    answer: 0,
  },
  {
    question: "Choose the correct plural.",
    options: ["Childs", "Childes", "Children", "Childrens"],
    answer: 2,
  },
  {
    question: "Complete: “She has lived here ___ 2022.”",
    options: ["for", "since", "during", "from"],
    answer: 1,
  },
  {
    question: "Which sentence is correct?",
    options: [
      "I am agree with you.",
      "I agree with you.",
      "I agreeing with you.",
      "I do agree with you are.",
    ],
    answer: 1,
  },
  {
    question: "Choose the correct question.",
    options: [
      "Where you live?",
      "Where do you live?",
      "Where does you live?",
      "Where living you?",
    ],
    answer: 1,
  },
  {
    question: "Complete: “They ___ watching television now.”",
    options: ["is", "are", "be", "was"],
    answer: 1,
  },
  {
    question: "If I ___ more time, I would travel more.",
    options: ["have", "had", "will have", "would have"],
    answer: 1,
  },
  {
    question: "What does “figure something out” mean?",
    options: [
      "To forget something",
      "To understand or solve something",
      "To avoid something",
      "To repeat something",
    ],
    answer: 1,
  },
  {
    question: "Choose the natural expression.",
    options: [
      "I am looking forward to meet you.",
      "I look forward meeting you.",
      "I am looking forward to meeting you.",
      "I am looking forward meet you.",
    ],
    answer: 2,
  },
  {
    question: "Complete: “If I had known, I ___ earlier.”",
    options: ["come", "would come", "would have come", "will come"],
    answer: 2,
  },
  {
    question: "Which word means “very important”?",
    options: ["Minor", "Crucial", "Ordinary", "Casual"],
    answer: 1,
  },
  {
    question: "Choose the correct sentence.",
    options: [
      "He suggested to go home.",
      "He suggested going home.",
      "He suggested us go home.",
      "He suggesting going home.",
    ],
    answer: 1,
  },
  {
    question: "What does “break the ice” mean?",
    options: [
      "To become angry",
      "To start a friendly conversation",
      "To end a relationship",
      "To make a mistake",
    ],
    answer: 1,
  },
  {
    question: "Complete: “By next year, I ___ English for five years.”",
    options: [
      "will study",
      "will have been studying",
      "am studying",
      "have studied",
    ],
    answer: 1,
  },
  {
    question: "Which is the most natural sentence?",
    options: [
      "I have never been to South Africa.",
      "I never have been to South Africa.",
      "I never was in South Africa.",
      "I have been never to South Africa.",
    ],
    answer: 0,
  },
  {
    question: "Choose the correct word: “The meeting was ___ because of the storm.”",
    options: ["called off", "called on", "called in", "called up"],
    answer: 0,
  },
  {
    question: "What does “to go the extra mile” mean?",
    options: [
      "To travel a long distance",
      "To do more than what is expected",
      "To arrive late",
      "To change your plans",
    ],
    answer: 1,
  },
  {
    question: "Choose the grammatically correct sentence.",
    options: [
      "Rarely I have seen such dedication.",
      "Rarely have I seen such dedication.",
      "Rarely I saw such dedication.",
      "Rarely did I have saw such dedication.",
    ],
    answer: 1,
  },
  {
    question: "Someone who can adapt easily is described as...",
    options: ["Rigid", "Versatile", "Reluctant", "Fragile"],
    answer: 1,
  },
  {
    question: "Choose the most precise sentence.",
    options: [
      "The results are not what we expected.",
      "The results fall short of our expectations.",
      "The results don't make us happy.",
      "The results are bad compared to before.",
    ],
    answer: 1,
  },
  {
    question:
      "“Notwithstanding the challenges, the team delivered the project.” What does “notwithstanding” mean?",
    options: ["Because of", "Despite", "Before", "Instead of"],
    answer: 1,
  },
  {
    question: "Which sentence uses “although” correctly?",
    options: [
      "Although it was raining, we went out.",
      "Although of the rain, we went out.",
      "Although the rain, we went out.",
      "Although was raining, we went out.",
    ],
    answer: 0,
  },
  {
    question: "What does “under the weather” usually mean?",
    options: [
      "Feeling unwell",
      "Being outdoors",
      "Feeling excited",
      "Being confused",
    ],
    answer: 0,
  },
  {
    question: "Choose the correct inversion.",
    options: [
      "Never I have seen such a thing.",
      "Never have I seen such a thing.",
      "Never I saw have such a thing.",
      "Never did I have seen such a thing.",
    ],
    answer: 1,
  },
  {
    question: "Complete: “She wishes she ___ more time.”",
    options: ["has", "had", "will have", "would has"],
    answer: 1,
  },
  {
    question: "What does “a double-edged sword” describe?",
    options: [
      "Something with only advantages",
      "Something with both advantages and disadvantages",
      "Something completely useless",
      "Something very dangerous",
    ],
    answer: 1,
  },
  {
    question: "Choose the most appropriate professional expression.",
    options: [
      "Send me the document now.",
      "Could you please send me the document?",
      "You must send me that thing.",
      "Give me the document.",
    ],
    answer: 1,
  },
  {
    question: "Which sentence is grammatically correct?",
    options: [
      "Had I known about the issue, I would have acted sooner.",
      "Had I knew about the issue, I would act sooner.",
      "Had I know about the issue, I would have acted sooner.",
      "Had I known about the issue, I will act sooner.",
    ],
    answer: 0,
  },
];

/* =========================================================
   QUIZ HELPERS
   ========================================================= */

const shuffle = <T,>(array: T[]) => {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
};

const getLevel = (score: number) => {
  if (score <= 2) return "A1";
  if (score <= 4) return "A2";
  if (score <= 7) return "B1";
  if (score <= 9) return "B2";
  if (score <= 11) return "C1";
  return "C2";
};

const levelInfo: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  A1: {
    title: "Débutant",
    description:
      "Vous avez besoin de renforcer les bases. Un accompagnement progressif vous aidera à construire une communication simple et solide.",
  },
  A2: {
    title: "Élémentaire",
    description:
      "Vous maîtrisez déjà certaines structures de base. La pratique régulière vous aidera à gagner en fluidité.",
  },
  B1: {
    title: "Intermédiaire",
    description:
      "Vous pouvez communiquer dans de nombreuses situations. Le prochain objectif est de gagner en précision, vocabulaire et confiance.",
  },
  B2: {
    title: "Intermédiaire supérieur",
    description:
      "Vous disposez d'une bonne base communicative. Travaillez maintenant la fluidité, la précision et le vocabulaire avancé.",
  },
  C1: {
    title: "Avancé",
    description:
      "Vous avez une très bonne maîtrise de l'anglais. Un travail ciblé peut vous aider à atteindre davantage de naturel et de précision.",
  },
  C2: {
    title: "Maîtrise",
    description:
      "Votre résultat indique une excellente maîtrise de l'anglais sur les compétences évaluées par ce test.",
  },
};

/* =========================================================
   STAR RATING
   ========================================================= */

function Stars() {
  return (
    <div className="flex gap-1 text-amber-400" aria-label="5 étoiles">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} size={14} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

/* =========================================================
   MAIN PAGE
   ========================================================= */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [quizOpen, setQuizOpen] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizQuestionsForAttempt, setQuizQuestionsForAttempt] = useState<
    QuizQuestion[]
  >([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const savedAttempts = Number(
      window.localStorage.getItem("yves-english-quiz-attempts") || "0",
    );

    setAttempts(Math.min(savedAttempts, 3));
  }, []);

  useEffect(() => {
    if (quizOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [quizOpen]);

  const currentQuizQuestion = quizQuestionsForAttempt[currentQuestion];

  const quizProgress = useMemo(() => {
    if (!quizQuestionsForAttempt.length) return 0;

    return (
      ((currentQuestion + 1) / quizQuestionsForAttempt.length) * 100
    );
  }, [currentQuestion, quizQuestionsForAttempt.length]);

  const startQuiz = () => {
    if (attempts >= 3) return;

    const selectedQuestions = shuffle(quizQuestions).slice(0, 12);

    setQuizQuestionsForAttempt(selectedQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizStarted(true);
    setQuizFinished(false);
  };

  const answerQuestion = (index: number) => {
    if (selectedAnswer !== null || !currentQuizQuestion) return;

    setSelectedAnswer(index);

    const newScore =
      index === currentQuizQuestion.answer ? score + 1 : score;

    if (index === currentQuizQuestion.answer) {
      setScore(newScore);
    }

    setTimeout(() => {
      if (currentQuestion === quizQuestionsForAttempt.length - 1) {
        const updatedAttempts = attempts + 1;

        setAttempts(updatedAttempts);

        window.localStorage.setItem(
          "yves-english-quiz-attempts",
          String(updatedAttempts),
        );

        setScore(newScore);
        setQuizFinished(true);
      } else {
        setCurrentQuestion((previous) => previous + 1);
        setSelectedAnswer(null);
      }
    }, 650);
  };

  const closeQuiz = () => {
    setQuizOpen(false);
    setQuizStarted(false);
    setQuizFinished(false);
    setSelectedAnswer(null);
  };

  const resetQuizForSecondAttempt = () => {
    if (attempts >= 2) return;

    startQuiz();
  };

  const resultLevel = getLevel(score);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfcfe] text-slate-900">
      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="absolute inset-x-0 top-0 z-40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a
            href="#accueil"
            className="font-serif text-2xl font-medium tracking-tight"
          >
            Yves<span className="text-blue-700">.</span>Kabuya
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            <a className="transition hover:text-blue-700" href="#a-propos">
              À propos
            </a>

            <a className="transition hover:text-blue-700" href="#cours">
              Cours
            </a>

            <a className="transition hover:text-blue-700" href="#methode">
              Méthode
            </a>

            <a className="transition hover:text-blue-700" href="#temoignages">
              Témoignages
            </a>

            <a className="transition hover:text-blue-700" href="#faq">
              FAQ
            </a>

            <button
              type="button"
              onClick={() => {
                setQuizOpen(true);
                setQuizStarted(false);
                setQuizFinished(false);
              }}
              className="font-semibold text-blue-700 transition hover:text-blue-900"
            >
              Testez votre niveau
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="rounded-full border border-slate-200 bg-white p-2.5 lg:hidden"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="mx-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl lg:hidden">
            {[
              ["À propos", "#a-propos"],
              ["Cours", "#cours"],
              ["Méthode", "#methode"],
              ["Témoignages", "#temoignages"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {label}
              </a>
            ))}

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setQuizOpen(true);
                setQuizStarted(false);
                setQuizFinished(false);
              }}
              className="block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-blue-700 hover:bg-blue-50"
            >
              Testez votre niveau
            </button>
          </div>
        )}
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="accueil"
        className="relative px-6 pb-28 pt-32 lg:px-8 lg:pb-36 lg:pt-40"
      >
        <div className="pointer-events-none absolute right-[-15%] top-20 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-[-10%] h-[350px] w-[350px] rounded-full bg-slate-100 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div className="max-w-2xl">
            <p className="animate-fade-up text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Professeur d&apos;anglais · Kinshasa
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[1.03] tracking-tight sm:text-6xl lg:text-[5.25rem]">
              Parlez anglais avec{" "}
              <span className="italic text-blue-700">confiance.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Plus de 5 ans d&apos;expérience dans l&apos;enseignement, une
              immersion en Afrique du Sud et une méthode basée sur la
              communication, la pratique et la confiance.
            </p>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
              <span>5+ ans d&apos;expérience</span>
              <span className="text-slate-300">•</span>
              <span>Kinshasa & en ligne</span>
              <span className="text-slate-300">•</span>
              <span>Tous niveaux</span>
            </div>

            <button
              type="button"
              onClick={() => {
                setQuizOpen(true);
                setQuizStarted(false);
                setQuizFinished(false);
              }}
              className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:gap-3"
            >
              Testez votre niveau d&apos;anglais
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-blue-100/80" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-200 shadow-2xl">
              <Image
                src="/yves-kabuya.jpg"
                alt="Yves Kabuya, professeur d'anglais"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 470px"
              />
            </div>

            <div className="absolute -bottom-7 -left-5 max-w-[250px] rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-100 sm:-left-8">
              <p className="font-serif text-lg italic leading-7 text-slate-800">
                “Learn with purpose. Speak with confidence.”
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-24 flex max-w-7xl justify-center text-slate-300">
          <ArrowDown size={20} />
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="a-propos"
        className="border-t border-slate-200 bg-white px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              À propos de Yves
            </p>

            <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight sm:text-5xl">
              Une expérience internationale au service de votre anglais.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              Yves Kabuya est un professeur d&apos;anglais expérimenté avec
              plus de 5 ans d&apos;expérience dans l&apos;enseignement. Il a
              vécu et étudié en Afrique du Sud, ce qui lui a permis de
              développer une relation naturelle avec la langue anglaise et de
              comprendre les défis auxquels sont confrontés les apprenants.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Depuis 2024, il est{" "}
              <strong className="font-semibold text-slate-900">
                English Speaking Support au CALI — Congo American Language
                Institute
              </strong>
              , où il accompagne des étudiants de différents niveaux. Il intervient
              également comme professeur d&apos;anglais à{" "}
              <strong className="font-semibold text-slate-900">
                Source de Vie, Gombe
              </strong>{" "}
              et à{" "}
              <strong className="font-semibold text-slate-900">
                Saint Pie X, Ngiringiri
              </strong>
              .
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Il accompagne également une base d&apos;élèves privés aux
              États-Unis, en Afrique du Sud et à Kinshasa.
            </p>

            <div className="mt-12 grid border-t border-slate-200 sm:grid-cols-4">
              {[
                ["5+", "ans d'expérience"],
                ["2024", "CALI"],
                ["USA", "élèves privés"],
                ["RSA", "élèves privés"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="border-b border-slate-200 py-6 sm:border-b-0 sm:border-r sm:px-5 first:pl-0 last:border-r-0"
                >
                  <p className="font-serif text-3xl">{number}</p>
                  <p className="mt-1 text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COURSES
      ===================================================== */}

      <section
        id="cours"
        className="bg-[#f4f7fb] px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Les cours
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              L&apos;anglais dont vous avez réellement besoin.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Les séances sont adaptées au niveau et aux objectifs de chaque
              apprenant.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_0.875fr_0.875fr]">
            {courses.map((course, index) => {
              const Icon = course.icon;
              const featured = index === 0;

              return (
                <article
                  key={course.title}
                  className={`group rounded-[2rem] border p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    featured
                      ? "border-blue-800 bg-[#173f72] text-white lg:p-10"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        featured
                          ? "bg-white/10 text-white"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <span
                      className={`font-mono text-sm ${
                        featured ? "text-blue-200" : "text-slate-300"
                      }`}
                    >
                      {course.number}
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl font-semibold">
                    {course.title}
                  </h3>

                  <p
                    className={`mt-4 leading-7 ${
                      featured ? "text-blue-50/80" : "text-slate-600"
                    }`}
                  >
                    {course.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          METHOD
      ===================================================== */}

      <section
        id="methode"
        className="bg-white px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                La méthode
              </p>

              <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight sm:text-5xl">
                Vous n&apos;apprenez pas seulement l&apos;anglais. Vous le
                pratiquez.
              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">
                Conversations, débats, prononciation, jeux de rôle,
                musique et situations réelles.
              </p>
            </div>

            <div className="border-t border-slate-200">
              {teachingSteps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-4 border-b border-slate-200 py-7 sm:grid-cols-[60px_150px_1fr]"
                >
                  <span className="font-mono text-sm text-blue-700">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="leading-7 text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE BAND
      ===================================================== */}

      <section className="bg-[#132f50] px-6 py-24 text-white lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
         <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">
           Parcours
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Une expérience construite entre formation internationale et enseignement à Kinshasa.
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-50/75">
            Une immersion dans un environnement anglophone combinée à plusieurs
            années d&apos;enseignement auprès d&apos;apprenants de différents
            profils et niveaux.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <article className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm">
            <p className="text-sm font-medium text-blue-200">
              English Speaking Support
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              CALI — Congo American Language Institute
            </h3>

            <p className="mt-3 text-sm text-blue-100/65">
              Depuis 2024 · Kinshasa
            </p>
          </article>

          <article className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm">
            <p className="text-sm font-medium text-blue-200">
              Professeur d&apos;anglais
           </p>

           <h3 className="mt-3 text-xl font-semibold">
             Source de Vie
           </h3>

           <p className="mt-3 text-sm text-blue-100/65">
             Gombe · Kinshasa
           </p>
        </article>

        <article className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm">
          <p className="text-sm font-medium text-blue-200">
            Professeur d&apos;anglais
          </p>

          <h3 className="mt-3 text-xl font-semibold">
            Saint Pie X
          </h3>

          <p className="mt-3 text-sm text-blue-100/65">
            Ngiringiri · Kinshasa
          </p>
        </article>
       </div>
      </div>
    </section>

      {/* =====================================================
          QUIZ INTRO
      ===================================================== */}

      <section
        id="niveau"
        className="bg-[#f4f7fb] px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Évaluation rapide
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Où se situe votre anglais ?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Répondez à 12 questions sélectionnées aléatoirement parmi notre
              banque de questions et obtenez une estimation indicative de
              votre niveau, de A1 à C2.
            </p>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-500">
              <span>12 questions</span>
              <span>•</span>
              <span>30 questions disponibles</span>
              <span>•</span>
              <span>3 tentatives maximum</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setQuizOpen(true);
              setQuizStarted(false);
              setQuizFinished(false);
            }}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#173f72] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/10 transition hover:bg-[#102f56]"
          >
            <Sparkles size={17} />
            Commencer le test
            <ArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section
        id="temoignages"
        className="bg-white px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Témoignages
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Ce que disent ses élèves.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Des expériences réelles d&apos;élèves accompagnés à Kinshasa.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Featured testimonial */}
            <article className="relative overflow-hidden rounded-[2rem] bg-[#173f72] p-7 text-white sm:p-10">
              <Quote
                className="absolute right-8 top-8 text-white/10"
                size={100}
              />

              <div className="relative flex flex-col sm:flex-row sm:items-start sm:gap-7">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-slate-200">
                  <Image
                    src="/Thereza.jpg"
                    alt="Mandemvo Malila Thereza"
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>

                <div className="mt-5 sm:mt-0">
                  <Stars />

                  <p className="mt-3 font-semibold">
                    Mandemvo Malila Thereza
                  </p>

                  <p className="text-sm text-blue-100/65">Kinshasa</p>
                </div>
              </div>

              <blockquote className="relative mt-10 max-w-2xl font-serif text-2xl leading-relaxed sm:text-3xl">
                “Hello Mr Yves.”
              </blockquote>

              <p className="relative mt-6 max-w-2xl leading-7 text-blue-50/75">
                {testimonials[0].text}
              </p>
            </article>

            {/* Supporting testimonials */}
            <div className="grid gap-5">
              {testimonials.slice(1).map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="rounded-[2rem] border border-slate-200 bg-[#f7f9fc] p-6 sm:p-7"
                >
                  <div className="flex items-center gap-4">
                    {testimonial.photo ? (
                      <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-200">
                        <Image
                          src={testimonial.photo}
                          alt={testimonial.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}

                    <div>
                      <Stars />

                      <p className="mt-1 font-semibold text-slate-900">
                        {testimonial.name}
                      </p>

                      <p className="text-sm text-slate-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 line-clamp-4 text-sm leading-6 text-slate-600">
                    {testimonial.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section
        id="faq"
        className="bg-[#f4f7fb] px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              FAQ
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Questions fréquentes.
            </h2>
          </div>

          <div className="border-t border-slate-200">
            {[
              [
                "À qui s'adressent les cours ?",
                "Les cours peuvent s'adapter aux différents niveaux, des débutants aux apprenants plus avancés.",
              ],
              [
                "Les cours sont-ils disponibles en ligne ?",
                "Oui. Yves accompagne également des élèves à distance, en plus de ses activités à Kinshasa.",
              ],
              [
                "Les cours sont-ils disponibles à Kinshasa ?",
                "Oui. Yves est basé à Kinshasa et accompagne des élèves localement.",
              ],
              [
                "Quel est le niveau requis ?",
                "Aucun niveau spécifique n'est requis. L'accompagnement peut être adapté à votre niveau actuel et à vos objectifs.",
              ],
              [
                "Comment se déroulent les cours ?",
                "Les séances privilégient la participation, les conversations, les débats, la prononciation, la compréhension, les jeux de rôle et les situations pratiques.",
              ],
              [
                "Quels types d'anglais puis-je apprendre ?",
                "Les cours peuvent couvrir l'anglais général, conversationnel et professionnel selon vos besoins.",
              ],
              [
                "Combien coûte un cours ?",
                "Les tarifs et formules disponibles sont communiqués directement par Yves selon vos besoins et le type d'accompagnement.",
              ],
            ].map(([question, answer], index) => {
              const isOpen = openFaq === index;

              return (
                <div key={question} className="border-b border-slate-200">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-semibold text-slate-900">
                      {question}
                    </span>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-slate-400 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <p className="max-w-3xl pb-6 pr-8 leading-7 text-slate-600">
                      {answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-slate-200 bg-white px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-serif text-2xl">
                Yves<span className="text-blue-700">.</span>Kabuya
              </p>

              <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
                Professeur d&apos;anglais · Kinshasa · Cours en présentiel et
                en ligne.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Contact
              </p>

              <div className="mt-4 space-y-3">
                <a
                  href={phoneLink}
                  className="flex items-center gap-3 text-sm text-slate-600 transition hover:text-blue-700"
                >
                  <Phone size={16} />
                  <span>Appeler Yves</span>
                </a>

                <a
                  href="mailto:yveskabuyakabuya@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-600 transition hover:text-blue-700"
                >
                  <span className="text-base">@</span>
                  <span>yveskabuyakabuya@gmail.com</span>
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Navigation
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
                <a href="#a-propos" className="hover:text-blue-700">
                  À propos
                </a>

                <a href="#cours" className="hover:text-blue-700">
                  Cours
                </a>

                <a href="#methode" className="hover:text-blue-700">
                  Méthode
                </a>

                <a href="#temoignages" className="hover:text-blue-700">
                  Témoignages
                </a>

                <a href="#faq" className="hover:text-blue-700">
                  FAQ
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setQuizOpen(true);
                    setQuizStarted(false);
                    setQuizFinished(false);
                  }}
                  className="text-left hover:text-blue-700"
                >
                  Test de niveau
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-400">
              © 2026 Yves Kabuya. Tous droits réservés.
            </p>

            <a
              href="/politique-de-confidential"
            className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-xs font-medium text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:text-blue-700 hover:shadow-md"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-slate-500 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700">
                <ShieldCheck size={13} />
              </span>
              <span>Politique de confidentialité</span>
            </a>

            <a
             href="/mentions-legales"
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-xs font-medium text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:text-blue-700 hover:shadow-md"
              >
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-slate-500 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700">
                <Scale size={13} />
              </span>
              <span>Mentions légales</span>
            </a>

            <p className="mt-2 text-xs text-slate-400">
              Site web conçu & développé par{" "}
              <a
                href="https://www.facebook.com/voldino.billy.paulo.lusikila/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-500 transition-colors duration-150 hover:text-blue-700"
              >
                Voldi Bill Paulo Lusikila
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Yves sur WhatsApp"
        className="group fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/30 ring-4 ring-white transition-transform duration-200 hover:scale-105"
      >
        <MessageCircle size={29} fill="currentColor" />

        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20" />
      </a>

      {/* =====================================================
          QUIZ MODAL
      ===================================================== */}

      {quizOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl">
            {/* Close */}
            <button
              type="button"
              onClick={closeQuiz}
              aria-label="Fermer le test"
              className="absolute right-5 top-5 z-10 rounded-full border border-slate-200 bg-white p-2 text-slate-500 shadow-sm transition hover:text-slate-900"
            >
              <X size={18} />
            </button>

            <div className="p-7 sm:p-10">
              {!quizStarted && !quizFinished && (
                <div className="py-8 text-center sm:py-12">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Sparkles size={25} />
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                    Test de niveau
                  </p>

                  <h2 className="mt-4 font-serif text-4xl leading-tight text-slate-900">
                    Évaluez votre anglais gratuitement.
                  </h2>

                  <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-600">
                    Vérifiez votre niveau d&apos;anglais. Gratuit et rapide.
                    Faites un test court pour connaître votre niveau et découvrir vos options d’apprentissage.
                  </p>

                  <div className="mx-auto mt-8 grid max-w-md grid-cols-3 divide-x rounded-2xl border border-slate-200 py-4">
                    <div>
                      <p className="font-semibold text-slate-900">12</p>
                      <p className="mt-1 text-xs text-slate-500">
                        questions
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">30</p>
                      <p className="mt-1 text-xs text-slate-500">
                        disponibles
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        {3 - attempts}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        tentative(s)
                      </p>
                    </div>
                  </div>

                  {attempts >= 3 ? (
                    <div className="mx-auto mt-8 max-w-md rounded-2xl bg-slate-50 p-5 text-sm leading-6 text-slate-600">
                      Vous avez déjà utilisé vos trois tentatives. Le test
                      n&apos;est plus disponible sur cet appareil.
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={startQuiz}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#173f72] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#102f56]"
                    >
                      <Play size={16} fill="currentColor" />
                      Commencer
                    </button>
                  )}

                  <p className="mx-auto mt-6 max-w-md text-xs leading-5 text-slate-400">
                    Cette évaluation donne une estimation indicative et ne
                    remplace pas un examen officiel du CECRL.
                  </p>
                </div>
              )}

              {quizStarted &&
                !quizFinished &&
                currentQuizQuestion && (
                  <div className="pt-8">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-800">
                        Question {currentQuestion + 1} / 12
                      </span>

                      <span className="text-slate-400">
                        Tentative {attempts + 1} / 3
                      </span>
                    </div>

                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-blue-700 transition-all duration-300"
                        style={{ width: `${quizProgress}%` }}
                      />
                    </div>

                    <div className="mt-10">
                      <h3 className="max-w-2xl font-serif text-3xl leading-tight text-slate-900">
                        {currentQuizQuestion.question}
                      </h3>

                      <div className="mt-8 grid gap-3">
                        {currentQuizQuestion.options.map((option, index) => {
                          const isSelected = selectedAnswer === index;
                          const isCorrect =
                            index === currentQuizQuestion.answer;

                          let state =
                            "border-slate-200 hover:border-blue-300 hover:bg-blue-50/50";

                          if (
                            selectedAnswer !== null &&
                            isCorrect
                          ) {
                            state =
                              "border-emerald-500 bg-emerald-50";
                          } else if (isSelected) {
                            state =
                              "border-red-400 bg-red-50";
                          }

                          return (
                            <button
                              key={option}
                              type="button"
                              disabled={selectedAnswer !== null}
                              onClick={() => answerQuestion(index)}
                              className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left text-sm font-medium text-slate-700 transition ${state}`}
                            >
                              <span>{option}</span>

                              {selectedAnswer !== null &&
                                isCorrect && (
                                  <Check
                                    size={18}
                                    className="text-emerald-600"
                                  />
                                )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

              {quizFinished && (
                <div className="py-8 text-center sm:py-12">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                    Votre résultat
                  </p>

                  <div className="mx-auto mt-7 flex h-32 w-32 items-center justify-center rounded-full bg-blue-50">
                    <span className="font-serif text-5xl text-blue-700">
                      {resultLevel}
                    </span>
                  </div>

                  <h2 className="mt-7 font-serif text-3xl text-slate-900">
                    {levelInfo[resultLevel].title}
                  </h2>

                  <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
                    {levelInfo[resultLevel].description}
                  </p>

                  <div className="mt-6 text-sm text-slate-400">
                    Score : {score} / 12
                  </div>

                  {(resultLevel === "B1" ||
                    resultLevel === "B2") && (
                    <p className="mx-auto mt-7 max-w-md text-sm leading-6 text-slate-500">
                      Vous souhaitez passer de{" "}
                      <strong className="text-slate-700">
                        {resultLevel}
                      </strong>{" "}
                      au niveau supérieur ? Yves peut vous accompagner dans
                      votre progression.
                    </p>
                  )}

                  <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/243891369069?text=${encodeURIComponent(
                        `Bonjour Yves ! Je viens de faire votre test d'anglais et j'ai obtenu le niveau ${resultLevel} (${score}/12). J'aimerais en savoir plus sur vos cours.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#173f72] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#102f56]"
                    >
                      Parler avec Yves
                      <ArrowRight size={16} />
                    </a>

                    <div className="mt-9">
                      <p className="text-sm font-semibold text-slate-900">
                        Partagez votre résultat
                      </p>

                      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                        Vous connaissez votre niveau. Maintenant, faites-le savoir à vos amis.
                      </p>

                      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                        <a
                          href={`https://wa.me/?text=${encodeURIComponent(
                             `🎯 J'ai testé mon niveau d'anglais !\n🇬🇧 Résultat : ${resultLevel}

                             Je l'ai fait avec Yves Kabuya, professeur d'anglais à Kinshasa.

                             Vous pensez pouvoir faire mieux ? 😏
                             Testez gratuitement votre niveau 👇
                             ${WEBSITE_URL}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
                        >
                          WhatsApp
                        </a>
                         
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            WEBSITE_URL
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
                        >
                          Facebook
                        </a>
                         <button
                           type="button"
                           onClick={async () => {
                            const text = `🎯 Je viens de tester mon niveau d'anglais avec Yves Kabuya !
                          🇬🇧 Résultat : ${resultLevel}

                          Vous pensez pouvoir faire mieux ? 😏
                          Testez gratuitement votre niveau 👇

                          ${WEBSITE_URL}`;
                            try {
                              await navigator.clipboard.writeText(text);
                              alert("Résultat copié ! Vous pouvez maintenant le partager où vous voulez.");
                            } catch {
                              alert("Impossible de copier le résultat.");
                            }
                           }}
                           className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                         >
                            Copier le résultat
                         </button>

                      </div>


                    </div>
                    

                    {attempts < 3 && (
                      <button
                        type="button"
                        onClick={resetQuizForSecondAttempt}
                        className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                      >
                        Nouvelle tentative
                      </button>
                    )}
                  </div>

                  {attempts >= 3 && (
                    <p className="mt-5 text-xs text-slate-400">
                      Vous avez utilisé vos trois tentatives.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}