import "/assets/sass/main.scss";

function changeServicesComponent() {
	const mediumScreenDown = window.matchMedia("(max-width: 900px)");
	const servicesContainer = document.querySelector(".services__container");
	if (mediumScreenDown.matches) {
		servicesContainer.innerHTML = `
            <div class="services__title">
                <h2 class="heading--2">Our Services</h2>
                <p>We offer services that include:</p>
            </div>

            <div class="services__card-container">
                <div class="services__card services__card--1">
                <span class="services__card__text"
                    >Software Platforms & Programs</span
                >
                </div>
                <div class="services__card services__card--2">
                    <span class="services__card__text">Robotics</span>
                </div>
                <div class="services__card services__card--3">
                    <span class="services__card__text"
                        >Web Development & Maintenance</span
                    >
                </div>
                <div class="services__card services__card--4">
                    <span class="services__card__text">
                        Digital Marketing & Content Development</span
                    >
                </div>
                <div class="services__card services__card--5">
                    <span class="services__card__text">
                        E-Commerce & Mobile Commerce</span
                    >
                </div>
                <div class="services__card services__card--6">
                    <span class="services__card__text">Social Media Marketing</span>
                </div>
                <div class="services__card services__card--7">
                    <span class="services__card__text">IT Consultancy & Services</span>
                </div>
                <div class="services__card services__card--8">
                    <span class="services__card__text">Artificial Intelligence</span>
                </div>
                <div class="services__card services__card--9">
                    <span class="services__card__text"
                        >Mobile App Design & Development</span
                    >
                </div>
                <div class="services__card services__card--10">
                    <span class="services__card__text">Automation</span>
                </div>
                <div class="services__card services__card--11">
                    <span class="services__card__text">Internet of Things IOT</span>
                </div>
                <div class="services__card services__card--12">
                    <span class="services__card__text">Coming Soon</span>
                </div>
            </div>

            
        `;
	} else {
		servicesContainer.innerHTML = `
            <div class="services__title">
                <h2 class="heading--2">Our Services</h2>
                <p>We offer services that include:</p>
            </div>

            <div class="services__card services__card--1">
                <span class="services__card__text"
                    >Software Platforms & Programs</span
                >
            </div>
            <div class="services__card services__card--2">
                <span class="services__card__text">Robotics</span>
            </div>
            <div class="services__card services__card--3">
                <span class="services__card__text"
                    >Web Development & Maintenance</span
                >
            </div>
            <div class="services__card services__card--4">
                <span class="services__card__text">
                    Digital Marketing & Content Development</span
                >
            </div>
            <div class="services__card services__card--5">
                <span class="services__card__text">
                    E-Commerce & Mobile Commerce</span
                >
            </div>
            <div class="services__card services__card--6">
                <span class="services__card__text">Social Media Marketing</span>
            </div>
            <div class="services__card services__card--7">
                <span class="services__card__text">IT Consultancy & Services</span>
            </div>
            <div class="services__card services__card--8">
                <span class="services__card__text">Artificial Intelligence</span>
            </div>
            <div class="services__card services__card--9">
                <span class="services__card__text"
                    >Mobile App Design & Development</span
                >
            </div>
            <div class="services__card services__card--10">
                <span class="services__card__text">Automation</span>
            </div>
            <div class="services__card services__card--11">
                <span class="services__card__text">Internet of Things IOT</span>
            </div>
            <div class="services__card services__card--12">
                <span class="services__card__text">Coming Soon</span>
            </div>
    `;
	}
}
changeServicesComponent();
window.onresize = changeServicesComponent;
