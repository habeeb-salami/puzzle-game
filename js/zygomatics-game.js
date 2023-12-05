/*
 * PLEASE NOTE: 2019-02-21, Arjan Haverkamp:
 * This file is repurposed now, it hosts the 'checkLegalEmbed' JS function
 *
 *
 * PLEASE NOTE: 2017-11-01, Arjan Haverkamp:
 * This file is no longer called from the current games on cdn.htmlgames.com
 * All games on cdn.htmlgames.com now call https://cdn.htmlgames.com/js/
 * instead (which is a PHP file, so we can use more intelligent logic).
 * We do need to keep this file here though, for games that are installed
 * on 3rd-party webservers. We don't have control over if and when those
 * 3rd parties update their games.
 */
window.zygomatic = {
	settings: {
		// The 'skipGoogleAdDomains' setting is deprecated (since 2016-02-25),
		// and no longer used by games hosted on cdn.htmlgames.com
		// We keep it here for games hosted elsewhere. 
		// It should be safe to remove this setting after 2018-01-01.
		// 23 mei 2016 [BS] Added giochimahjong.it and giochisolitario.it
		skipGoogleAdDomains: [
			'gamesonly.net', 'platformgames.com', 'juegosmahjong.com', 'juegossolitario.com', 'mahjonggames.com', 'mahjong.com', 'dev.mahjonggames.com', 'spellensite.nl', 'games-site.co.uk', 'mahjongspelen.nl', 'cardgame.com', 'solitaireonline.com', 'solitaire.com', 'hiddenobjectgames.com', 'patiencespelen.nl', 'mindgames.com', 'wimmelbildspiele.de', 'platformspellen.nl', 'tetrisspelen.nl', 'juegosplataformas.com', 'plattformspiele.de', 'mahjongspielen.de', 'kartenspielen.de', 'solitairejeux.com', 'solitairejeux.fr', 'mahjongjeux.com', 'mahjongjeux.fr', 'denkspelletjes.nl', 'juegos-mentales.com', 'knobelspiele.com', 'match3games.com', 'spiele-umsonst.de', 'izzygames.com', 'match3spellen.nl', 'kongregate.com', 'klassiekspel.nl', 'classicgame.com', 'spieleklassiker.com', 'juegos-clasicos.es', 'zibbo.com', 'cloudgames.com'
		],
		// A list of domains that should *not* show cookie consent
		skipCookieConsentDomains: [
			'actiongame.com', 'actiongames.co.uk', 'actiespellen.com', 'aktionspiele.de', 'juegosaccion.es',
			'classicgame.com', 'classicgame.co.uk', 'klassiekspel.nl', 'spieleklassiker.com',
			'hiddenobjectgames.com', 'hiddenobjectgames.co.uk', 'hiddenobjectspellen.nl', 'wimmelbildspiele.de', 'juegosdeobjetosocultos.com',
			'www.htmlgames.com',
			'mahjonggames.com', 'mahjong.com', 'mahjong.co.uk', 'mahjongspelen.nl', 'mahjongspielen.de', 'juegosmahjong.com', 'mahjongjeux.com', 'giochimahjong.it', 'mahjong.pt', 'mahjong.pl',
			'match3games.com', 'match3.co.uk', 'match3spellen.nl', '3gewinntspiele.com', 'tresenraya.com',
			'mindgames.com', 'brain-games.co.uk', 'denkspelletjes.nl', 'knobelspiele.com', 'juegos-mentales.com',
			//'platformgames.com', 'platform-games.co.uk', 'platformspellen.nl', 'plattformspiele.de', 'juegosplataformas.com',
			'cardgame.com', 'solitaireonline.com', 'solitaire.com', 'solitaire.co.uk', 'patiencespelen.nl', 'kartenspielen.de', 'juegossolitario.com', 'solitairejeux.com', 'giochisolitario.it', 'paciencia.pt', 'pasjanse.pl',
			'timemanagementgame.com', 'timemanagementgame.co.uk', 'timemanagementspel.nl', 'zeitmanagementspiel.de', 'juegosgestiontiempo.com',
			'puzzle-games.com', 'puzzlegames.co.uk', 'puzzelspellen.nl', 'puzzlespiele.com', 'juegosrompecabezas.com',
			'neongames.com', 'neongames.co.uk', 'neonspellen.nl', 'neonspiele.de', 'neongames.es', 'neongames.cn', 
			'spellensite.nl', 'games-site.co.uk'
		],
		// A list of domains that should *not* show preroll Google Ads
		prerollSkipGoogleAdDomains: [
			'y8.com', 'apps.id.net', 'pog.com', 'dollmania.com', 'gameport.com', 'spiele-umsonst.de', 'izzygames.com', 'kongregate.com', 'zibbo.com', 'cloudgames.com', 
			'actiongame.com', 'actiongames.co.uk', 'actiespellen.com', 'aktionspiele.de', 'juegosaccion.es',
			'classicgame.com', 'classicgame.co.uk', 'klassiekspel.nl', 'spieleklassiker.com',
			'hiddenobjectgames.com', 'hiddenobjectgames.co.uk', 'hiddenobjectspellen.nl', 'wimmelbildspiele.de', 'juegosdeobjetosocultos.com',
			'www.htmlgames.com',
			'mahjonggames.com', 'mahjong.com', 'mahjong.co.uk', 'mahjongspelen.nl', 'mahjongspielen.de', 'juegosmahjong.com', 'mahjongjeux.com', 'giochimahjong.it', 'mahjong.pt', 'mahjong.pl',
			'match3games.com', 'match3.co.uk', 'match3spellen.nl', '3gewinntspiele.com', 'tresenraya.com',
			'mindgames.com', 'brain-games.co.uk', 'denkspelletjes.nl', 'knobelspiele.com', 'juegos-mentales.com',
			//'platformgames.com', 'platform-games.co.uk', 'platformspellen.nl', 'plattformspiele.de', 'juegosplataformas.com',
			'cardgame.com', 'solitaireonline.com', 'solitaire.com', 'solitaire.co.uk', 'patiencespelen.nl', 'kartenspielen.de', 'juegossolitario.com', 'solitairejeux.com', 'giochisolitario.it', 'paciencia.pt', 'pasjanse.pl',
			'timemanagementgame.com', 'timemanagementgame.co.uk', 'timemanagementspel.nl', 'zeitmanagementspiel.de', 'juegosgestiontiempo.com',
			'puzzle-games.com', 'puzzlegames.co.uk', 'puzzelspellen.nl', 'puzzlespiele.com', 'juegosrompecabezas.com',
			'neongames.com', 'neongames.co.uk', 'neonspellen.nl', 'neonspiele.de', 'neongames.es', 'neongames.cn', 
			'spellensite.nl', 'games-site.co.uk'
		],
		// A list of domains that should *not* show midroll Google Ads
		// 23 mei 2016 [BS] removed as test mahjong domains 'giochimahjong.it', 'juegosmahjong.com', 'mahjonggames.com', 'dev.mahjonggames.com',  'mahjongspelen.nl', 'mahjongspielen.de', 'mahjongjeux.com', 'mahjongjeux.fr',
		// 28 juni 2016 [BS] overal ook op eigen sites nu midrolls. test ging goed.
		midrollSkipGoogleAdDomains: [
			'neongames.webgear.nl'
		],
		// A list of *all* Zygomatic domains. We use this list in all games hosted
		// on games.htmlgames.com, to prevent 3rd party sites from iframing our
		// carefully and honestly purchased games.
		gameSiteDomains: [
			'misc.webgear.nl',
			'games.webgear.nl',
			'games.htmlgames.com',
			'cdn.htmlgames.com',

			'adfreegames.com',
			'adfreegames.nl',
			'adfreegames.co.uk',
			'actiongame.com',
			'actiongames.co.uk',
			'actiespellen.com',
			'aktionspiele.de',
			'juegosaccion.es',
			'juegosaccion.es',

			'classicgame.com',
			'classicgame.co.uk',
			'klassiekspel.nl',
			'spieleklassiker.com',
			'juegos-clasicos.es',

			'hiddenobjectgames.com',
			'hiddenobjectgames.co.uk',
			'hiddenobjectspellen.nl',
			'wimmelbildspiele.de',
			'juegosdeobjetosocultos.com',

			'htmlgames.com',
			'htmlspellen.nl',
			'html-spiele.de',

			'mahjong.com',
			'mahjong.co.uk',
			'mahjongspelen.nl',
			'mahjongspielen.de',
			'juegosmahjong.com',
			'mahjongjeux.com',
			'jeuxmahjong.fr',
			'giochimahjong.it',
			'mahjong.pt',
			'mahjong.pl',

			'match3games.com',
			'match3.co.uk',
			'match3spellen.nl',
			'3gewinntspiele.com',
			'tresenraya.com',
			
			'mindgames.com',
			'brain-games.co.uk',
			'denkspelletjes.nl',
			'knobelspiele.com',
			'juegos-mentales.com',

			'cardgame.com',
			'solitaireonline.com',
			'solitaire.com',
			'solitaire.co.uk',
			'patiencespelen.nl',
			'kartenspielen.de',
			'juegossolitario.com',
			'solitairejeux.com',
			'giochisolitario.it',
			'paciencia.pt',

			'timemanagementgame.com',
			'timemanagementgame.co.uk',
			'timemanagementspel.nl',
			'zeitmanagementspiel.de',
			'juegosgestiontiempo.com',
			'juegosgestiontiempo.com',

			'puzzle-games.com',
			'puzzlegames.co.uk',
			'puzzelspellen.nl',
			'puzzlespiele.com',
			'juegosrompecabezas.com',

			'neongames.com',
			'neongames.co.uk',
			'neonspellen.nl',
			'neonspiele.de',
			'neongames.es',
			'neongames.cn',

			'spellensite.nl',
			'games-site.co.uk',

			'jijbent.nl',
			'brettspielnetz.de',
			'yourturnmyturn.com'
		]
	},

	// Check whether a website is legally embedding a game hosted
	// on games.htmlgames.com. Zygomatic paid for these games, others 
	// think they can steal them.... let's try to avoid that.
	checkLegalEmbed: function() 
	{
		function url2domain(url) {
			var match = url.match(/:\/\/((?:dev|www\d*)\.)?(.[^/:]+)/i);
			return (match != null && match.length > 2 && match[2].length > 0) ? match[2] : null;
		}

		function blackout() {
			var div = document.createElement('div');
			div.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#000;z-index:9999';
			document.body.appendChild(div);
		}

		var origin = location.origin,
			parentUrl = (parent === window) ? null : document.referrer;

		if (parentUrl) {
			origin = parentUrl;
		}
		else if (document.referrer) {
			origin = document.referrer;
		}
		var domain = url2domain(origin);

		if (-1 === this.settings.gameSiteDomains.indexOf(domain)) {
			// Site is iframing illegally:
			if (document.body) {
				blackout(); 
			}
			else {
				window.addEventListener('load', blackout, false);
			}
		}
	}
};