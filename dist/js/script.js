"use strict"

window.addEventListener('DOMContentLoaded', (e) =>{
    const btnTheme = document.querySelector('.header__wrapper__theme');
    const logo = document.querySelector('.logo-icon');
    const arrowDown = document.querySelector('.scroling');
    const circle  = document.querySelector(".header__wrapper__theme_res");

    function theme({body, btn, logo, arrow, activeAtr, activeArr, circle}){
        btn.addEventListener('click', (e) =>{
            circle.classList.toggle('active');
            if(circle.classList.contains('active')){
                body.classList.add('active');
                logo.setAttribute('src', activeAtr);
                arrow.setAttribute('src', activeArr);
                circle.style.right = '5px';
            } else {
                logo.setAttribute('src', './icons/logotype/logo.svg');
                arrow.setAttribute('src', './icons/svg/scroll-bottom.svg');
                body.classList.remove('active');
            }
        });
    }

    theme(
        {
            body: document.body,
            btn: btnTheme,
            logo: logo,
            arrow: arrowDown,
            activeAtr: "./icons/logotype/logo-theme.svg",
            activeArr: "./icons/svg/arrow-down-theme.svg",
            circle: circle
        }
    );







    let itemHead = document.querySelectorAll(".stages__item_head");

    function collapseSection(element, heightArg) {
        var sectionHeight = element.scrollHeight;
        var elementTransition = element.style.transition;
        element.style.transition = '';
        requestAnimationFrame(function () {
            element.style.height = sectionHeight + 'px';
            element.style.transition = elementTransition;
            requestAnimationFrame(function () {
                    element.style.height = heightArg;
                });
            });
        element.setAttribute('data-collapsed', 'true');
    }
    function expandSection(element) {
        var sectionHeight = element.scrollHeight;
        element.style.height = sectionHeight + 'px';
        element.setAttribute('data-collapsed', 'false');
    }
    function itemAccordion(elem, heightArg) {
        elem.forEach(item => {
            item.addEventListener("click", (e) => {
                item.querySelector("svg").classList.toggle("activeArrow");
                var isCollapsed = item.parentNode.getAttribute('data-collapsed') === 'true';
                if (isCollapsed) {
                    expandSection(item.parentNode);
                    item.parentNode.setAttribute('data-collapsed', 'false');
                } else {
                    collapseSection(item.parentNode, heightArg);
                }
            });
        });
    }
    if (window.screen.width >= 768) {
        itemAccordion(itemHead, "56px");
    } else if (window.screen.width < 768 && window.screen.width >= 425) {
        itemAccordion(itemHead, "57px");
    } else if(window.screen.width <= 480){
        itemAccordion(itemHead, "59px");
    }
    
    else {
        itemAccordion(itemHead, "49px");
    }


    const menu = document.querySelector('.header');
    const ham = document.querySelector('.ham');
    const close = document.querySelector('.close');
    const linksNavigation = document.querySelectorAll('.header__wrapper__nav_link');


    function menuOpen(close, open, header, links){
        
        open.addEventListener('click', add);
        close.addEventListener('click', remove);

        function add(){
            header.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        function remove(){
            header.classList.remove('active');
            document.body.style.overflow = '';
        }
        links.forEach(link =>{
            link.addEventListener('click', (e) => {
                remove();
            });
        });
       
    }
    menuOpen(close, ham, menu, linksNavigation);
});