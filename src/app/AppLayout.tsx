import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useParams } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { FloatingPhone } from '../components/ui/FloatingPhone';
import { FloatingWhatsApp } from '../components/ui/FloatingWhatsApp';

export default function AppLayout() {
    const { lang } = useParams();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (!lang) return;

        if (i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }

        document.documentElement.lang = lang;
    }, [lang]);

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />

            <FloatingPhone />
            <FloatingWhatsApp />
        </>
    );
}
