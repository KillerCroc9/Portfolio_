/* Smooth scroll to URL #fragment on load (respects prefers-reduced-motion). */
(function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var hash = window.location.hash;
    if (!hash || hash === '#') return;
    var id = decodeURIComponent(hash.slice(1));
    if (!id) return;

    function scrollToTarget() {
        var el = document.getElementById(id);
        if (!el) return;
        try {
            history.scrollRestoration = 'manual';
        } catch (e) {}
        window.scrollTo(0, 0);
        window.requestAnimationFrame(function () {
            window.requestAnimationFrame(function () {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scrollToTarget);
    } else {
        scrollToTarget();
    }
})();
