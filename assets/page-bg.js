(function () {
    var style = document.createElement('style');
    style.textContent = [
        '#svg-bg{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:0;pointer-events:none;display:block;}',
        'body>*{position:relative;z-index:1;}'
    ].join('');
    document.head.appendChild(style);

    var svgNS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.id = 'svg-bg';
    svg.setAttribute('viewBox', '0 0 1200 800');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    svg.setAttribute('xmlns', svgNS);
    svg.style.background = 'transparent';

    svg.innerHTML = '<defs>'
        + '<radialGradient id="neonPulse1" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(255,255,255,1)"/><stop offset="30%" stop-color="rgba(251,146,60,1)"/><stop offset="70%" stop-color="rgba(249,115,22,0.8)"/><stop offset="100%" stop-color="rgba(249,115,22,0)"/></radialGradient>'
        + '<radialGradient id="neonPulse2" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(255,255,255,0.9)"/><stop offset="25%" stop-color="rgba(251,146,60,0.9)"/><stop offset="60%" stop-color="rgba(234,88,12,0.7)"/><stop offset="100%" stop-color="rgba(234,88,12,0)"/></radialGradient>'
        + '<radialGradient id="neonPulse3" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(255,255,255,1)"/><stop offset="35%" stop-color="rgba(251,146,60,1)"/><stop offset="75%" stop-color="rgba(234,88,12,0.6)"/><stop offset="100%" stop-color="rgba(234,88,12,0)"/></radialGradient>'
        + '<linearGradient id="threadFade1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="rgba(0,0,0,1)"/><stop offset="15%" stop-color="rgba(249,115,22,0.8)"/><stop offset="85%" stop-color="rgba(249,115,22,0.8)"/><stop offset="100%" stop-color="rgba(0,0,0,1)"/></linearGradient>'
        + '<linearGradient id="threadFade2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="rgba(0,0,0,1)"/><stop offset="12%" stop-color="rgba(251,146,60,0.7)"/><stop offset="88%" stop-color="rgba(251,146,60,0.7)"/><stop offset="100%" stop-color="rgba(0,0,0,1)"/></linearGradient>'
        + '<linearGradient id="threadFade3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="rgba(0,0,0,1)"/><stop offset="18%" stop-color="rgba(234,88,12,0.8)"/><stop offset="82%" stop-color="rgba(234,88,12,0.8)"/><stop offset="100%" stop-color="rgba(0,0,0,1)"/></linearGradient>'
        + '<filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'
        + '</defs>'
        + '<g>'
        + '<path id="thread1" d="M50 720 Q200 590 350 540 Q500 490 650 520 Q800 550 950 460 Q1100 370 1200 340" stroke="url(#threadFade1)" stroke-width="0.8" fill="none" opacity="0.8"/>'
        + '<circle r="2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#thread1"/></animateMotion></circle>'
        + '<path id="thread2" d="M80 730 Q250 620 400 570 Q550 520 700 550 Q850 580 1000 490 Q1150 400 1300 370" stroke="url(#threadFade2)" stroke-width="1.5" fill="none" opacity="0.7"/>'
        + '<circle r="3" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)"><animateMotion dur="5s" repeatCount="indefinite"><mpath href="#thread2"/></animateMotion></circle>'
        + '<path id="thread3" d="M20 710 Q180 580 320 530 Q460 480 600 510 Q740 540 880 450 Q1020 360 1200 330" stroke="url(#threadFade3)" stroke-width="1.2" fill="none" opacity="0.8"/>'
        + '<circle r="2.5" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)"><animateMotion dur="4.5s" repeatCount="indefinite"><mpath href="#thread3"/></animateMotion></circle>'
        + '<path id="thread4" d="M120 740 Q280 640 450 590 Q620 540 770 570 Q920 600 1070 510 Q1220 420 1350 390" stroke="url(#threadFade1)" stroke-width="0.6" fill="none" opacity="0.6"/>'
        + '<circle r="1.5" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)"><animateMotion dur="5.5s" repeatCount="indefinite"><mpath href="#thread4"/></animateMotion></circle>'
        + '<path id="thread5" d="M60 725 Q220 600 380 550 Q540 500 680 530 Q820 560 960 470 Q1100 380 1280 350" stroke="url(#threadFade2)" stroke-width="1.0" fill="none" opacity="0.7"/>'
        + '<circle r="2.2" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)"><animateMotion dur="4.2s" repeatCount="indefinite"><mpath href="#thread5"/></animateMotion></circle>'
        + '<path id="thread6" d="M150 735 Q300 660 480 610 Q660 560 800 590 Q940 620 1080 530 Q1220 440 1400 410" stroke="url(#threadFade3)" stroke-width="1.3" fill="none" opacity="0.6"/>'
        + '<circle r="2.8" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)"><animateMotion dur="5.2s" repeatCount="indefinite"><mpath href="#thread6"/></animateMotion></circle>'
        + '<path id="thread7" d="M40 715 Q190 585 340 535 Q490 485 630 515 Q770 545 910 455 Q1050 365 1250 335" stroke="url(#threadFade1)" stroke-width="0.9" fill="none" opacity="0.8"/>'
        + '<circle r="2" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)"><animateMotion dur="4.8s" repeatCount="indefinite"><mpath href="#thread7"/></animateMotion></circle>'
        + '<path id="thread8" d="M100 728 Q260 630 420 580 Q580 530 720 560 Q860 590 1000 500 Q1140 410 1320 380" stroke="url(#threadFade2)" stroke-width="1.4" fill="none" opacity="0.7"/>'
        + '<circle r="3" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)"><animateMotion dur="5.8s" repeatCount="indefinite"><mpath href="#thread8"/></animateMotion></circle>'
        + '<path id="thread9" d="M30 722 Q170 595 310 545 Q450 495 590 525 Q730 555 870 465 Q1010 375 1180 345" stroke="url(#threadFade3)" stroke-width="0.5" fill="none" opacity="0.6"/>'
        + '<circle r="1.2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)"><animateMotion dur="6s" repeatCount="indefinite"><mpath href="#thread9"/></animateMotion></circle>'
        + '<path id="thread10" d="M90 732 Q240 625 390 575 Q540 525 680 555 Q820 585 960 495 Q1100 405 1300 375" stroke="url(#threadFade1)" stroke-width="1.1" fill="none" opacity="0.8"/>'
        + '<circle r="2.5" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)"><animateMotion dur="4.3s" repeatCount="indefinite"><mpath href="#thread10"/></animateMotion></circle>'
        + '</g>';

    document.body.insertBefore(svg, document.body.firstChild);
}());
