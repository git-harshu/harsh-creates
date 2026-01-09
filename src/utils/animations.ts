export const smoothTransition = {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1.0], // Premium smooth easing
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: smoothTransition,
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};