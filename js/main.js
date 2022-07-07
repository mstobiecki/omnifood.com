const navigation = document.querySelector('.navigation');
const burgerButton = document.querySelector('.header__burger');
const menuBurger = document.querySelector(
	'.header__burger__icon[name="menu-outline"]'
);
const closeBurger = document.querySelector(
	'.header__burger__icon[name="close-outline"]'
);

burgerButton.addEventListener('click', () => {
	navigation.classList.toggle('navigation--open');
	closeBurger.classList.toggle('active--burger');
	menuBurger.classList.toggle('hide--burger');
});
