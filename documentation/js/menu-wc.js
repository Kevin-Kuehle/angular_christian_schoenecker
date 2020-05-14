'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">actor-website documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link">AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-16c274ee2c497becce69228091feb5d0"' : 'data-target="#xs-components-links-module-AdminModule-16c274ee2c497becce69228091feb5d0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-16c274ee2c497becce69228091feb5d0"' :
                                            'id="xs-components-links-module-AdminModule-16c274ee2c497becce69228091feb5d0"' }>
                                            <li class="link">
                                                <a href="components/AdminAktuellComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminAktuellComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminBiografieComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminBiografieComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminGallerieComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminGallerieComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminKontaktComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminKontaktComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminMediaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminMediaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminSocialComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminSocialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminVitaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminVitaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link">AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3292029eb7fe4127b7f1c3bc8b649372"' : 'data-target="#xs-components-links-module-AppModule-3292029eb7fe4127b7f1c3bc8b649372"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3292029eb7fe4127b7f1c3bc8b649372"' :
                                            'id="xs-components-links-module-AppModule-3292029eb7fe4127b7f1c3bc8b649372"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-61edc86a8d1e1b537992160dcca50213"' : 'data-target="#xs-components-links-module-HomeModule-61edc86a8d1e1b537992160dcca50213"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-61edc86a8d1e1b537992160dcca50213"' :
                                            'id="xs-components-links-module-HomeModule-61edc86a8d1e1b537992160dcca50213"' }>
                                            <li class="link">
                                                <a href="components/BiografieComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BiografieComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EventsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GalleryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GalleryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LightboxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LightboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MediaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MediaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MediaViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MediaViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PersonalDataComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PersonalDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SocialsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SocialsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VitaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VitaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-597c00ab800d458a3db5be3b0619c502"' : 'data-target="#xs-components-links-module-LoginModule-597c00ab800d458a3db5be3b0619c502"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-597c00ab800d458a3db5be3b0619c502"' :
                                            'id="xs-components-links-module-LoginModule-597c00ab800d458a3db5be3b0619c502"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseService.html" data-type="entity-link">DatabaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStorageService.html" data-type="entity-link">LocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MobileHandlerService.html" data-type="entity-link">MobileHandlerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Biografie.html" data-type="entity-link">Biografie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/News.html" data-type="entity-link">News</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});