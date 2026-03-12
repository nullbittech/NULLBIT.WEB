document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initSmoothScroll();
    initCTAButtons();
    initLanguage();
    initBackToTop();
    initContactForm();
    initTypewriter();
});

// ==================== LANGUAGE SUPPORT ====================
const translations = {
    en: {
        nav_solutions: "Solutions",
        nav_expertise: "Expertise",
        nav_about: "About",
        nav_contact: "Contact",
        nav_cta: "Get Started",
        lang_text: "AR",
        hero_badge: "Enterprise Systems & Automation",
        hero_title: "ARCHITECTING SMART SYSTEMS",
        hero_subtitle: "We transform your operations into an automated, self-sustaining digital ecosystem. Smart solutions, integrated systems, and scalable infrastructure to eliminate bottlenecks and multiply your growth.",
        hero_primary_cta: "Explore Our Solutions",
        hero_secondary_cta: "View Our Work",
        stat_projects: "Systems Built",
        stat_satisfaction: "Automated Processes",
        stat_experience: "Years Experience",
        solutions_badge: "Our Expertise",
        solutions_title: "Intelligent Automation Solutions",
        solutions_description: "We orchestrate cutting-edge technologies to build transformative, end-to-end operational systems that run your business on autopilot.",
        service_ai_title: "Smart Automation",
        service_ai_desc: "Harness intelligent workflows and bots to eliminate manual tasks, automate corporate processes, and make data-driven decisions instantly.",
        service_ai_f1: "Workflow Automation",
        service_ai_f2: "Predictive Operations",
        service_ai_f3: "Smart Bots & Assistants",
        service_ai_f4: "Process Optimization",
        service_cloud_title: "Enterprise System Integration",
        service_cloud_desc: "Connect your fragmented tools into one centralized, custom-built dashboard. We ensure your data flows seamlessly across all departments.",
        service_cloud_f1: "Centralized Dashboards",
        service_cloud_f2: "Third-Party API Integrations",
        service_cloud_f3: "Secure Data Architecture",
        service_cloud_f4: "Scalable Cloud Hosting",
        service_blockchain_title: "Secure Infrastructure",
        service_blockchain_desc: "Build highly secure, transparent architectures that protect your sensitive business logic and scale with your enterprise needs.",
        service_blockchain_f1: "Data Integrity Solutions",
        service_blockchain_f2: "Decentralized Storage",
        service_blockchain_f3: "Access Control Systems",
        service_blockchain_f4: "Zero-Downtime Deployment",
        service_security_title: "Cybersecurity & Monitoring",
        service_security_desc: "Protect your digital assets with enterprise-grade security solutions, continuous monitoring, and automated threat response.",
        service_security_f1: "System Audits",
        service_security_f2: "Real-time Monitoring",
        service_security_f3: "Encryption Solutions",
        service_security_f4: "Compliance Management",
        service_mobile_title: "Operational Apps",
        service_mobile_desc: "Take control anywhere. We build powerful cross-platform applications specifically designed for management, reporting, and team collaboration.",
        service_mobile_f1: "Management PWA Apps",
        service_mobile_f2: "Cross-Platform Tools",
        service_mobile_f3: "Real-time Syncing",
        service_mobile_f4: "Offline Capability",
        service_design_title: "Dashboard UI/UX",
        service_design_desc: "Complex systems require intuitive controls. We design beautiful, frictionless interfaces that make managing your enterprise a breeze.",
        service_design_f1: "Data Visualization",
        service_design_f2: "User-Centric Workflows",
        service_design_f3: "Admin Panels",
        service_design_f4: "Design Systems",
        nav_portfolio: "Systems",
        portfolio_badge: "Our Deployments",
        portfolio_title: "Featured Enterprise Systems",
        portfolio_description: "Explore the custom architecture and automated systems we've successfully deployed to scale our clients' operations.",
        proj1_title: "Safe Investment System",
        proj1_desc: "A comprehensive investment management system in Arabic with a professional interface and Supabase database.",
        proj1_f1: "React 18 & TypeScript",
        proj1_f2: "Tailwind CSS & Recharts",
        proj1_f3: "Supabase Database & RLS",
        proj_link: "View System ←",
        proj2_title: "Smart Delivery System",
        proj2_desc: "An integrated parcel delivery management system connecting suppliers, drivers, and merchants in real-time.",
        proj2_f1: "Admin Dashboard Control",
        proj2_f2: "Driver Logistics App",
        proj2_f3: "Supplier Portal",
        proj3_title: "Tecnomarkting Platform",
        proj3_desc: "An innovative digital ecosystem providing integrated services to track marketing campaigns and app development.",
        proj3_f1: "E-marketing Automation",
        proj3_f2: "Field Tracking",
        proj3_f3: "App Lifecycle Management",
        proj4_title: "Al-Itmam Operations",
        proj4_desc: "A digital presence and operations showcase for a leading contracting company specializing in Saudi quality building.",
        proj4_f1: "Operational Showcase",
        proj4_f2: "Residential & Commercial",
        proj4_f3: "Client Lead Generation",
        proj5_title: "Arak Reward Ecosystem",
        proj5_desc: "An automated ad-tracking application and reward system that lets users earn seamlessly while shopping.",
        proj5_f1: "Ad-Sync Algorithms",
        proj5_f2: "Automated Payouts",
        proj5_f3: "User Engagement Loop",
        proj6_title: "Boss X E-Commerce",
        proj6_desc: "An exclusive e-commerce engine designed with a focus on privacy, power, and high-conversion funnels.",
        proj6_f1: "Secure Transactions",
        proj6_f2: "Inventory Management",
        proj6_f3: "Automated Fulfillment",
        founder_title: "Lead System Architect",
        founder_desc: "Enterprise Architect (MX17) - @mamobarjos",
        founder_bio: "I don't just write code; I architect intelligent, integrated systems that automate chaos and scale businesses powerfully.",
        about_badge: "About Nullbit",
        about_title: "From Manual to Automated",
        about_subtitle: "Engineering Digital Ecosystems",
        about_desc1: "In 2019, we realized a critical flaw in the market: businesses were suffering from manual bottlenecks and fragmented software. Nullbit wasn't born just to build apps; we were established to architect solutions. We act as your high-level technical partners, identifying operational chaos and replacing it with elegant, self-sustaining digital automation.",
        about_desc2: "We specialize in developing cohesive systems where your dashboards, mobile apps, and databases talk to each other seamlessly. Over the years, we have mastered the art of Enterprise Architecture, ensuring that every piece of software we build reduces your overhead, connects your team, and multiplies your bottom line.",
        about_why_title: "Why Nullbit?",
        about_f1_title: "System Thinkers:",
        about_f1_desc: "We look at the big picture. We don't just solve a single bug; we optimize the entire workflow of your business.",
        about_f2_title: "Automation First:",
        about_f2_desc: "Our priority is to eliminate manual data entry and repetitive tasks, giving your team their time back.",
        about_f3_title: "Scalable Foundations:",
        about_f3_desc: "Built on rock-solid \"zero and one\" architecture, ensuring your system can handle 10 or 10,000 users flawlessly.",
        about_footer: "Nullbit... Automating the Future, One System at a Time.",
        contact_badge: "Get in Touch",
        contact_title: "Automate Your Business",
        contact_description: "Ready to eliminate bottlenecks and build your custom enterprise system? Let's engineer your solution.",
        contact_email_label: "Email Us",
        contact_phone_label: "Call Us",
        contact_location_label: "Location",
        contact_location_value: "Amman, Airport Road",
        form_name: "Full Name",
        form_name_ph: "John Doe",
        form_email: "Email Address",
        form_email_ph: "john@example.com",
        form_subject: "Subject",
        form_subject_ph: "How can we help?",
        form_message: "Tell us about your operational bottlenecks...",
        form_message_ph: "Tell us about your project...",
        form_submit: "Initiate System Consult",
        footer_rights: "All rights reserved.",
        terminal_header: "System Initialization",
        game_score: "Modules Synced: {score}/5",
        game_start_title: "DEPLOY SYSTEM",
        game_start_desc: "Sync 5 modules to go live.",
        game_start_btn: "INITIALIZE",
        game_over_title: "DEPLOYMENT FAILED",
        game_retry_btn: "REBOOT SEQUENCE",
        game_success_msg: "System Online. Welcome to Nullbit.",
        typewriter_phrases: [
            "Smart Automation Solutions",
            "Enterprise Integration",
            "AI-Powered Operations",
            "High-Security Systems",
            "Digital Transformation"
        ]
    },
    ar: {
        nav_solutions: "الحلول",
        nav_expertise: "الخبرات",
        nav_about: "من نحن",
        nav_contact: "اتصل بنا",
        nav_cta: "أتمت أعمالك",
        lang_text: "EN",
        hero_badge: "بناء أنظمة مؤسسية فائقة الأمان",
        hero_title: "هندسة نظم برمجية احترافية وآمنة",
        hero_subtitle: "نوفر حلولاً برمجية متطورة مصممة بأعلى معايير الأمان والاحترافية.<br>نحمي بياناتك ونؤتمت أعمالك لبناء بيئة رقمية مستدامة وقابلة للتوسع الاستراتيجي.",
        hero_primary_cta: "استكشف حلولنا",
        hero_secondary_cta: "شاهد نماذجنا",
        stat_projects: "نظاماً مدمجاً",
        stat_satisfaction: "مسار عمل مؤتمت",
        stat_experience: "سنوات خبرة",
        solutions_badge: "خبراتنا الهندسية",
        solutions_title: "حلول تقنية آمنة واحترافية",
        solutions_description: "نعتمد أدق المعايير الأمنية لبناء أنظمة تشغيل تدير أعمالك بكفاءة عالية وحماية مطلقة.",
        service_ai_title: "أتمتة ذكية ومحكمة",
        service_ai_desc: "تتكامل حلول الذكاء الاصطناعي لدينا مع إجراءات أمنية صارمة لضمان معالجة بياناتك بسرعة، دقة، وأمان تام.",
        service_ai_f1: "أتمتة عمليات احترافية",
        service_ai_f2: "تحليل بيانات موثوق",
        service_ai_f3: "تطبيقات ذكية وآمنة",
        service_ai_f4: "تحسين الجودة الإدارية",
        service_cloud_title: "بنية تحتية سحابية متقدمة",
        service_cloud_desc: "نربط أدوار مؤسستك في بيئة سحابية مشفرة ومستقرة، تضمن تدفق البيانات بسلاسة تامة وموثوقية عالية.",
        service_cloud_f1: "لوحات تحكم مؤمنة",
        service_cloud_f2: "ربط واجهات API حصينة",
        service_cloud_f3: "تشفير وحماية البيانات",
        service_cloud_f4: "استضافة سحابية معتمدة",
        service_blockchain_title: "حماية سيبرانية مطلقة",
        service_blockchain_desc: "نصمم هياكل لامركزية ترتكز على مبدأ انعدام الثقة (Zero Trust) لتوفير أقصى درجات الحماية لمعلومات شركتك.",
        service_blockchain_f1: "أنظمة سجلات مشفرة",
        service_blockchain_f2: "إدارة هويات لامركزية",
        service_blockchain_f3: "تأمين المعاملات الدقيقة",
        service_blockchain_f4: "استدامة بدون توقف",
        service_security_title: "مراقبة وتأمين شامل",
        service_security_desc: "حماية استباقية لأصولك الرقمية من خلال أنظمة أمان مؤسسية، رصد مستمر، واستجابة فورية لأي تهديدات سيبرانية.",
        service_security_f1: "تدقيق أمني احترافي",
        service_security_f2: "مراقبة استباقية 24/7",
        service_security_f3: "بروتوكولات التشفير",
        service_security_f4: "ضمان الامتثال الأمني",
        service_mobile_title: "تطبيقات إدارية آمنة",
        service_mobile_desc: "طوّرنا تطبيقات جوال للمدراء والموظفين تتميز بتجربة استخدام سلسة وبروتوكولات حماية متقدمة للاستخدام الداخلي.",
        service_mobile_f1: "تطبيقات عمليات مشفرة",
        service_mobile_f2: "تكامل بين الأنظمة",
        service_mobile_f3: "مزامنة بيانات آمنة",
        service_mobile_f4: "أداء عالي الموثوقية",
        service_design_title: "واجهات مؤسسية مدروسة",
        service_design_desc: "نصمم تجارب مستخدم تركز على الوضوح والكفاءة، ليتمكن أعضاء فريقك من إدارة الأنظمة المعقدة بأعلى درجات السهولة والاحترافية.",
        service_design_f1: "تصوير احترافي للبيانات",
        service_design_f2: "هيكلة معلومات واضحة",
        service_design_f3: "لوحات تحكم متقدمة",
        service_design_f4: "معايير تصميم قياسية",
        nav_portfolio: "الأنظمة",
        portfolio_badge: "مشاريعنا المنفذة",
        portfolio_title: "أنظمة تشغيل متكاملة",
        portfolio_description: "استعرض أبرز الهياكل البرمجية والحلول الآمنة التي أطلقناها بنجاح لدعم وتنمية قدرات عملائنا.",
        proj1_title: "نظام إدارة الاستثمار",
        proj1_desc: "نظام إدارة استثمارات مؤسسي يوفر واجهة احترافية وقاعدة بيانات عالية الأمان.",
        proj1_f1: "React 18 & TypeScript",
        proj1_f2: "تشفير وحماية RLS",
        proj1_f3: "معمارية أمنية متقدمة",
        proj_link: "عرض النظام ←",
        proj2_title: "نظام النقل اللوجستي",
        proj2_desc: "منصة عمليات لوجستية متكاملة لربط كافة أطراف النقل ضمن شبكة مشفرة ولحظية.",
        proj2_f1: "تحكم إداري مركزي",
        proj2_f2: "تطبيق لوجستي آمن",
        proj2_f3: "بوابة موردين موثوقة",
        proj3_title: "منصة التتبع الشامل",
        proj3_desc: "بيئة احترافية لتوثيق وإدارة أداء الحملات والمشاريع وفقاً لأعلى معايير المؤسسات.",
        proj3_f1: "أتمتة العمليات",
        proj3_f2: "تقارير دقيقة ولحظية",
        proj3_f3: "إدارة دورة حياة آمنة",
        proj4_title: "نظام عمليات الإتمام",
        proj4_desc: "منصة مؤسسية رقمية لإدارة جودة التنفيذ الهندسي بأعلى مقاييس الرقابة والمتابعة.",
        proj4_f1: "إدارة العمليات الميدانية",
        proj4_f2: "مشاريع سكنية وتجارية",
        proj4_f3: "نظام تعاقد إلكتروني",
        proj5_title: "تطبيق أراك الاحترافي",
        proj5_desc: "تطبيق تسويقي يعتمد على خوارزميات تأمين عالية لضمان التوزيع العادل للمكافآت والتوثيق المالي.",
        proj5_f1: "محرك خوارزمي دقيق",
        proj5_f2: "محفظة مالية مشفرة",
        proj5_f3: "مزامنة لحظية للعمليات",
        proj6_title: "نظام مبيعات Boss X",
        proj6_desc: "منصة تجارة إلكترونية حصرية تعتمد على نهج الخصوصية القصوى وتأمين بيانات العملاء.",
        proj6_f1: "بوابات دفع مؤمنة بالكامل",
        proj6_f2: "إدارة دقيقة للمخزون",
        proj6_f3: "قواعد بيانات محمية",
        founder_title: "مستشار ومدير النظم",
        founder_desc: "خبير معمارية النظم والمطورية (MX17) - @mamobarjos",
        founder_bio: "خبرة احترافية في هندسة الأنظمة المؤسسية. نحرص على دمج الأمان المطلق مع الأداء السلس لنبني بنية لا تتزعزع لمشروعك.",
        about_badge: "قصة نل بيت",
        about_title: "من الاحتياج إلى نظام متكامل",
        about_subtitle: "احترافية، أمان، واستدامة رقمية",
        about_desc1: "منذ تأسيس نل بيت في عام 2019، التزمنا بمبدأ واحد: توفير برمجيات مؤسسية ترتكز على الجودة العالية، الأمان السيبراني، والتكامل الكامل للبيانات. نحن نعمل كشركاء تقنيين للمؤسسات التي تسعى لعبور مرحلة الفوضى الرقمية نحو بيئة إدارية احترافية، مأمونة، ومنظمة.",
        about_desc2: "تخصصنا يتمحور حول هندسة معمارية نظام تضمن التواصل المشفر والسريع بين لوحات التحكم، التطبيقات، وقواعد البيانات. هدفنا ليس مجرد تسليم أكواد برمجية، بل توفير حصن تقني متين يواكب نمو أعمالك ويحميها في نفس الوقت.",
        about_why_title: "لماذا نل بيت؟",
        about_f1_title: "هندسة برمجية رصينة:",
        about_f1_desc: "نعتمد أفضل المعايير القياسية في هندسة البرمجيات لنقدم شفرة برمجية (Code) نظيفة، قابلة للتطوير، ومستدامة على المدى الطويل.",
        about_f2_title: "أولوية الأمان والموثوقية:",
        about_f2_desc: "تخضع جميع أنظمتنا لبروتوكولات اختبار أمنية صارمة ومكثفة، لضمان حماية بياناتك الثمينة وتحصينها ضد أية اختراقات.",
        about_f3_title: "أداء فائق واستقرار استثنائي:",
        about_f3_desc: "نُجرّد أنظمتنا من التعقيدات البرمجية الزائدة لنضمن أعلى سرعات استجابة ممكنة، وتجربة مستخدم سلسة وخالية من العوائق.",
        about_footer: "نل بيت... نبني ثقتك بالنظام، سطراً تلو الآخر.",
        contact_badge: "دعنا نتعاون",
        contact_title: "أتمت أعمالك بأمان تام",
        contact_description: "إذا كنت تبحث عن شريك تقني يجمع بين المهارة الاحترافية والالتزام الأمني للتطوير، فنحن في خدمتك.",
        contact_email_label: "البريد الإلكتروني الرسمي",
        contact_phone_label: "هاتف المؤسسة",
        contact_location_label: "المركز الرئيسي",
        contact_location_value: "عمّان، طريق المطار",
        form_name: "الاسم الكامل / الصفة",
        form_name_ph: "مثال: أحمد محمد",
        form_email: "البريد الإلكتروني التجاري",
        form_email_ph: "name@company.com",
        form_subject: "طبيعة المشروع",
        form_subject_ph: "كيف يمكننا مساعدتك؟",
        form_message: "الرسالة",
        form_message_ph: "صف احتياجات مؤسستك التقنية والأمنية...",
        form_submit: "إرسال طلب استشارة مجاني",
        footer_rights: "جميع الحقوق محفوظة بالكامل.",
        terminal_header: "وحدة معالجة الأنظمة المؤمنة",
        game_score: "البيانات الموثقة: {score}/5",
        game_start_title: "توثيق النظام الأساسي",
        game_start_desc: "قم بتوثيق 5 بروتوكولات للتشغيل.",
        game_start_btn: "بدء التوثيق الآمن",
        game_over_title: "حدث خطأ أمني - تم الإيقاف",
        game_retry_btn: "إعادة التحقق",
        game_success_msg: "النظام موثوق ومتصل. مرحباً بك.",
        typewriter_phrases: [
            "أنظمة مؤسسية آمنة",
            "أتمتة وحلول ذكية",
            "هندسة برمجيات احترافية",
            "بنية رقمية موثوقة",
            "أنظمة عالية الأمان"
        ]
    }
};

function initLanguage() {
    const langSwitchBtn = document.getElementById('langSwitch');
    let currentLang = localStorage.getItem('nullbit_lang') || 'en';

    const updateContent = (lang) => {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update placeholders
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Update attribute lang and dir
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Update language switcher text
        const langText = langSwitchBtn.querySelector('.lang-text');
        langText.innerText = translations[lang].lang_text;

        // Restart Typewriter with new language phrases
        initTypewriter();

        // Save preference
        localStorage.setItem('nullbit_lang', lang);
    };

    // Initial load
    updateContent(currentLang);

    langSwitchBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        updateContent(currentLang);
    });
}

// ==================== NAVBAR SCROLL EFFECT ====================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (mobileMenuBtn && navContainer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('open');
            navContainer.classList.toggle('menu-open');
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('open');
                navContainer.classList.remove('menu-open');
            });
        });
    }
}

// ==================== CODE RAIN ANIMATION ====================
function initCodeRain() {
    const canvas = document.getElementById('codeRainCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters to display
    const chars = '01';
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // Array to store y-position of each column
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }

    function draw() {
        // Semi-transparent black to create fade effect
        ctx.fillStyle = 'rgba(10, 14, 20, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set text style
        ctx.fillStyle = '#00ff88';
        ctx.font = fontSize + 'px monospace';

        // Loop through drops
        for (let i = 0; i < drops.length; i++) {
            // Random character
            const text = charArray[Math.floor(Math.random() * charArray.length)];

            // Draw character
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Reset drop to top randomly
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Increment y position
            drops[i]++;
        }
    }

    let lastTime = 0;
    const fps = 20;
    const interval = 1000 / fps;

    function animate(currentTime) {
        requestAnimationFrame(animate);

        const delta = currentTime - lastTime;
        if (delta > interval) {
            lastTime = currentTime - (delta % interval);
            draw();
        }
    }

    requestAnimationFrame(animate);

    // Resize canvas on window resize
    window.addEventListener('resize', debounce(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, 250));
}

// Animation speed and settings for previously tracked values can go here if needed.


// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger effect
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);

            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== CTA BUTTON INTERACTIONS ====================
function initCTAButtons() {
    const navCtaBtn = document.getElementById('navCtaBtn');
    const heroCtaBtn = document.getElementById('heroCtaBtn');
    const heroSecondaryBtn = document.getElementById('heroSecondaryBtn');

    // Add ripple effect to buttons
    const createRipple = (event) => {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
        ripple.classList.add('ripple');

        const rippleElement = button.getElementsByClassName('ripple')[0];
        if (rippleElement) {
            rippleElement.remove();
        }

        button.appendChild(ripple);
    };

    // CTA Actions
    if (navCtaBtn) {
        navCtaBtn.addEventListener('click', (e) => {
            createRipple(e);
            scrollToSection('contact');
        });
    }

    if (heroCtaBtn) {
        heroCtaBtn.addEventListener('click', (e) => {
            createRipple(e);
            scrollToSection('solutions');
        });
    }

    if (heroSecondaryBtn) {
        heroSecondaryBtn.addEventListener('click', (e) => {
            createRipple(e);
            scrollToSection('portfolio');
        });
    }
}


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ==================== CURSOR GLOW EFFECT ====================
function initCursorGlow() {
    const glow = document.getElementById('cursorGlow');

    document.addEventListener('mousemove', (e) => {
        if (glow) {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        }

        // Service card interactions
        const target = e.target.closest('.service-card');
        if (target) {
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            target.style.setProperty('--mouse-x', x + 'px');
            target.style.setProperty('--mouse-y', y + 'px');
        }
    });

    // Pulse effect on click
    document.addEventListener('mousedown', () => {
        if (glow) {
            glow.style.width = '300px';
            glow.style.height = '300px';
            glow.style.background = 'radial-gradient(circle, rgba(0, 255, 136, 0.15) 0%, transparent 70%)';
        }
    });

    document.addEventListener('mouseup', () => {
        if (glow) {
            glow.style.width = '400px';
            glow.style.height = '400px';
            glow.style.background = 'radial-gradient(circle, rgba(0, 255, 136, 0.08) 0%, transparent 70%)';
            setTimeout(() => {
                glow.style.width = '';
                glow.style.height = '';
                glow.style.background = '';
            }, 400);
        }
    });
}

// ==================== BACK TO TOP ====================
function initBackToTop() {
    const btn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== CONTACT FORM ====================
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', () => {
            const btn = form.querySelector('button[type="submit"]');
            
            // Visual feedback before Formsubmit redirects
            btn.innerHTML = '<span>Sending...</span>';
            btn.disabled = true;
        });
    }
}

// ==================== PERFORMANCE OPTIMIZATION ====================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized resize handler
const handleResize = debounce(() => {
    // Add any resize-specific logic here
}, 250);

window.addEventListener('resize', handleResize);

// ==================== SERVICE CARD HOVER EFFECTS ====================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.setProperty('--hover-scale', '1.02');
    });

    card.addEventListener('mouseleave', function () {
        this.style.setProperty('--hover-scale', '1');
    });

// Heavy 3D movement effect removed for performance.
});

// ==================== TYPING EFFECT FOR CODE WINDOW ====================
function initTypingEffect() {
    const codeLines = document.querySelectorAll('.code-line');
    let delay = 0;

    codeLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.willChange = 'opacity';
        setTimeout(() => {
            line.style.transition = 'opacity 0.3s ease-in';
            line.style.opacity = '1';
        }, delay);
        delay += 100;
    });
}

// Initialize typing effect when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            initTypingEffect();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const heroSection = document.getElementById('hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// ==================== CONSOLE BRANDING ====================
console.log('%c🚀 NULLBIT', 'font-size: 40px; font-weight: bold; background: linear-gradient(135deg, #00ff88, #00d4ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%cForging the Future in Code', 'font-size: 16px; color: #00ff88; font-weight: 600;');

// ==================== PARTICLES BACKGROUND ====================
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 30) + 1;
            this.velocity = {
                x: (Math.random() - 0.5) * 1,
                y: (Math.random() - 0.5) * 1
            };
        }

        draw() {
            ctx.fillStyle = 'rgba(0, 255, 136, 0.4)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }

        update() {
            this.x += this.velocity.x;
            this.y += this.velocity.y;

            if (this.x > canvas.width || this.x < 0) this.velocity.x *= -1;
            if (this.y > canvas.height || this.y < 0) this.velocity.y *= -1;

            if (mouse.x !== null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    const directionX = forceDirectionX * force * 5;
                    const directionY = forceDirectionY * force * 5;
                    this.x -= directionX;
                    this.y -= directionY;
                }
            }
        }
    }

    function init() {
        particles = [];
        const numberOfParticles = (canvas.width * canvas.height) / 12000;
        for (let i = 0; i < numberOfParticles; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    ctx.strokeStyle = `rgba(0, 255, 136, ${0.1 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    init();
    animate();
}

// ==================== TYPEWRITER EFFECT ====================
let typewriterTimeout;
function initTypewriter() {
    const textEl = document.getElementById('typewriterText');
    if (!textEl) return;

    const lang = document.documentElement.getAttribute('lang') || 'en';
    const phrases = translations[lang].typewriter_phrases;
    if (!phrases) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    if (typewriterTimeout) clearTimeout(typewriterTimeout);

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            textEl.innerText = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textEl.innerText = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentPhrase.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 500;
        }

        typewriterTimeout = setTimeout(type, speed);
    }

    type();
}
