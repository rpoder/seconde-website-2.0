import type { LegalData } from "../type.ts";

const privacyPolicyData: LegalData = {
	title: "Politique de Confidentialité",
	updatedAt: new Date("2025-01-14"),
	preamble: {
		title: "Préambule",
		content: [
			{
				texts: [
					[
						"Bienvenue sur Seconde, le logiciel en ligne dédié aux dépôts-ventes.",
					],
					[
						"Seconde a été conçu pour répondre aux besoins spécifiques des dépôts-ventes. Notre objectif est de proposer un outil moderne, pratique et efficace pour les boutiques et leurs déposants.",
					],
					[
						"Nous avons rédigé cette politique de confidentialité avec le souci d'être clairs et transparents sur la manière dont nous collectons, utilisons, conservons et protégeons vos données. Votre confidentialité est une priorité, et nous nous engageons à respecter vos droits en matière de protection des données.",
					],
					[
						"Si vous êtes client ou déposant d’une boutique qui utilise Seconde, vous pouvez vous référez à la section 4 «  Données que nous collectons sur vos clients ». Vous pouvez faire une demande d’accès, de suppression ou de rectification de vos données personnelles en nous contactant directement ou auprès de votre boutique.",
					],
					[
						"Pour toute question, n'hésitez pas à nous contacter à l’adresse suivante : contact@seconde.app.",
					],
				],
			},
		],
	},
	sections: [
		{
			title: "Objet et Définitions",
			content: [
				{
					texts: [
						[
							"La présente Politique de confidentialité définit la façon dont Seconde collecte, utilise, divulgue, transfère, stocke, conserve ou traite vos données lorsque vous demandez à créer un Compte Seconde et utilisez ses Services.",
						],
						[
							"Elle a pour objectif de vous informer sur les obligations à la charge de Seconde en matière de traitement de données personnelles, conformément au Règlement 2016/679 du Parlement européen et du Conseil du 27 avril 2016 (Règlement général sur la Protection des Données dit RGPD).",
						],
						[
							"En commandant et en utilisant nos Services, vous acceptez cette Politique de Confidentialité sans réserve.",
						],
						[
							"Seconde, nous, notre : désigne la Société à responsabilité limitée Seconde, au capital de 1000 euros, ayant son siège social au 60 rue François 1er, 75008 Paris.",
						],
						[
							"Vous : désigne toute personne physique ayant un Compte sur le Logiciel Seconde.",
						],
						[
							"Logiciel : désigne le logiciel Seconde, accessible en ligne et permettant la gestion des activités de dépôts-ventes.",
						],
						[
							"Compte: désigne votre espace personnel relié à votre abonnement sur le Logiciel.",
						],
						[
							"Services : désigne l'ensemble des services que Seconde s'engage à vous fournir conformément aux CGV et CGU.",
						],
						[
							"Données : désigne l'ensemble des informations et données générées et traitées par Seconde.",
						],
						[
							"Données Personnelles : désigne les données qui, au sens du Règlement général sur la protection des données dit RGPD, permettent de désigner ou d'identifier, directement ou indirectement, une personne physique. ",
						],
						[
							"Données d'encaissement : désigne les données encadrées par la loi anti-fraude à la TVA, consultables à la référence BOI-TVA-DECLA-30-10-30 du BOFiP.",
						],
					],
				},
			],
		},
		{
			title: "Entrée en vigueur et durée",
			content: [
				{
					texts: [
						[
							"La présente Politique de confidentialité prend effet à la date de la dernière mise à jour, pour une durée indéterminée.",
						],
					],
				},
			],
		},
		{
			title: "Données que nous collectons vous concernant",
			content: [
				{
					texts: [
						[
							"Nous collectons des données vous concernant de deux façons : ",
							"- lorsque vous nous les fournissez directement ;",
							"- lorsque nous recueillons des informations lors de votre utilisation des Services ;",
						],
						[
							"Nous détaillons ci-dessous les types de données concernés dans chaque cas, comment et pourquoi nous les traitons, ainsi que la base légale qui s’applique au traitement de ces données.",
						],
					],
				},
			],
			subSections: [
				{
					title: "Données que vous fournissez (les « Données de compte »)",
					content: [
						{
							texts: [
								[
									"Vous trouverez ci-dessous une description des types d’informations que vous nous fournissez directement, désignés par les « Données de compte » :",
								],
							],
							table: {
								headers: ["Types d'informations", "Données"],
								rows: [
									[
										"Nom, prénom, adresse e-mail, numéro de téléphone, mot de passe (encrypté, voir section 6 « Sécurité »), nom de la boutique, adresse de la boutique, numéro de siret.",
									],
									[
										"Informations que vous nous fournissez volontairement, telles que vos réponses à des questionnaires ou vos suggestions d’améliorations.",
									],
								],
							},
						},
					],
				},
				{
					title: "Comment nous utilisons vos Données de compte",
					content: [
						{
							texts: [[]],
							table: {
								headers: [
									"Dans quel cas nous traitons vos Données de compte",
									"Pourquoi nous traitons vos Données de compte",
									"Base légale",
								],
								rows: [
									[
										"Lorsque vous demandez à recevoir des informations sur Seconde ou nos produits.",
										"Afin de répondre à votre demande, y compris pour déterminer si nos Services sont pertinents pour vous.",
										"Exécution d'obligations précontractuelles",
									],
									[
										"Dans notre processus de création de Compte.",
										"Pour créer votre Compte dans notre base de données et vous permettre de vous authentifier à votre Compte après sa création.",
										"Exécution d'obligations contractuelles",
									],
									[
										"Quand nous vous fournissons les informations et l'assistance que vous demandez, ou pour résoudre des litiges. ",
										"Pour communiquer avec vous et remplir nos obligations en vertu des CGU.",
										"Exécution d'obligations contractuelles",
									],
									[
										"Quand nous vous envoyons des questionnaires et obtenons vos commentaires sur nos Services.",
										"Pour comprendre si les Services vous sont utiles et pour évaluer l’efficacité de toutes les mises à jour que nous fournissons.",
										"Intérêt légitime",
									],
									[
										"Quand nous faisons la promotion de nos produits et services (concerne le nom de la boutique)",
										"Pour promouvoir nos produits et services.",
										"Intérêt légitime ou consentement (lorsque la loi l'exige à des fins de contact marketing direct).",
									],
									[
										"Dans des cas de personnalisation de nos Services. Par exemple, lorsque vous créez un deuxième accès à votre Compte Seconde, nous pouvons associer certaines de vos informations à votre nouvel accès.",
										"Pour améliorer votre expérience client.",
										"Intérêt légitime et/ou exécution des obligations contractuelles.",
									],
								],
							},
						},
					],
				},
				{
					title: "Données que nous collectons à partir de votre utilisation des Services (les « Données d’utilisation ») ",
					content: [
						{
							texts: [
								[
									"Nous obtenons également des données lorsque vous interagissez avec le Logiciel. Il s’agit des Données d’utilisation.",
								],
							],
							table: {
								headers: ["Types d'informations", "Exemples"],
								rows: [
									[
										"Informations commerciales",
										"Informations sur les articles que vous vendez, tels que, l'inventaire, les prix et toute autre donnée concernant votre boutique.",
									],
									[
										"Données d’encaissement",
										"Informations sur vos transactions de paiement, par exemple, la date à laquelle les transactions sont effectuées, les montants ou les modes de paiement.",
									],
									[
										"Cookies strictement nécessaires à la fourniture des Services",
										"Cookie d’identifiant de session et d’authentification",
									],
								],
							},
						},
					],
				},
				{
					title: "Comment nous utilisons vos Données d’utilisation",
					content: [
						{
							texts: [],
							table: {
								headers: [
									"Dans quel cas nous traitons vos Données d’utilisation",
									"Pourquoi nous traitons vos Données d’utilisation",
									"Base légale",
								],
								rows: [
									[
										"Lorsque nous vous identifions à l'aide des cookies d'authentification.",
										"Pour vous permettre d’utiliser le Logiciel de manière sécurisée.",
										"Exécution d'obligations contractuelles.",
									],
									[
										"Lorsque nous enregistrons vos données d’encaissement (au sens du BOFip).",
										"Pour vous fournir nos Services et respecter la loi anti-fraude à la TVA.",
										"Exécution d'obligations contractuelles et BOFip (BOI-TVA-DECLA-30-10-30)",
									],
									[
										"Lorsque nous tentons de comprendre vos besoins métiers et d'améliorer nos produits et Services.",
										"Pour améliorer nos produits et services pour vous et d’autres utilisateurs, ainsi que pour développer de nouveaux produits et services.",
										"Intérêt légitime et/ou exécution des obligations contractuelles.",
									],
									[
										"Quand nous vous fournissons les informations et l'assistance que vous demandez, ou pour résoudre des litiges.",
										"Pour communiquer avec vous et remplir nos obligations en vertu des CGU.",
										"Exécution d’obligations contractuelles",
									],
								],
							},
						},
					],
				},
			],
		},
		{
			title: "Données que nous collectons sur vos clients",
			content: [
				{
					texts: [
						[
							"Nous collectons en votre nom les Données de vos clients lorsqu’ils interagissent avec vous par le biais de votre utilisation du Logiciel, par exemple lorsqu’ils vous confient un dépôt ou reçoivent une facture de votre part. Nous agissons en tant que sous-traitants de ces Données dont vous demeurez responsable.",
						],
					],
				},
			],
			subSections: [
				{
					title: "Données de vos déposants et clients",
					content: [
						{
							texts: [["Les Données de vos clients incluent :"]],
							table: {
								headers: ["Types d'informations", "Exemples"],
								rows: [
									[
										"Informations d’identification du client",
										"Nom et prénom de vos clients ; adresses ; date de naissance ; e-mail ; adresse postale ; numéro de téléphone ; numéro et type de pièce d’identité ;",
									],
									[
										"Autres informations que vous ou vos clients fournissez intentionnellement",
										"Informations que vos clients vous fournissent et que vous saisissez dans le Logiciel",
									],
								],
							},
						},
					],
				},
				{
					title: "Utilisation des données de vos déposants et clients",
					content: [
						{
							texts: [
								[
									"Nous traitons les Données de vos clients, en qualité de sous-traitants, dans le cadre de notre obligation contractuelle de vous fournir nos Services. Il vous incombe d'obtenir toute autorisation nécessaire pour nous permettre de traiter les Données de vos clients de la manière prévue dans la présente Politique de confidentialité.",
								],
							],
							table: {
								headers: [
									"Dans quel cas nous traitons les Données de vos clients",
									"Pourquoi nous traitons les Données de vos clients",
									"Base légale",
								],
								rows: [
									[
										"Lorsque vous créez un fichier déposant, nous collectons les informations d'identification de votre déposant que vous nous transmettez.",
										"Afin de répondre à votre besoin de suivi de vos déposants, de leurs dépôts et de leur cagnotte. Afin de remplir votre livre de police. Afin de vous permettre d’éditer une facture.",
										"Exécution d'obligations contractuelles",
									],
									[
										"Lorsque nous utilisons l’adresse e-mail de votre déposant pour lui permettre un suivi de son dépôt.",
										"Afin de faciliter la gestion et le suivi de leurs dépôts par vos déposants.",
										"Sur consentement",
									],
									[
										"Nous collectons les informations des articles déposés par vos déposants",
										"Afin de répondre à votre besoin d’identification et de suivi de votre stock.",
										"Exécution d'obligations contractuelles",
									],
									[
										"Nous collectons les informations d'identification de vos clients que vous nous transmettez, lorsque vous créez un fichier client.",
										"Afin de répondre à votre besoin de suivi de vos clients et de leur fidélité notamment.",
										"Sur consentement",
									],
								],
							},
						},
					],
				},
			],
		},

		{
			title: "Qui a accès à vos données",
			content: [
				{
					texts: [
						[
							"Nous pouvons partager vos informations et celles de vos clients avec les catégories suivantes :",
						],
					],
					table: {
						headers: [
							"Tiers pouvant recevoir vos informations personnelles",
							"Pourquoi partageons-nous vos données avec ces parties",
						],
						rows: [
							[
								"Personnel habilité en accès interne, limité à un nombre très restreint de personnes au sein de notre équipe (deux personnes actuellement). Ces personnes sont tenues à une obligation de confidentialité.",
								"Pour assurer le bon fonctionnement et la maintenance de nos Services, ainsi que pour répondre à vos demandes. ",
							],
							[
								"Notre prestataire d’hébergement AWS France, dont les serveurs se situent en France et sont donc soumis aux réglementations françaises et européennes, notamment au Règlement Général sur la Protection des Données dit RGPD. Les serveurs d'AWS France sont certifiés pour leur conformité aux normes de sécurité internationales, telles que ISO 27001, ISO 27017 et ISO 27018.",
								"Seconde recourt aux services du prestataire d’hébergement AWS France pour fournir ses Services et stocker vos données. Le prestataire dispose ainsi d'un accès limité à vos données, uniquement dans le cadre de l'exécution de ses prestations, et encadré contractuellement.",
							],
							[
								"Organismes d’application de la loi",
								"Si la loi l'exige ou dans le cadre de procédures judiciaires, nous pouvons être amenés à partager vos données avec les autorités compétentes.",
							],
							[
								"Exploitant ultérieur d'un ou de plusieurs des Services",
								"Si Seconde est impliquée dans une opération de fusion, acquisition, cession d'actifs ou procédure de redressement judiciaire, elle pourra être amenée à céder ou partager tout ou partie de ses actifs, y compris les données à caractère personnel. Dans ce cas, et avant que les données à caractère personnel ne soient transférées à une tierce partie, vous en seriez informés.",
							],
							[
								"Aux autres, selon vos instructions",
								"Pour effectuer certaines de vos demandes de partage de données. Les données de vos clients ne peuvent cependant pas être partagées à des tiers.",
							],
						],
					},
				},
			],
		},
		{
			title: "Sécurité",
			content: [
				{
					texts: [
						[
							"Nous mettons en œuvre des mesures de sécurité rigoureuses, reposant sur des technologies avancées, ainsi que des protections administratives, techniques et physiques, afin de protéger vos données contre la perte, le vol, l’utilisation abusive, ainsi que contre tout accès, divulgation, altération ou destruction non autorisés.",
						],
						[
							"Cependant, bien que nous nous efforcions d'assurer une sécurité optimale, il est important de noter qu'Internet n'est pas un environnement totalement sécurisé. Par conséquent, il est impossible de garantir une sécurité absolue pour la transmission ou le stockage des informations.",
						],
						[
							"Les données sensibles, telles que vos mots de passe, sont stockées dans notre base de données sous une forme encryptée et non déchiffrable, conformément aux standards de sécurité les plus stricts.",
						],
					],
				},
			],
		},
		{
			title: "Responsabilité",
			content: [
				{
					texts: [
						[
							"Les services offerts par Seconde vous aident à vous conformer aux règles de protection des données, mais ils ne suffisent pas à garantir à eux seuls que votre entreprise est entièrement conforme à toutes les exigences légales. Seconde est uniquement responsable des Services qu’elle fournit directement. Nous ne pouvons pas être tenus responsables si vous ne respectez pas les mesures de protection des données qui relèvent de votre responsabilité, ni pour les décisions que vous prenez concernant les types de données que vous collectez, par exemple sur vos clients et déposants, les objectifs de cette collecte, et la manière dont vous les utilisez. ",
						],
					],
				},
			],
		},
		{
			title: "Combien de temps nous conservons vos informations",
			content: [
				{
					texts: [
						[
							"Nous conservons vos données conformément à leur nature et aux obligations légales en vigueur",
						],
						[
							"Les périodes de conservation de vos informations sont donc déterminées au cas par cas :",
						],
					],
					table: {
						headers: [
							"Type de données",
							"Temps de conservation",
							"Base légale",
						],
						rows: [
							[
								"Vos données personnelles",
								"Toute la durée d’existence de votre Compte Seconde : c’est la durée pendant laquelle nous avons besoin de ces informations pour vous fournir nos Services. Après résiliation de votre abonnement, vos données personnelles seront anonymisées au bout de deux ans sauf demande contraire de votre part.",
								"Exécution d'obligations contractuelles et RGPD",
							],
							[
								"Les données personnelles de vos clients",
								"Toute la durée d’existence de votre Compte Seconde, afin de vous fournir nos Services. Après résiliation de votre abonnement, les données personnelles seront anonymisées, sauf demande contraire du client.",
								"Exécution d'obligations contractuelles et RGPD",
							],
							[
								"Vos données d’encaissement et les données d’identification de votre organisme auxquelles elles sont attachées",
								"Pendant 6 ans à compter de la dernière opération enregistrée",
								"- article L102 B du Livre des procédures fiscales (LPF) - référence BOI-TVA-DECLA-30-10-30 du bulletin officiel des finances publiques - impôts (BOFiP)",
							],
							[
								"Toute donnée qui relève d’une demande légale valide. Par exemple, si nous recevons une ordonnance de conservation ou un mandat de perquisition lié à votre Compte.",
								"Temps réclamé par l’organisme de loi",
								"Obligations légales, en fonction de la demande",
							],
							[
								"Toute donnée liée à une plainte, un différend, ou tout problème relatif à la sécurité et à l’intégrité de nos Services.",
								"Temps nécessaire à la résolution de l’événement",
								"Obligations légales, ou intérêts légitimes",
							],
						],
					},
				},
			],
		},
		{
			title: "Vos droits en matière de données personnelles",
			content: [
				{
					texts: [
						[
							"Vous bénéficiez de certains droits concernant vos informations personnelles. Vous pouvez consulter, modifier ou corriger des informations que vous nous avez transmises, nous demander de désactiver votre Compte, ou refuser la réception de messages promotionnels de notre part.",
						],
						["Vous êtes en droit de demander :"],
						[
							"- d’avoir accès à vos données personnelles que nous détenons ;",
							"- la rectification ou l’anonymisation de vos données personnelles que nous détenons ;",
							"- que nous cessions de traiter vos données ;",
							"- de désactiver votre Compte et résilier votre abonnement conformément aux CGV ;",
							"- que vos données personnelles soient transférées à un tiers (portabilité des données) ;",
							"- de retirer votre consentement au traitement de vos données (lorsque ce traitement est basé sur le consentement) ;",
							"- de déposer une plainte auprès de l’autorité de protection des données dans votre juridiction.",
						],
					],
				},
			],
		},
		{
			title: "Modifications du présent avis de confidentialité",
			content: [
				{
					texts: [
						[
							"Seconde se réserve le droit de modifier la présente Politique de Confidentialité à tout moment. Vous serez informé de toute modification par email ou lors de votre connexion au logiciel, 15 jours avant les modifications.",
						],
						[
							"Si vous souhaitez exprimer votre désaccord ou obtenir des explications supplémentaires concernant ces modifications, vous pouvez nous contacter à l'adresse  contact@seconde.app.",
							"Si vous n’acceptez pas la nouvelle Politique de Confidentialité, vous pouvez résilier votre abonnement sans préavis.",
						],
						[
							"Si vous continuez à utiliser le logiciel après application des modifications, cela vaut acceptation des nouvelles Politique de Confidentialité.",
						],
					],
				},
			],
		},
	],
};

export default privacyPolicyData;
