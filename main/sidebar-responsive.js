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

const followingsbox = document.getElementById('followings');
const sideFooter = document.getElementById('side-footer');

const content = document.getElementById('content');

const contentContainer = document.getElementById('thumbnails-cont');
const contentBoxes = document.getElementById('thumbnails-boxes');
const contentBoxes2 = document.getElementById('thumbnails-boxes2');
const contentBoxes3 = document.getElementById('thumbnails-boxes3');
const contentBoxes4 = document.getElementById('thumbnails-boxes4');

const insideparag = document.getElementById('thumbnails-inside-parag');
const insideparag2 = document.getElementById('thumbnails-inside-parag2');
const insideparag3 = document.getElementById('thumbnails-inside-parag3');
const insideparag4 = document.getElementById('thumbnails-inside-parag4');
let menuChecker = true;
menuToggle.addEventListener('click', function(){
    if (menuChecker){
        sidebar.style.width = '80px';

        homeSidebar.style.display = 'block';
        animeSidebar.style.display = 'block';
        trendSidebar.style.display = 'block';
        catSidebar.style.display = 'block';

        homeSidebar.style.height = '80px';
        animeSidebar.style.height = '80px';
        trendSidebar.style.height = '80px';
        catSidebar.style.height = '80px';

        spanHome.style.fontSize = '10px';
        spanAnime.style.fontSize = '10px';
        spanTrend.style.fontSize = '10px';
        spanCat.style.fontSize = '10px';

        spanHome.style.marginLeft= '1.7rem';
        spanAnime.style.marginLeft= '1.7rem';
        spanTrend.style.marginLeft= '1.5rem';
        spanCat.style.marginLeft= '1.5rem';

        homeSidebar.style.paddingTop= '1.5rem';
        animeSidebar.style.paddingTop= '1.5rem';
        trendSidebar.style.paddingTop= '1.5rem';
        catSidebar.style.paddingTop= '1.5rem';

        followingsbox.style.display= 'none';
        sideFooter.style.display= 'none';

        content.style.left= '80px';
        content.style.width= '94.6%';

        contentBoxes.style.height = '300px';
        contentBoxes2.style.height = '300px';
        contentBoxes3.style.height = '300px';
        contentBoxes4.style.height = '300px';

        insideparag.style.paddingTop = '9.5rem';
        insideparag2.style.paddingTop = '9.5rem';
        insideparag3.style.paddingTop = '9.5rem';
        insideparag4.style.paddingTop = '9.5rem';
        menuChecker = false;
    } else {
        sidebar.style.width = '260px';
        homeSidebar.style.display = 'flex';
        animeSidebar.style.display = 'flex';
        trendSidebar.style.display = 'flex';
        catSidebar.style.display = 'flex';
        
        spanHome.style.fontSize = '17px';
        spanAnime.style.fontSize = '17px';
        spanTrend.style.fontSize = '17px';
        spanCat.style.fontSize = '17px';

        homeSidebar.style.height = '50px';
        animeSidebar.style.height = '50px';
        trendSidebar.style.height = '50px';
        catSidebar.style.height = '50px';

        homeSidebar.style.paddingTop= '0';
        animeSidebar.style.paddingTop= '0';
        trendSidebar.style.paddingTop= '0';
        catSidebar.style.paddingTop= '0';

        content.style.left= '260px';
        content.style.width= '82.9%';

        contentBoxes.style.height = '270px';
        contentBoxes2.style.height = '270px';
        contentBoxes3.style.height = '270px';
        contentBoxes4.style.height = '270px';

        insideparag.style.paddingTop = '8.5rem';
        insideparag2.style.paddingTop = '8.5rem';
        insideparag3.style.paddingTop = '8.5rem';
        insideparag4.style.paddingTop = '8.5rem';

        followingsbox.style.display= 'block';
        sideFooter.style.display= 'block';
        menuChecker = true;
    }
})