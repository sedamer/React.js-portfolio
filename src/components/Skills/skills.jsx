import "./skills.scss";

import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <div className="skill">
      <div className="skill__container">
        <div className="skill__container__first"></div>
      </div>
    </div>
  );
}
