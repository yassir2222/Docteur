let head=document.getElementById("head");
let str=`<nav class="s-header__nav-wrap">
        <h3 class="s-header__nav-heading">Navigate to</h3>
    
        <ul class="s-header__nav">
            <li class="current-menu-item"><a href="index.html" title="">Home</a></li>
            <li class="has-children">
                <a href="#0" title="" class="">ÉPAULE</a>
                <ul class="sub-menu">
                    <li><a href="./single-pages/epaule/pathologie-de-la-coiffe.html">Pathologies de la coiffe des rotateurs</a></li>
                    <li><a href="./single-pages/epaule/linstabilite-de-lepaule.html">L’instabilité de l’épaule</a></li>
                    <li><a href="./single-pages/epaule/prothese-de-lepaule.html">Prothèse de l’épaule et arthrose</a></li>
                    <li><a href="category.html">Butée d’épaule sous arthroscopie</a></li>
                </ul>
            </li>
            <li class="has-children">
                <a href="#0" title="" class="">MAIN</a>
                <ul class="sub-menu">
                    <li><a href="category.html">PROTHÈSE DE POUCE</a></li>
                    <li><a href="category.html">ENDOSCOPIE DU CANAL CARPIEN</a></li>
                    <li><a href="category.html">CHIRURGIE DE LA MALADIE DE DUPUYTREN</a></li>
                    <li><a href="category.html">CHIRURGIE DE LA TENDINITE DE QUERVAIN</a></li>
                    <li><a href="category.html">CHIRURGIE DU DOIGT À RESSAUT</a></li>
                    <li><a href="category.html">CHIRURGIE DU KYSTE SYNOVIAL</a></li>
                </ul>
            </li>
            <li class="has-children">
                <a href="#0" title="" class="">COLONNE VERTÉBRALE</a>
                <ul class="sub-menu">
                    <li><a href="category.html">NÉVRALGIE CERVICO-BRACHIALE</a></li>
                    <li><a href="category.html">ENDOSCOPIE DU CANAL CARPIEN</a></li>
                    <li><a href="category.html">MYÉLOPATHIE CERVICO-ARTHROSIQUE</a></li>
                    <li><a href="category.html">CANAL CERVICAL ÉTROIT</a></li>
                    <li><a href="category.html">CHIRURGIE DU CANAL LOMBAIRE ÉTROIT</a></li>
                </ul>
            </li>
    
            <li class="has-children">
                <a href="#0" title="" class="">HANCHE</a>
                <ul class="sub-menu">
                    <li><a href="category.html">LA PROTHÈSE TOTALE DE LA HANCHE</a></li>
                    <li><a href="category.html">PROTHÈSE DE LA HANCHE PAR VOIE ANTÉRIEURE MINI-INVASIVE</a></li>
                    <li><a href="category.html">CHIRURGIE DU LABRUM SOUSARTHROSCOPIE DE HANCHE</a></li>
                    <li><a href="category.html">CHIRURGIE DU CONFLIT FEMORO-ACÉTABULAIRE DE HANCHE SOUSARTHROSCOPIE</a></li>
                </ul>
            </li>
            
            <li class="has-children">
                <a href="#0" title="" class="">GENOU</a>
                <ul class="sub-menu">
                    <li><a href="category.html">ANATOMIE DU GENOU</a></li>
                    <li><a href="category.html">ARTHROSE DU GENOU OU GONARTHROSE</a></li>
                    <li><a href="category.html">PATHOLOGIES LIGAMENTAIRES</a></li>
                    <li><a href="category.html">PATHOLOGIES MÉNISCALES</a></li>
                </ul>
            </li>
            <li class="has-children">
                <a href="#0" title="" class="">CHEVILLE-PIED</a>
                <ul class="sub-menu">
                    <li><a href="category.html">CHIRURGIE DE LA CHEVILLE</a></li>
                    <li><a href="category.html">PIED DUCHIRURGIE</a></li>
                </ul>
            </li>
            <li class="has-children">
                <a href="#0" title="" class="">SPORT DUCHIRURGIE</a>
                <ul class="sub-menu">
                    <li><a href="category.html">CHEVILLE</a></li>
                    <li><a href="category.html">ÉPAULE</a></li>
                    <li><a href="category.html">GENOU</a></li>
                    <li><a href="category.html">HANCHE</a></li>
                </ul>
            </li>
            <li class="has-children">
                <a href="#0" title="" class="">Blog</a>
                <ul class="sub-menu">
                    <li><a href="single-standard.html">Standard Post</a></li>
                    <li><a href="single-video.html">Video Post</a></li>
                    <li><a href="single-audio.html">Audio Post</a></li>
                </ul>
            </li>
            <li><a href="styles.html" title="">Styles</a></li>
            <li><a href="about.html" title="">About</a></li>
            <li><a href="contact.html" title="">Contact</a></li>
        </ul>
    
    </nav>`;
head.innerHTML=str;