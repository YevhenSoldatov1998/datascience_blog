import React from 'react';
import {useTranslations} from "next-intl";
import {ThemeToggle} from "@/components/theme-toggle";

const Page = () => {
  const t = useTranslations();
  return (
    <div>
      TEST {t('welcome')}
    </div>
  );
};

export default Page;