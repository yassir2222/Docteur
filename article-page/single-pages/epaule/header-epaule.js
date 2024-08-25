let head=document.getElementById("head");
let str=`<nav class="s-header__nav-wrap">
        <h3 class="s-header__nav-heading">Naviguer vers</h3>
    
        <ul class="s-header__nav">
            <li class="current-menu-item"><a href="../../index.html" title="">Accueil</a></li>
            <li class="has-children">
                <a href="#0" title="" class="">Épaule</a>
                <ul class="sub-menu">
                    <li><a href="pathologie-de-la-coiffe.html">Pathologies de la coiffe des rotateurs</a></li>
                    <li><a href="linstabilite-de-lepaule.html">L’instabilité de l’épaule</a></li>
                    <li><a href="prothese-de-lepaule.html">Prothèse de l’épaule et arthrose</a></li>
                    <li><a href="Butee-depaule.html">Butée d’épaule sous arthroscopie</a></li>
                </ul>
            </li>
            <li class="has-children">
                <a href="#0" title="" class="">Main</a>
                <ul class="sub-menu">
                    <li><a href="../main/prothese-de-pouce.html">Prothèse de Pouce</a></li>
                    <li><a href="../main/endoscopie-canal-carpien.html">Endoscopie Du Canal Carpien</a></li>
                    <li><a href="../main/maladie-de-dupytren.html"> Chirurgie De La Maladie De Dupuytren</a></li>
                    <li><a href="../main/tendinite-de-quervain.html">Chirurgie De La Tendinite De Quervain</a></li>
                    <li><a href="../main/doigt-a-ressaut.html">Chirurgie Du Doigt À Ressaut</a></li>
                    <li><a href="../main/kyste-synovial.html">Chirurgie Du Kyste Synovial</a></li>
                </ul>
            </li>
            <li class="has-children">
                <a href="#0" title="" class="">Colonne Vertébrale</a>
                <ul class="sub-menu">
                    <li><a href="../colonne-vertebrale/Nevralgie-Cervico-Brachiale.html">Névralgie Cervico-Brachiale</a></li>
                    <li><a href="../colonne-vertebrale/myelopathie-cervico-arthrosique.html"> Myélopathie Cervico-Arthrosique</a></li>
                    <li><a href="../colonne-vertebrale/canal-cervical-Arthosique.html">Canal Cervical Étroit</a></li>
                    <li><a href="../colonne-vertebrale/chirurgie-du-canal-lombaire.html">Chirurgie Du Canal Lombaire Étroit</a></li>
                </ul>
            </li>
    
            <li class="has-children">
                <a href="#0" title="" class="">Hanche</a>
                  <ul class="sub-menu">
                    <li><a href="../hanche/La-Prothese-Totale-De-La-Hanche.html">La Prothèse Totale De La Hanche</a></li>
                    <li><a href="../hanche/Voie-Anterieure-Mini-Invasive.html">Prothèse De La Hanche Par Voie Antérieure Mini-Invasive</a></li>
                    <li><a href="../hanche/Labrum-Sousarthroscopie-De-Hanche.html">Chirurgie Du Labrum Sousarthroscopie De Hanche</a></li>
                    <li><a href="../hanche/Conflit-Femoro-Acetabulaire-De-Hanche-Sousarthroscopie.html">Chirurgie Du Conflit Femoro-Acétabulaire De Hanche Sousarthroscopie</a></li>
                </ul>
            </li>

            <li class="has-children">
                <a href="#0" title="" class="">Genou</a>
                 <ul class="sub-menu">
                    <li><a href="../genou/Anatomie-Du-Genou.html">Anatomie Du Genou</a></li>
                    <li><a href="../genou/Arthrose-Genou-Gonarthrose.html">Arthrose Du Genou Ou Gonarthrose</a></li>
                    <li><a href="../genou/Pathologies-Ligamentaires.html">Pathologies Ligamentaires</a></li>
                    <li><a href="../genou/Pathologies-Meniscales.html">Pathologies Méniscales</a></li>
                </ul>
            </li>
            <li class="has-children">
                <a href="#0" title="" class="">Cheville</a>
                <ul class="sub-menu">
                    <li><a href="../cheville/Conflit-anterieur-cheville.html">Conflit antérieur de cheville</a></li>
                    <li><a href="../cheville/Entorse-cheville.html">Entorse de cheville</a></li>
                    <li><a href="../cheville/Instabilite-cheville.html">Instabilité de cheville</a></li>
                    <li><a href="../cheville/Rupture-tendon-Achille.html">Rupture du tendon d’Achille</a></li>
                </ul>
            </li>
              <li class="has-children">
                <a href="#0" title="" class="">Pied</a>
               <ul class="sub-menu">
                    <li><a href="../pied/Hallux-Valgus.html">Opération de l’Hallux Valgus</a></li>
                    <li><a href="../pied/Nevrome-Morton.html">Névrome de Morton</a></li>
                    <li><a href="../pied/Orteils-en-griffe.html">Orteils en griffe</a></li>
                </ul>
            </li>
            <li class="has-children">
                <a href="#0" title="" class="">chirurgie Du Sport </a>
                <ul class="sub-menu">
                    <li><a href="category.html">Cheville</a></li>
                    <li><a href="category.html">Épaule</a></li>
                    <li><a href="category.html">Genou</a></li>
                    <li><a href="category.html">Hanche</a></li>
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
