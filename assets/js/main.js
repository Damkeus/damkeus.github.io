(function ($) {
	"use strict";
	jQuery(document).ready(function ($) {
		// fullpage menu
		$('.navbar-toggles, nav').click(function () {
			$('.navbar-toggles').toggleClass('navbar-on');
			$('nav').fadeToggle();
			$('nav').removeClass('nav-hide');
		});
		// mouse follower remove area
		$("li, a, button, input, textarea, .navbar-toggles").mouseenter(function () {
			$("#follower").css("opacity", "0");
			$("li, a, button, input, textarea, .navbar-toggles").mouseleave(function () {
				$("#follower").css("opacity", "1");
			});
		});
		// On scroll header effect
		$('.on-scroll').scrollClass({
			callback: function () {
				jQuery('.skillbar.active').each(function () {
					jQuery(this).find('.skillbar-bar').animate({
						width: jQuery(this).attr('data-percent')
					}, 2000);
				});
			}
		});
		//project filter function
		$(".project-titles li").on('click', function () {
			$(".project-titles li").removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$(".project-list").isotope({
				filter: selector
			});
		});
		//select language add/remone function
		$(".secect-language li a").on('click', function () {
			$(".secect-language li a").removeClass('active');
			$(this).addClass('active');
		});
		//one page nav
		$('#nav').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 750
		});
		//header sticker
		$("#sticker").sticky({
			topSpacing: 0,
			bottomSpacing: 0,
		});
		// SMOOTH SCROLLING
		$(function () {
			$("#mainmenu a[href*='#'], a[href*='#']").bind('click', function (event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top
				}, 1250);
				event.preventDefault();
			});
		});
		/*----------------------------
            SCROLL TO TOP
        ------------------------------*/
		$(window).scroll(function () {
			var $totalHeight = $(window).scrollTop();
			var $scrollToTop = $(".scrolltotop");
			if ($totalHeight > 300) {
				$(".scrolltotop").fadeIn();
			} else {
				$(".scrolltotop").fadeOut();
			}
			if ($totalHeight + $(window).height() === $(document).height()) {
				$scrollToTop.css("bottom", "90px");
			} else {
				$scrollToTop.css("bottom", "20px");
			}
		});
		$(".embed-responsive iframe").addClass("embed-responsive-item");
		$(".carousel-inner .item:first-child").addClass("active");
		$('[data-toggle="tooltip"]').tooltip();
		// service carosule
		$(".service-teatimonial").slick({
			infinite: true,
			dots: true,
			arrows: false,
			centerPadding: '10px',
			centerMode: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}, {
				breakpoint: 770,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
		//testimonial carosule
		$(".jems-testi-active").slick({
			infinite: true,
			dots: true,
			arrows: false,
			centerPadding: '15px',
			centerMode: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}, {
				breakpoint: 770,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
		//single portfolio slider
		$('.portfolio-slider-active').slick({
			dots: false,
			infinite: true,
			nextArrow: $('.portfolio-nav-right'),
			prevArrow: $('.portfolio-nav-left'),
			speed: 1000,
			fade: true,
			cssEase: 'linear',
			autoplay: true,
			autoplaySpeed: 2000,
		});
		//partner logo carosule
		$('.clinets-carosule-active').owlCarousel({
			loop: true,
			margin: 10,
			autoplay: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 3,
				},
				1000: {
					items: 5,
				}
			}
		});
		//isotope  
		$('#container').imagesLoaded(function () {
			$('.project-list').isotope({
				// set itemSelector so .grid-sizer is not used in layout
				itemSelector: '.grid-item',
				percentPosition: true,
				masonry: {
					// use element for option
					columnWidth: '.grid-item'
				}
			})
		});
		// mouse follow 
		var mouseX = 0,
			mouseY = 0,
			limitX = 150 - 15,
			limitY = 150 - 15;
		$('#fullpage').mousemove(function (e) {
			var offset = $('#fullpage').offset();
			mouseX = Math.min(e.pageX - offset.left, limitX);
			mouseY = Math.min(e.pageY - offset.top, limitY);
			if (mouseX < 0) mouseX = 0;
			if (mouseY < 0) mouseY = 0;
			mouseX = e.pageX;
			mouseY = e.pageY;
		});
		// cache the selector
		var follower = $("#follower");
		var xp = 0,
			yp = 0;
		var loop = setInterval(function () {
			// change 12 to alter damping higher is slower
			xp += (mouseX - xp) / 12;
			yp += (mouseY - yp) / 12;
			follower.css({
				left: xp - 15,
				top: yp - 15
			});
		}, 0);
	});
	// preloader
	$(window).on('load', function () {
		$('.preloder').fadeOut(3000);
		$('.preloader-wrapper').delay(2500).fadeOut('slow');
	});
}(jQuery))
function submitForm() {
    var formData = {
        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
        budget: document.getElementById("Budget").value,
        message: document.getElementById("Message").value
    };

    fetch('https://formspree.io/dyguipro@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.querySelector(".contact-send-message").textContent = "Votre message a été envoyé avec succès.";
        } else {
            document.querySelector(".contact-send-message").textContent = "Une erreur s'est produite lors de l'envoi du message.";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.querySelector(".contact-send-message").textContent = "Une erreur s'est produite lors de l'envoi du message.";
    });
}
function switchLanguage(lang) {
    // Définir les traductions
    var translations = {
        'en': {
            'intro': 'Here <span>Prochette Dylan,</span> Computer Science student, aspiring Machine Learning engineer and web developer based in France. I am seeking professional opportunities internationally.',
            'menu_home': 'Home',
            'menu_about': 'About',
            'menu_services': 'Services',
            'menu_resume': 'Resume',
            'menu_blog': 'Blog',
            'menu_contact': 'Contact',
            'about_title': 'About',
            'about_description': 'I am 19 years old and studying in Paris. My world revolves around the exciting domains of finance, data, and Python. I am constantly in search of exploration and learning in these fields.',
            'donatello': 'I aim to develop all my computer skills. Feel free to contact me for any advice; they are all welcome.',
            'about_recruit': 'Hire Me',
            'dlcv':'Download Resume',
            'scrol':'Scroll !',
            'about_cv': 'Resume',
            'skills_heading': 'Skills',
            'skill_python': "Python Programming",
            'skill_web_dev': 'Web Development',
            'skill_sql': 'SQL Database Management',
            'skill_data_analysis': 'Data Analysis',
            'skill_txt':'Statistical analysis, data visualization, and reporting using PowerBI',
            'expertise_title': 'Areas of Expertise',
			'expertise_txt': 'Mastering various Machine Learning techniques and data science, I aspire to apply data-driven solutions and innovations to real-world challenges.',
            'expertise_ml': 'Machine Learning',
            'ml_txt':'Development of machine learning models for various applications',
            'expertise_web_dev': 'Web Development',
            'web_txt':'Web skills to complement my Machine Learning projects and create web-based applications',
            'expertise_sql': 'SQL Database Management',
            'expertise_data_analysis': 'Data Analysis',
            'summary_title': 'Resume',
            'education_title': 'Education:',
            'education_date1': 'March 2023 - Present',
            'education_institution1': 'Datacamp',
            'education_description1': 'Currently enrolled in several data analysis and programming courses to improve my skills and knowledge in data analysis and technologies.',
            'education_date2': 'September 2023 - Present',
            'education_institution2': 'Bachelor Degree',
            'education_description2': 'I am currently in Bachelor Tech&Business in Paris. We learn all the concrete and theoretical aspects of visualizing and exploring the world of Data.',
            'education_date3': '2019-2021',
            'education_institution3': 'Notre Dame de la Compassion High School',
            'education_description3': 'I obtained my Baccalauréat with a major in computer science and economics with honors.',
            'experience_title': 'Experiences:',
            'experience_date1': 'September 2023',
            'experience_company1': 'Night ON',
            'experience_position1': 'Software Developer',
            'summary': 'To Sum Up',
            'analyse_data':'Analisis de Datos',
            'gestion_sql':'Management and querying of relational databases for data retrieval and manipulation.',
            'summary_txt':'You can discover detailed information about my skills and experiences in the sections below. Explore further to gain deeper insights.',
            'experience_description1': 'Developing a WebApp using React.js, FastAPI, Python, and MySQL.',
            'experience_date2': 'Soon',
            'experience_company2': 'Soon',
            'experience_position2': 'Soon',
            'experience_description2': '...',
            'experience_date3': 'Soon',
            'experience_company3': 'Soon',
            'experience_position3': 'Soon',
            'experience_description3': '...',
            'faq_title': 'Got a project in mind?',
            'faq_description': 'YOU ARE ONLY ONE CLICK AWAY FROM MAKING IT HAPPEN',
            'faq_button': 'Work Together',
            'blog_title': 'How did I conceptualize my website?',
            'blog_description': 'Tools: GithubPages, DNS, and Vscode...',
            'blog_post1_title': 'Is Vscode the best text editor in the world?',
            'blog_post1_button': 'Learn More',
            'blog_post2_title': 'Github Pages: a free hosting method.',
            'blog_post2_button': 'Learn More',
            'blog_post3_title': 'A Domain Name?',
            'blog_post3_button': 'Learn More',
            'contact_info': 'Let\'s create something new, different, and more meaningful, or make things more visual or conceptual? Let\'s get it!',
            'contact_button': 'HIRE ME',
            'footer_text': 'Dylan Prochette © Portfolio'
        },
        'es': {
            'intro': 'Aquí <span>Prochette Dylan,</span> Estudiante de informática, aspirante a ingeniero de Machine Learning y desarrollador web con base en Francia. Estoy buscando oportunidades profesionales a nivel internacional.',
            'menu_home': 'Inicio',
            'menu_about': 'Sobre',
            'menu_services': 'Servicios',
            'menu_resume': 'Currículum',
            'menu_blog': 'Blog',
            'menu_contact': 'Contacto',
            'about_title': 'Sobre mí',
            'about_description': 'Tengo 19 años y estudio en París. Mi mundo gira en torno a los emocionantes dominios de las finanzas, los datos y Python. Estoy constantemente en busca de exploración y aprendizaje en estos campos.', 
            'donatello':'Mi objetivo es desarrollar todas mis habilidades informáticas. No dudes en contactarme para cualquier consejo; todos son bienvenidos.',
            'about_recruit': 'Contrátame',
            'dlcv': 'Descargar mi currículum',
            'scrol':'desplácese',
            'about_cv': 'CV',
            'skills_heading': 'Habilidades',
            'skill_python': 'Programación en Python',
            'skill_web_dev': 'Desarrollo web',
            'skill_sql': 'Gestión de bases de datos SQL',
            'skill_data_analysis': 'Análisis de datos',
            'skill_txt':'Análisis estadístico, visualización de datos y generación de informes utilizando PowerBI',
            'expertise_title': 'Áreas de experiencia',
            'expertise_txt': 'Dominando diversas técnicas de Machine Learning y ciencia de datos, aspiro a aplicar soluciones e innovaciones basadas en datos a los desafíos del mundo real.',
            'expertise_ml': 'Aprendizaje automático',
            'expertise_web_dev': 'Desarrollo web',
            'ml_txt':'Desarrollo de modelos de aprendizaje automático para diversas aplicaciones',
            'web_txt':'Habilidades web para complementar mis proyectos de Aprendizaje Automático y crear aplicaciones basadas en la web',
            'expertise_sql': 'Gestión de bases de datos SQL',
            'gestion_sql':'Gestión e interrogación de bases de datos relacionales para la recuperación y manipulación de datos',
            'expertise_data_analysis': 'Análisis de datos',
            'summary_title': 'Currículum',
            'summary_txt':'Puede descubrir información detallada sobre mis habilidades y experiencias en las secciones a continuación. Explore más para obtener perspectivas más profundas.',
            'education_title': 'Educación:',
            'education_date1': 'Marzo de 2023 - Presente',
            'education_institution1': 'Datacamp',
            'education_description1': 'Actualmente matriculado en varios cursos de análisis de datos y programación para mejorar mis habilidades y conocimientos en análisis de datos y tecnologías.',
            'education_date2': 'Septiembre de 2023 - Presente',
            'education_institution2': 'Licenciatura',
            'education_description2': 'Actualmente estoy en la Licenciatura Tech&Business en París. Aprendemos todos los aspectos concretos y teóricos de visualizar y explorar el mundo de los Datos.',
            'education_date3': '2019-2021',
            'education_institution3': 'Escuela secundaria Notre Dame de la Compasión',
            'education_description3': 'Obtuve mi Baccalauréat con especialización en informática y economía con honores.',
            'experience_title': 'Experiencias:',
            'experience_date1': 'Septiembre de 2023',
            'summary':'resumen',
            'analyse_data':'Analysis de datos',
            'experience_company1': 'Night ON',
            'experience_position1': 'Desarrollador de software',
            'experience_description1': 'Desarrollando una WebApp usando React.js, FastAPI, Python y MySQL.',
            'experience_date2': 'Próximamente',
            'experience_company2': 'Próximamente',
            'experience_position2': 'Próximamente',
            'experience_description2': '...',
            'experience_date3': 'Próximamente',
            'experience_company3': 'Próximamente',
            'experience_position3': 'Próximamente',
            'experience_description3': '...',
            'faq_title': '¿Tienes un proyecto en mente?',
            'faq_description': 'ESTÁS A SOLO UN CLIC DE HACERLO REALIDAD',
            'faq_button': 'Trabajemos juntos',
            'blog_title': '¿Cómo conceptualicé mi sitio web?',
            'blog_description': 'Herramientas: GithubPages, DNS y Vscode...',
            'blog_post1_title': '¿Es Vscode el mejor editor de texto del mundo?',
            'blog_post1_button': 'Aprende más',
            'blog_post2_title': 'Github Pages: un método de alojamiento gratuito.',
            'blog_post2_button': 'Aprende más',
            'blog_post3_title': '¿Un nombre de dominio?',
            'blog_post3_button': 'Aprende más',
            'contact_info': 'Creemos algo nuevo, diferente y más significativo, o hagamos las cosas más visuales o conceptuales. ¡Vamos a por ello!',
            'contact_button': 'CONTRÁTAME',
            'footer_text': 'Dylan Prochette © Portafolio'
        },
        'fr': {
            'intro': 'Ici <span>Prochette Dylan,</span> Étudiant en informatique, aspirant ingénieur en Machine Learning et développeur web basé en France. Je suis à la recherche d\'opportunités professionnelles à l\'internationale.',
            'menu_home': 'Accueil',
            'menu_about': 'À propos',
            'menu_services': 'Services',
            'menu_resume': 'CV',
            'menu_blog': 'Blog',
            'menu_contact': 'Contact',
            'about_title': 'À propos',
            'about_description': 'J\'ai 19 ans et j\'étudie à Paris. Mon monde tourne autour des domaines passionnants de la finance, des données et de Python. Je suis constamment à la recherche d\'exploration et d\'apprentissage dans ces domaines.',
            'donatello':'Mon objectif est de développer toutes mes compétences en informatique. N\'hésitez pas à me contacter pour tout conseil ; ils sont tous les bienvenus.',
            'about_recruit': 'Recrutez-moi',
            'about_cv': 'CV',
            'dlcv':'Télécharger mon cv',
            'scrol':'Scrollez',
            'skills_heading': 'Compétences',
            'skill_python': 'Programmation Python',
            'skill_web_dev': 'Développement web',
            'skill_sql': 'Gestion de base de données SQL',
            'skill_data_analysis': 'Analyse de données',
            'expertise_title': 'Domaines d\'expertise',
            'ml_txt':'Développement de modèles en ML pour différentes applications',
			'expertise_txt': "Maîtrisant différentes techniques de Machine learning et la science des données, j'aspire t à appliquer des solutions et  des innovations basées sur les données aux défis du monde réel.",
			'expertise_ml': 'Apprentissage automatique',
            'expertise_web_dev': 'Développement web',
            'web_txt': 'Compétences web pour compléter mes projets de Machine Learning et créer des applications basées sur le web.',
            'expertise_sql': 'Gestion de base de données SQL',
            'gestion_sql':'Management and querying of relational databases for data retrieval and manipulation.',
            'expertise_data_analysis': 'Analyse de données',
            'summary_txt': 'Vous pouvez découvrir des détails complets sur mes compétences et expériences dans les sections ci-dessous. Explorez davantage pour obtenir des perspectives approfondies.',
            'summary_title': 'CV',
            'education_title': 'Éducation :',
            'education_date1': 'Mars 2023 - Présent',
            'education_institution1': 'Datacamp',
            'education_description1': 'Actuellement inscrit à plusieurs cours d\'analyse de données et de programmation pour améliorer mes compétences et mes connaissances en analyse de données et technologies.',
            'education_date2': 'Septembre 2023 - Présent',
            'education_institution2': 'Licence',
            'education_description2': 'Je suis actuellement en Licence Tech&Business à Paris. Nous apprenons tous les aspects concrets et théoriques de la visualisation et de l\'exploration du monde des données.',
            'education_date3': '2019-2021',
            'analyse_data': 'Analyse Data',
            'education_institution3': 'Lycée Notre Dame de la Compassion',
            'education_description3': 'J\'ai obtenu mon Baccalauréat avec une spécialisation en informatique et économie avec mention.',
            'experience_title': 'Expériences :',
            'skill_txt':'Analyse statistique , visualisation data, et rapport sousPowerBI',
            'experience_date1': 'Septembre 2023',
            'experience_company1': 'Night ON',
            'summary':'résumer',
            'experience_position1': 'Développeur logiciel',
            'experience_description1': 'Développement d\'une WebApp en utilisant React.js, FastAPI, Python et MySQL.',
            'experience_date2': 'Bientôt',
            'experience_company2': 'Bientôt',
            'experience_position2': 'Bientôt',
            'experience_description2': '...',
            'experience_date3': 'Bientôt',
            'experience_company3': 'Bientôt',
            'experience_position3': 'Bientôt',
            'experience_description3': '...',
            'faq_title': 'Vous avez un projet en tête ?',
            'faq_description': 'VOUS ÊTES À UN SEUL CLIC DE LE RÉALISER',
            'faq_button': 'Travaillons ensemble',
            'blog_title': 'Comment ai-je conceptualisé mon site web ?',
            'blog_description': 'Outils : GithubPages, DNS et Vscode...',
            'blog_post1_title': 'Vscode est-il le meilleur éditeur de texte au monde ?',
            'blog_post1_button': 'En savoir plus',
            'blog_post2_title': 'Github Pages : une méthode d\'hébergement gratuite.',
            'blog_post2_button': 'En savoir plus',
            'blog_post3_title': 'Un nom de domaine ?',
            'blog_post3_button': 'En savoir plus',
            'contact_info': 'Créons quelque chose de nouveau, différent et plus significatif, ou rendons les choses plus visuelles ou conceptuelles ? Allons-y !',
            'contact_button': 'EMBAUCHEZ-MOI',
            'footer_text': 'Dylan Prochette © Portfolio'
        }
    };

    // Modifier le contenu en fonction de la langue sélectionnée
    var langData = translations[lang];
    $(".language").html(langData['intro']);
    $("#menu_home").text(langData['menu_home']);
    $("#menu_about").text(langData['menu_about']);
    $("#menu_services").text(langData['menu_services']);
    $("#menu_resume").text(langData['menu_resume']);
    $("#menu_blog").text(langData['menu_blog']);
    $("#menu_contact").text(langData['menu_contact']);
    $("#about_title").text(langData['about_title']);
    $("#about_description").text(langData['about_description']);
    $("#donatello").text(langData['donatello']);
    $("#about_recruit").text(langData['about_recruit']);
    $("#about_cv").text(langData['about_cv']);
    $("#dlcv").text(langData['dlcv']);
    $("#scrol").text(langData['scrol']);
    $("#skills_heading").text(langData['skills_heading']);
    $("#skill_python").text(langData['skill_python']);
    $("#skill_web_dev").text(langData['skill_web_dev']);
    $("#skill_sql").text(langData['skill_sql']);
    $("#skill_data_analysis").text(langData['skill_data_analysis']);
    $("#expertise_title").text(langData['expertise_title']);
	$("#expertise_txt").text(langData['expertise_txt']);
    $("#ml_txt").text(langData['ml_txt']);
    $("#expertise_ml").text(langData['expertise_ml']);
    $("#web_txt").text(langData['web_txt']);   
    $("#expertise_web_dev").text(langData['expertise_web_dev']);
    $("#skill_txt").html(langData['skill_txt']);
    $("#expertise_sql").text(langData['expertise_sql']);
    $("#expertise_data_analysis").text(langData['expertise_data_analysis']);
    $("#summary_title").text(langData['summary_title']);
    $("#summary_txt").text(langData['summary_txt'])
    $("#education_title").text(langData['education_title']);
    $("#education_date1").text(langData['education_date1']);
    $("#education_institution1").text(langData['education_institution1']);
    $("#education_description1").text(langData['education_description1']);
    $("#education_date2").text(langData['education_date2']);
    $("#education_institution2").text(langData['education_institution2']);
    $("#education_description2").text(langData['education_description2']);
    $("#education_date3").text(langData['education_date3']);
    $("#gestion_sql").text(langData['gestion_sql']);
    $("#analyse_data").text(langData['analyse_data']);
    $("#education_institution3").text(langData['education_institution3']);
    $("#education_description3").text(langData['education_description3']);
    $("#experience_title").text(langData['experience_title']);
    $("#experience_date1").text(langData['experience_date1']);
    $("#experience_company1").text(langData['experience_company1']);
    $("#experience_position1").text(langData['experience_position1']);
    $("#experience_description1").text(langData['experience_description1']);
    $("#experience_date2").text(langData['experience_date2']);
    $("#experience_company2").text(langData['experience_company2']);
    $("#experience_position2").text(langData['experience_position2']);
    $("#experience_description2").text(langData['experience_description2']);
    $("#experience_date3").text(langData['experience_date3']);
    $("#experience_company3").text(langData['experience_company3']);
    $("#experience_position3").text(langData['experience_position3']);
    $("#experience_description3").text(langData['experience_description3']);
    $("#faq_title").text(langData['faq_title']);
    $("#faq_description").text(langData['faq_description']);
    $("#faq_button").text(langData['faq_button']);
    $("#blog_title").text(langData['blog_title']);
    $("#blog_description").text(langData['blog_description']);
    $("#blog_post1_title").text(langData['blog_post1_title']);
    $("#blog_post1_button").text(langData['blog_post1_button']);
    $("#blog_post2_title").text(langData['blog_post2_title']);
    $("#blog_post2_button").text(langData['blog_post2_button']);
    $("#blog_post3_title").text(langData['blog_post3_title']);
    $("#blog_post3_button").text(langData['blog_post3_button']);
    $("#contact_info").text(langData['contact_info']);
    $("#contact_button").text(langData['contact_button']);
    $("#footer_text").text(langData['footer_text']);
}

;