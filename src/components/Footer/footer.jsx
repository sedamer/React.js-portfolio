import "./footer.scss";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <span className="footer__content__copy">
        &#169; {t("Seda Mercan. All rigths reserved")}
      </span>
    </footer>
  );
}
