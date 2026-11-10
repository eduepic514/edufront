import { useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../../components/seo/SEO";
import Breadcrumb from "../../components/common/Breadcrumb";

const faqs = [
  {
    question: "Which languages does EduEpic support?",
    answer:
      "EduEpic currently supports English, Urdu, Arabic, Spanish, French, German, Chinese, Hindi, and Turkish. We are continuously working to add more languages.",
  },
  {
    question: "How is the language automatically detected?",
    answer:
      "Our system detects your browser language preference and automatically shows content in that language when available. You can also manually change the language from the language selector in the header.",
  },
  {
    question: "What happens if an article isn't translated yet?",
    answer:
      "If an article is not available in your selected language, it will be shown in English by default. We regularly update and translate new articles.",
  },
  {
    question: "Can I contribute an article?",
    answer:
      "Yes, we welcome high-quality guest contributions. If you have expertise in education, scholarships, technology, or student life, you can contact us through the Contact page with your article idea.",
  },
  {
    question: "Is EduEpic free to use?",
    answer:
      "Yes, EduEpic is completely free for all readers. You can access all articles and guides without any payment or subscription.",
  },
  {
    question: "How often do you publish new articles?",
    answer:
      "We aim to publish new articles regularly. Our team continuously works on adding useful guides related to scholarships, study abroad, technology, and student life.",
  },
  {
    question: "Are the articles original?",
    answer:
      "Yes, all articles on EduEpic are original and carefully researched. We focus on providing accurate and helpful information for our readers.",
  },
  {
    question: "Can I request an article on a specific topic?",
    answer:
      "Absolutely. If you want us to cover a particular scholarship, country, or student-related topic, you can send your request through the Contact page.",
  },
  {
    question: "Do you provide scholarship application help?",
    answer:
      "We provide detailed guides and information about scholarships, but we do not offer direct application services. Our goal is to give you clear and reliable information so you can apply confidently.",
  },
  {
    question: "How can I contact the EduEpic team?",
    answer:
      "You can reach us through the Contact page on our website. We try to respond to all messages as soon as possible.",
  },
];

export const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title={t("pages.faq") || "FAQ"}
        description="Frequently Asked Questions about EduEpic - multilingual education and scholarship platform"
        path="/faq"
      />

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: t("pages.faq") || "FAQ" }]} />

        <h1 className="mb-6 text-3xl font-extrabold text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h1>

        <p className="mb-8 text-slate-600 dark:text-slate-300">
          Find answers to the most common questions about EduEpic.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-slate-900 dark:text-white"
              >
                <span>{faq.question}</span>
                <span className="ml-4 text-xl text-slate-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="border-t border-slate-100 px-5 py-4 text-slate-600 dark:border-slate-700 dark:text-slate-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;