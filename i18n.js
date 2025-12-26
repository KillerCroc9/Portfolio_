// =============================================================================
// INTERNATIONALIZATION (i18n) SYSTEM
// =============================================================================

const SUPPORTED_LANGUAGES = ['en', 'ur'];
const DEFAULT_LANGUAGE = 'en';
const LANG_STORAGE_KEY = 'preferred_language';

// Translation data
const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            videos: 'Videos',
            experience: 'Experience',
            projects: 'Projects',
            generative_ai: 'Generative AI',
            awards: 'Awards',
            contact: 'Contact'
        },
        hero: {
            title: 'KillerCroc9',
            subtitle: 'Team Lead - Unreal Developer (C++)',
            description: 'Leading a dedicated Unreal Engine team, building immersive experiences with cutting-edge AI technologies and driving company growth',
            view_projects: 'View Projects',
            get_in_touch: 'Get in Touch'
        },
        sections: {
            about_title: 'About Me',
            education_title: 'Education',
            skills_title: 'Technical Skills',
            awards_title: 'Awards & Leadership',
            videos_title: 'Project Showcase',
            projects_title: 'Relevant Projects',
            experience_title: 'Experience',
            contact_title: 'Get In Touch',
            contact_subtitle: "Let's collaborate on your next game development project"
        },
        form: {
            name_placeholder: 'Your Name',
            email_placeholder: 'Your Email',
            subject_placeholder: 'Subject',
            message_placeholder: 'Your Message',
            send_button: 'Send Message',
            name_required: 'Name is required',
            email_required: 'Email is required',
            email_invalid: 'Please enter a valid email address',
            message_required: 'Message is required',
            success_message: 'Thank you for your message! I will get back to you soon.',
            error_message: 'Please fill in all required fields correctly.'
        },
        footer: {
            about_heading: 'About',
            about_text: 'Team Lead - Unreal Developer at AB {Ark} Private Limited, specializing in C++, AI integration, and team leadership',
            quick_links: 'Quick Links',
            connect: 'Connect',
            copyright: 'All rights reserved.'
        },
        loading: {
            repos: 'Loading repositories...',
            error: 'Unable to load repositories. Please try again later.'
        },
        aria: {
            toggle_menu: 'Toggle navigation menu',
            toggle_theme: 'Toggle theme',
            toggle_language: 'Toggle language',
            scroll_down: 'Scroll down to about section',
            close_modal: 'Close video modal'
        }
    },
    ur: {
        nav: {
            home: 'ہوم',
            about: 'تعارف',
            videos: 'ویڈیوز',
            experience: 'تجربہ',
            projects: 'منصوبے',
            generative_ai: 'جنریٹیو اے آئی',
            awards: 'ایوارڈز',
            contact: 'رابطہ'
        },
        hero: {
            title: 'عبدالمقیت',
            subtitle: 'لیڈ انریل ڈویلپر (سی++)',
            description: 'انریل انجن کے ساتھ عمیق تجربات بنانا، اے آئی ٹیکنالوجیز کو ضم کرنا، اور تکنیکی جدت کی قیادت',
            view_projects: 'منصوبے دیکھیں',
            get_in_touch: 'رابطہ کریں'
        },
        sections: {
            about_title: 'میرا تعارف',
            education_title: 'تعلیم',
            skills_title: 'تکنیکی مہارتیں',
            awards_title: 'ایوارڈز اور قیادت',
            videos_title: 'پروجیکٹ شوکیس',
            projects_title: 'متعلقہ منصوبے',
            experience_title: 'تجربہ',
            contact_title: 'رابطے میں رہیں',
            contact_subtitle: 'آئیے آپ کے اگلے گیم ڈویلپمنٹ پروجیکٹ پر تعاون کریں'
        },
        form: {
            name_placeholder: 'آپ کا نام',
            email_placeholder: 'آپ کا ای میل',
            subject_placeholder: 'موضوع',
            message_placeholder: 'آپ کا پیغام',
            send_button: 'پیغام بھیجیں',
            name_required: 'نام ضروری ہے',
            email_required: 'ای میل ضروری ہے',
            email_invalid: 'براہ کرم درست ای میل درج کریں',
            message_required: 'پیغام ضروری ہے',
            success_message: 'آپ کے پیغام کا شکریہ! میں جلد ہی آپ سے رابطہ کروں گا۔',
            error_message: 'براہ کرم تمام ضروری فیلڈز درست طریقے سے پر کریں۔'
        },
        footer: {
            about_heading: 'تعارف',
            about_text: 'AB {Ark} Private Limited میں لیڈ انریل ڈویلپر، سی++، اے آئی انٹیگریشن، اور گیم ڈویلپمنٹ میں مہارت',
            quick_links: 'فوری لنکس',
            connect: 'رابطہ',
            copyright: 'تمام حقوق محفوظ ہیں۔'
        },
        loading: {
            repos: 'ریپوزٹریز لوڈ ہو رہی ہیں...',
            error: 'ریپوزٹریز لوڈ نہیں ہو سکیں۔ براہ کرم بعد میں دوبارہ کوشش کریں۔'
        },
        aria: {
            toggle_menu: 'نیویگیشن مینو ٹوگل کریں',
            toggle_theme: 'تھیم ٹوگل کریں',
            toggle_language: 'زبان تبدیل کریں',
            scroll_down: 'تعارف سیکشن تک سکرول کریں',
            close_modal: 'ویڈیو موڈل بند کریں'
        }
    }
};

/**
 * Gets the current language from localStorage or returns default
 */
function getCurrentLanguage() {
    try {
        const stored = localStorage.getItem(LANG_STORAGE_KEY);
        if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
            return stored;
        }
    } catch (error) {
        console.error('Error reading language preference:', error);
    }
    return DEFAULT_LANGUAGE;
}

/**
 * Sets the current language and saves to localStorage
 */
function setCurrentLanguage(lang) {
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
        console.warn(`Unsupported language: ${lang}`);
        return;
    }
    
    try {
        localStorage.setItem(LANG_STORAGE_KEY, lang);
        document.documentElement.setAttribute('lang', lang);
        
        // Set text direction for RTL languages
        if (lang === 'ur') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }
    } catch (error) {
        console.error('Error saving language preference:', error);
    }
}

/**
 * Gets translation for a given key path
 */
function getTranslation(key, lang) {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
        if (value && typeof value === 'object') {
            value = value[k];
        } else {
            return key; // Return key if translation not found
        }
    }
    
    return value || key;
}

/**
 * Updates all elements with data-i18n attribute
 */
function updatePageTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);
        
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getTranslation(key, lang);
        
        if (translation) {
            element.setAttribute('placeholder', translation);
        }
    });
    
    // Update aria-labels
    const ariaElements = document.querySelectorAll('[data-i18n-aria]');
    ariaElements.forEach(element => {
        const key = element.getAttribute('data-i18n-aria');
        const translation = getTranslation(key, lang);
        
        if (translation) {
            element.setAttribute('aria-label', translation);
        }
    });
    
    // Track analytics event
    trackEvent('Language', 'Change', lang);
}

/**
 * Toggles between supported languages
 */
function toggleLanguage() {
    const currentLang = getCurrentLanguage();
    const currentIndex = SUPPORTED_LANGUAGES.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % SUPPORTED_LANGUAGES.length;
    const nextLang = SUPPORTED_LANGUAGES[nextIndex];
    
    setCurrentLanguage(nextLang);
    updatePageTranslations(nextLang);
    
    // Update button text
    const langBtn = document.getElementById('language-toggle');
    if (langBtn) {
        const langText = langBtn.querySelector('.lang-text');
        if (langText) {
            langText.textContent = nextLang.toUpperCase();
        }
    }
    
    showNotification(`Language changed to ${nextLang === 'en' ? 'English' : 'اردو'}`, 'info', 2000);
}

/**
 * Initializes i18n system
 */
function initI18n() {
    const currentLang = getCurrentLanguage();
    setCurrentLanguage(currentLang);
    updatePageTranslations(currentLang);
    
    // Note: Language toggle button has been removed from the UI
    // The i18n system still works for potential future use
}

// Initialize i18n when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}
