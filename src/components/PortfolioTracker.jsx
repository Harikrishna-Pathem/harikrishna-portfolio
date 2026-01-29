import { useEffect } from "react";
import emailjs from "emailjs-com";
import { UAParser } from "ua-parser-js";

const PortfolioTracker = () => {
  useEffect(() => {
    const LAST_SENT_KEY = "portfolio_last_mail_time";
    const now = Date.now();
    const lastSent = localStorage.getItem(LAST_SENT_KEY);

    const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

    // Decide visit type
    let visitType = "First Visit";

    if (lastSent) {
      if (now - Number(lastSent) < TWENTY_FOUR_HOURS) {
        return; // within 24 hrs → do nothing
      }
      visitType = "Returning Visit (after 24 hours)";
    }

    // -------- Device Info --------
    const parser = new UAParser();
    const result = parser.getResult();

    const deviceType = result.device.type
      ? result.device.type.charAt(0).toUpperCase() + result.device.type.slice(1)
      : "Desktop";

    const os = result.os.name
      ? `${result.os.name} ${result.os.version || ""}`
      : "Unknown OS";

    const browser = result.browser.name
      ? `${result.browser.name} ${result.browser.version || ""}`
      : "Unknown Browser";

    // -------- LocalStorage (limit 10 items) --------
    const storageItems = [];
    const maxItems = 10;

    for (let i = 0; i < localStorage.length && i < maxItems; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);

      // truncate long values to avoid huge emails
      const safeValue =
        value && value.length > 100
          ? value.substring(0, 100) + "...(truncated)"
          : value;

      storageItems.push(`${key}: ${safeValue}`);
    }

    const localStorageData =
      storageItems.length > 0
        ? storageItems.join("\n")
        : "No localStorage data found";

    // -------- Send Email --------
    emailjs
      .send(
        "service_zt5ugwg",
        "template_nr75vwy",
        {
          visitType: visitType,
          device: deviceType,
          os: os,
          browser: browser,
          time: new Date().toLocaleString(),
          storage: localStorageData,
        },
        "PrfKhLuA5mS5diUOn",
      )
      .then(() => {
        localStorage.setItem(LAST_SENT_KEY, now.toString());
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
      });
  }, []);

  return null;
};

export default PortfolioTracker;
