import { useTranslation } from "react-i18next";
import SEO from "../../components/seo/SEO";
import Breadcrumb from "../../components/common/Breadcrumb";

export const Privacy = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("pages.privacy")}
        description="Privacy Policy of EduEpic - How we collect, use and protect your data"
        path="/privacy"
      />

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: t("pages.privacy") }]} />

        <h1 className="mb-6 text-3xl font-extrabold text-slate-900 dark:text-white">
          {t("pages.privacy")}
        </h1>

        <div className="prose prose-slate max-w-none dark:prose-invert">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last updated: November 2026
          </p>

          <p>
            EduEpic ("we", "us", or "our") operates the website{" "}
            <a href="https://www.eduepic.xyz" className="text-blue-600 hover:underline">
              https://www.eduepic.xyz
            </a>{" "}
            (the "Site"). This Privacy Policy explains how we collect, use, and protect your
            information when you visit our Site.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Contact form submissions (name, email address, and message)</li>
            <li>Newsletter subscription email addresses</li>
            <li>Language preference and theme settings (stored using cookies and local storage)</li>
            <li>
              Anonymized usage data through Google Analytics (pages visited, time spent, device
              type, and approximate location)
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Respond to your inquiries and messages</li>
            <li>Send newsletter updates (only if you have subscribed)</li>
            <li>Remember your preferred language and theme settings</li>
            <li>Improve our website, content, and user experience</li>
            <li>Analyze website traffic and usage patterns</li>
          </ul>

          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to enhance your browsing experience and to
            display advertisements.
          </p>

          <h3>Google AdSense and Advertising Cookies</h3>
          <p>
            Third-party vendors, including Google, use cookies to serve ads based on a user's prior
            visits to your website or other websites.
          </p>
          <p>
            Google's use of advertising cookies enables it and its partners to serve ads to your
            users based on their visit to your sites and/or other sites on the Internet.
          </p>
          <p>
            Users may opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google's Ads Settings
            </a>
            .
          </p>
          <p>
            You can also visit{" "}
            <a
              href="https://www.aboutads.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.aboutads.info
            </a>{" "}
            to opt out of some third-party vendors’ use of cookies for personalized advertising.
          </p>

          <h3>Google Analytics</h3>
          <p>
            We use Google Analytics to understand how visitors use our Site. Google Analytics
            collects anonymized information using cookies. You can learn more about how Google
            handles data here:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://policies.google.com/privacy
            </a>
          </p>

          <h3>Other Cookies We Use</h3>
          <ul>
            <li>Language preference cookie</li>
            <li>Theme (light/dark mode) cookie</li>
          </ul>
          <p>
            You can disable cookies at any time through your browser settings. Please note that some
            features of the Site may not function properly if cookies are disabled.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li>Google AdSense – for displaying advertisements</li>
            <li>Google Analytics – for website analytics</li>
          </ul>
          <p>
            These services may collect and process information according to their own privacy
            policies.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain contact form and newsletter data only as long as necessary to respond to you
            or manage your subscription. Analytics data is retained according to Google’s data
            retention policies.
          </p>

          <h2>6. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Withdraw consent related to cookies where applicable</li>
          </ul>
          <p>To exercise any of these rights, please contact us using the details below.</p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, you can
            contact us through our{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact page
            </a>
            .
          </p>

          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page with an updated “Last updated” date.
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;