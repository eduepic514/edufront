import { useTranslation } from "react-i18next";
import SEO from "../../components/seo/SEO";
import Breadcrumb from "../../components/common/Breadcrumb";

export const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("pages.about")}
        description="About EduEpic - A multilingual knowledge platform for education, scholarships, technology and student life"
        path="/about"
      />

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: t("pages.about") }]} />

        <h1 className="mb-6 text-3xl font-extrabold text-slate-900 dark:text-white">
          {t("pages.about")}
        </h1>

        <div className="prose prose-slate max-w-none dark:prose-invert">
          <p>
            EduEpic is a multilingual knowledge platform that delivers high-quality articles on
            education, scholarships, technology, student life, and more — in your preferred language.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to make useful knowledge accessible to everyone, no matter which
            language they speak. We believe that language should never be a barrier to learning and
            growth.
          </p>

          <h2>What We Offer</h2>
          <ul>
            <li>Detailed guides on international scholarships</li>
            <li>Student visa and study abroad information</li>
            <li>Technology and digital skills articles</li>
            <li>Practical advice for international students</li>
            <li>Content available in multiple languages</li>
          </ul>

          <h2>Why EduEpic?</h2>
          <p>
            We started EduEpic to help students and readers find clear, reliable, and
            easy-to-understand information in one place. Our team focuses on creating original and
            carefully researched content that actually helps people make better decisions.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>Accuracy and honesty in every article</li>
            <li>Accessibility for readers around the world</li>
            <li>Continuous improvement based on reader feedback</li>
            <li>Clear and simple language</li>
          </ul>

          <h2>Join Our Journey</h2>
          <p>
            We are constantly adding new articles and improving the platform. If you have suggestions
            or want to contribute, feel free to contact us through our{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact page
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default About;