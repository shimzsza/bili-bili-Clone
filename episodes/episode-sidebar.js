const menuToggle = document.getElementById('menu-bar');
const sidebar = document.getElementById('sidebar-mainbox');


const homeSidebar = document.getElementById('menu-home-tag');
const animeSidebar = document.getElementById('menu-anime-tag');
const trendSidebar = document.getElementById('menu-trend-tag');
const catSidebar = document.getElementById('menu-cat-tag');

const spanHome = document.getElementById('span-home');
const spanAnime = document.getElementById('span-anime');
const spanTrend = document.getElementById('span-trend');
const spanCat = document.getElementById('span-cat');

const sidebarIcon1 = document.getElementById('sidebar-icon1');
const sidebarIcon2 = document.getElementById('sidebar-icon2');
const sidebarIcon3 = document.getElementById('sidebar-icon3');
const sidebarIcon4 = document.getElementById('sidebar-icon4');

const followingsbox = document.getElementById('followings');
const sideFooter = document.getElementById('side-footer');

menuToggle.addEventListener('click', function () {
    sidebarMainbox.classList.toggle('sidebar-collapsed');
});

        sidebar.style.width = '0px'
        homeSidebar.style.width = '0px'
        animeSidebar.style.width = '0px'
        trendSidebar.style.width = '0px'
        catSidebar.style.width = '0px'

        spanHome.style.display = 'none'
        spanAnime.style.display = 'none'
        spanTrend.style.display = 'none'
        spanCat.style.display = 'none'

        sidebarIcon1.style.display = 'none'
        sidebarIcon2.style.display = 'none'
        sidebarIcon3.style.display = 'none'
        sidebarIcon4.style.display = 'none'

        followingsbox.style.display = 'none'
        sideFooter.style.display = 'none'


let menuClickChecker = true;
menuToggle.addEventListener ('click', function(){
    if (menuClickChecker) {
        sidebar.style.width = '260px'
        homeSidebar.style.width = '260px'
        animeSidebar.style.width = '260px'
        trendSidebar.style.width = '260px'
        catSidebar.style.width = '260px'

        spanHome.style.display = 'block'
        spanAnime.style.display = 'block'
        spanTrend.style.display = 'block'
        spanCat.style.display = 'block'

        sidebarIcon1.style.display = 'block'
        sidebarIcon2.style.display = 'block'
        sidebarIcon3.style.display = 'block'
        sidebarIcon4.style.display = 'block'

        followingsbox.style.display = 'block'
        sideFooter.style.display = 'block'
        menuClickChecker = false;
    } else {
        sidebar.style.width = '0px'
        homeSidebar.style.width = '0px'
        animeSidebar.style.width = '0px'
        trendSidebar.style.width = '0px'
        catSidebar.style.width = '0px'

        spanHome.style.display = 'none'
        spanAnime.style.display = 'none'
        spanTrend.style.display = 'none'
        spanCat.style.display = 'none'

        sidebarIcon1.style.display = 'none'
        sidebarIcon2.style.display = 'none'
        sidebarIcon3.style.display = 'none'
        sidebarIcon4.style.display = 'none'

        followingsbox.style.display = 'none'
        sideFooter.style.display = 'none'
        menuClickChecker = true;
    }
})

