/* ===== block-40 ===== */
(function(){try{var o=JSON.parse(localStorage.getItem("primeOffer"));var b=document.getElementById("offerBar");if(o){b.textContent=o.text;b.hidden=!(o.on&&o.text)}}catch(e){}})();

;
/* ===== prime-movegrow-duplicate-section-fix ===== */
/* Student/parent testimonials, faculty testimonials, and results are rendered once by groupSharedSections.
   Disable the older Prime Move and Grow cloning script to prevent duplicate sections. */

;
/* ===== block-42 ===== */
(function(){
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const data={
 institute:{name:'Prime Institute',desc:'Academic support and learning programmes to help students build strong foundations and progress with confidence.',meta:['Academic Support','Tuition','Student Programmes'],courses:[
 ['📚','School Tuition','Subject-based academic support for school students.'],
 ['अ','Hindi Classes','Hindi reading, writing, vocabulary and practice for students.'],
 ['🗣️','Spoken English','Build speaking confidence, vocabulary and everyday communication.'],
 ['💬','Spoken Hindi','Learn useful Hindi expressions and conversational skills.'],
 ['📖','Prasar Hindi','Hindi learning programme — confirm the exact programme title and syllabus.'],
 ['👧','Student Programmes','Dedicated learning support and activities for students.'],
 ['🎯','Common Student Activities','Revision, practice, activities and progress support.']
 ],branches:['Anaiyur Branch','Iyer Bungalow Branch']},
 onegroup:{name:'Prime Move and Grow',desc:'Dance, music, movement and cultural programmes that build expression, rhythm, discipline and confidence. This group focuses on arts and performance, not tuition or language classes.',meta:['Dance & Culture','Movement','Performance'],courses:[
 ['💃','Dance','Explore movement, rhythm and expression.'],
 ['🥋','Silambam','Traditional martial art and discipline training.'],
 ['🎵','Freestyle','Creative movement and individual expression.'],
 ['🕺','Western Dance','Learn western dance styles and choreography.'],
 ['🌺','Bharatanatyam','Classical dance foundations, rhythm and expression.'],
 ['🎭','Performance & Events','Opportunities to practise and perform.']
 ],branches:['Anaiyur Branch']},
 digit:{name:'Prime Digit',desc:'Flexible online learning for language skills, student support and practical communication.',meta:['Online Learning','Language Classes','Flexible Batches'],courses:[
 ['📚','School Tuition','Academic support and subject revision.'],
 ['🗣️','Spoken English','Speaking practice, vocabulary, grammar and fluency.'],
 ['💬','Spoken Hindi','Daily conversation, sentence formation and practice.'],
 ['📖','Prasar Hindi','Hindi learning programme — confirm the exact programme title and syllabus.'],
 ['🧑‍🎓','Student Batches','Separate student-focused batches and activities.'],
 ['🌐','Online Classes','Join lessons remotely; confirm available batches and timings.']
 ],branches:['Madurai']}
};
let current='';$('#year').textContent=new Date().getFullYear();
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000)}
function showMain(fromHistory=false){current='';$('#homePage').style.display='block';$('#detailPage').style.display='none';$('#backBtn').style.display='none';$('#navGroups').style.display='';$('#navFounder').style.display='';window.scrollTo({top:0,behavior:'smooth'});if(!fromHistory){history.pushState({page:'home'},'', '#home')}}
// Add each group's social profile URLs here when ready. Keep empty until a real URL is supplied.
// Each group has its own Instagram, Facebook and YouTube link.
const GROUP_SOCIAL_PROFILES={
  institute:{instagram:'',facebook:'',youtube:''},
  onegroup:{instagram:'',facebook:'',youtube:''},
  digit:{instagram:'',facebook:'',youtube:''},
  skill:{instagram:'',facebook:'',youtube:''},
  sports:{instagram:'',facebook:'',youtube:''}
};
function updateGroupSocialLinks(key){
  const profile=GROUP_SOCIAL_PROFILES[key]||{};
  ['instagram','facebook','youtube'].forEach(platform=>{
    const link=document.querySelector('[data-social="'+platform+'"]');
    if(!link)return;
    const url=(profile[platform]||'').trim();
    if(/^https?:\/\//i.test(url)){
      link.href=url;link.target='_blank';link.rel='noopener noreferrer';
      link.classList.remove('is-placeholder');link.removeAttribute('aria-disabled');
      link.title='Open '+platform.charAt(0).toUpperCase()+platform.slice(1)+' profile';
    }else{
      link.href='#';link.removeAttribute('target');link.removeAttribute('rel');
      link.classList.add('is-placeholder');link.setAttribute('aria-disabled','true');
      link.title='Add this group’s '+platform+' URL in GROUP_SOCIAL_PROFILES';
    }
  });
}
document.querySelectorAll('[data-social]').forEach(link=>link.addEventListener('click',event=>{
  if(link.getAttribute('aria-disabled')==='true'){
    event.preventDefault();
    const platform=link.dataset.social;
    toast('Add this group’s '+platform+' link in GROUP_SOCIAL_PROFILES first.');
  }
}));
function showGroup(key,fromHistory=false){if(!data[key])return;current=key;const d=data[key];updateGroupSocialLinks(key);$('#detailPage').classList.toggle('institute-active',key==='institute');document.querySelectorAll('[data-move-grow-section]').forEach(el=>el.hidden=key!=='onegroup');$('#homePage').style.display='none';$('#detailPage').style.display='block';$('#backBtn').style.display='inline-block';$('#navGroups').style.display='none';$('#navFounder').style.display='none';$('#crumbName').textContent=d.name;$('#detailEyebrow').textContent='Explore '+d.name;$('#detailTitle').textContent=d.name;$('#detailDesc').textContent=d.desc;$('#courseHeading').textContent=d.name+' — Courses';$('#detailMeta').innerHTML=d.meta.map(x=>'<span class="meta-chip">'+x+'</span>').join('');$('#courseList').innerHTML=d.courses.map((c,i)=>'<article class="course"><div class="emoji">'+c[0]+'</div><h3>'+c[1]+'</h3><p>'+c[2]+'</p><button class="btn purple courseEnquire" data-course="'+c[1]+'" style="font-size:11px;padding:10px 12px">Enquire →</button></article>').join('');$('#branchList').innerHTML=d.branches.map((b,i)=>'<article class="branch"><h3>📍 '+b+'</h3>'+(b==='Madurai'?'':'<p>'+(b==='Online Classes'?'Remote learning. Confirm class availability and schedule.':'Madurai, Tamil Nadu — add verified full address here.')+'</p>')+'<button class="btn ghost branchBtn" data-branch="'+b+'" style="font-size:11px">Branch Details →</button></article>').join('');const mgTrack=document.querySelector('#group-onegroup-results .results-swipe-track');if(mgTrack){mgTrack.innerHTML=key==='onegroup'?d.courses.map(c=>'<button type="button" class="result-card result-category-card" data-result-category="'+c[1].replace(/&/g,'&amp;').replace(/"/g,'&quot;')+'"><span class="result-icon">'+c[0]+'</span><h3>'+c[1]+'</h3><p>Photos, videos and learning highlights</p><span class="result-open">View results ↗</span></button>').join(''):'';}($('#formGroup')||$('#primeEnquiryGroup')||{}).value=d.name;($('#formCourse')||$('#primeEnquiryCourse')||{}).innerHTML='<option value="">Select course (optional)</option>'+d.courses.map(c=>'<option>'+c[1]+'</option>').join('');window.scrollTo({top:0,behavior:'smooth'});if(!fromHistory){history.pushState({page:key},'', '#'+key)}$$('.reveal').forEach(el=>el.classList.add('visible'))}
$$('[data-page]').forEach(b=>b.addEventListener('click',()=>showGroup(b.dataset.page)));
$$('[data-soon]').forEach(b=>b.addEventListener('click',()=>toast(b.dataset.soon+' is launching soon. This card is intentionally not clickable yet.')));
['homeBrand','footerBrand','footHome','crumbHome'].forEach(id=>$('#'+id).addEventListener('click',e=>{e.preventDefault();showMain()}));
$('#backBtn').textContent='← Back';
$('#backBtn').setAttribute('aria-label','Go back to previous page');
$('#backBtn').addEventListener('click',()=>{ if(current && history.state && history.state.page==='home'){history.back()} else if(current){showMain()} });
$('#backFromHero').addEventListener('click',showMain);

// Browser Back and keyboard Backspace/Escape return from a group detail to the previous page.
window.addEventListener('popstate',e=>{
  const page=(e.state && e.state.page) || location.hash.replace('#','');
  if(page && data[page]) showGroup(page,true);
  else showMain(true);
});
document.addEventListener('keydown',e=>{
  if((e.key==='Backspace' || e.key==='Escape') && current){
    const tag=(e.target && e.target.tagName || '').toLowerCase();
    if(tag==='input' || tag==='textarea' || tag==='select' || (e.target && e.target.isContentEditable)) return;
    e.preventDefault();
    if(history.state && history.state.page==='home') history.back();
    else showMain();
  }
});
$('#navGroups').addEventListener('click',e=>{e.preventDefault();showMain();setTimeout(()=>$('#groups').scrollIntoView({behavior:'smooth'}),60)});
$('#footGroups').addEventListener('click',e=>{e.preventDefault();showMain();setTimeout(()=>$('#groups').scrollIntoView({behavior:'smooth'}),60)});
$('#navFounder').addEventListener('click',e=>{e.preventDefault();showMain();setTimeout(()=>$('#founder').scrollIntoView({behavior:'smooth'}),60)});
$('#footFounder').addEventListener('click',e=>{e.preventDefault();showMain();setTimeout(()=>$('#founder').scrollIntoView({behavior:'smooth'}),60)});

const resultsMoreButton=$('#resultsMore');if(resultsMoreButton)resultsMoreButton.addEventListener('click',()=>toast('Browse Results & Achievements categories below.'));
const modal=$('#modal');function openModal(course){$('#notice').style.display='none';$('#form').reset();if(current){($('#formGroup')||$('#primeEnquiryGroup')||{}).value=data[current].name;($('#formCourse')||$('#primeEnquiryCourse')||{}).innerHTML='<option value="">Select course (optional)</option>'+data[current].courses.map(c=>'<option>'+c[1]+'</option>').join('')}if(course&&course!=='general')$('#formCourse').value=course;$('#modalTitle').textContent=course&&course!=='general'?'Enquire: '+course:'Enquire Now';modal.classList.add('show');document.body.style.overflow='hidden'}
function closeModal(){modal.classList.remove('show');document.body.style.overflow=''}
['headerEnquire','heroEnquire','detailEnquire','floatingEnquire'].forEach(id=>$('#'+id).addEventListener('click',()=>openModal('general')));
$('#footContact').addEventListener('click',e=>{e.preventDefault();openModal('general')});
$('#closeModal').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
$('#courseList').addEventListener('click',e=>{const b=e.target.closest('.courseEnquire');if(b)openModal(b.dataset.course)});
// Branch contact details: add the final URLs/numbers in this single config when supplied.
const branchContactConfig={
  'Anaiyur Branch':{maps:'',phone:'',whatsapp:''},
  'Iyer Bungalow Branch':{maps:'',phone:'',whatsapp:''},
  'Madurai':{maps:'',phone:'',whatsapp:''}
};
const branchSheet=$('#branchContactSheet');
function closeBranchSheet(){branchSheet.classList.remove('show');branchSheet.setAttribute('aria-hidden','true');document.body.style.overflow='';}
function openBranchSheet(branch){
  const cfg=branchContactConfig[branch]||{maps:'',phone:'',whatsapp:''};
  $('#branchSheetTitle').textContent=branch+' — Branch Details';
  $('#branchSheetSubtitle').textContent='Choose how you would like to connect with '+branch+'.';
  const actions=[
    ['branchMapsAction',cfg.maps,'Google Maps'],
    ['branchCallAction',cfg.phone?(cfg.phone.startsWith('tel:')?cfg.phone:'tel:'+cfg.phone):'','Call'],
    ['branchWhatsAppAction',cfg.whatsapp?(cfg.whatsapp.startsWith('http')?cfg.whatsapp:'https://wa.me/'+cfg.whatsapp.replace(/\D/g,'')):'','WhatsApp']
  ];
  actions.forEach(([id,url,label])=>{
    const a=$('#'+id);a.dataset.actionLabel=label;
    if(url){a.href=url;a.removeAttribute('aria-disabled');a.style.opacity='1';a.style.pointerEvents='auto';}
    else{a.href='#';a.setAttribute('aria-disabled','true');a.style.opacity='.72';a.style.pointerEvents='auto';}
  });
  branchSheet.classList.add('show');branchSheet.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';$('#closeBranchSheet').focus();
}
document.addEventListener('click',e=>{const b=e.target.closest('.branchBtn');if(b)openBranchSheet(b.dataset.branch)});
$('#closeBranchSheet').addEventListener('click',closeBranchSheet);
branchSheet.addEventListener('click',e=>{if(e.target===branchSheet)closeBranchSheet()});
branchSheet.querySelectorAll('.branch-contact-action').forEach(a=>a.addEventListener('click',e=>{if(a.getAttribute('aria-disabled')==='true'){e.preventDefault();toast('Details will be added here. Please provide the Google Maps link, phone number and WhatsApp number for this branch.')}}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&branchSheet.classList.contains('show'))closeBranchSheet()});
$('#form').addEventListener('submit',e=>{e.preventDefault();$('#notice').style.display='block';toast('Demo only: enquiry was not sent or stored.')});
$('#whatsapp').addEventListener('click',()=>toast('Add your official WhatsApp number/link to enable messaging.'));
if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1});$$('.reveal').forEach(el=>io.observe(el))}else $$('.reveal').forEach(el=>el.classList.add('visible'));
if(location.hash){const key=location.hash.slice(1);if(data[key])showGroup(key)}
})();

// Added animation helpers: do not replace existing interactions.
(function addAnimationEnhancements(){
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reduceMQ = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  const header = document.querySelector('header');
  const updateHeader = () => { if(header) header.classList.toggle('scrolled', window.scrollY > 12); };
  window.addEventListener('scroll', updateHeader, {passive:true}); updateHeader();

  // Soft ripple feedback on buttons
  document.addEventListener('pointerdown', function(e){
    const btn = e.target.closest('button, .btn');
    if(!btn || (reduceMQ && reduceMQ.matches) || e.button>0) return;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * .34;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
    btn.appendChild(ripple);
    setTimeout(()=>ripple.remove(), 700);
  }, true);

  // Re-animate page contents when changing between main page and group detail.
  const home = document.getElementById('homePage');
  const detail = document.getElementById('detailPage');
  const switchObserver = new MutationObserver(() => {
    [home, detail].forEach(page=>{
      if(page && page.style.display !== 'none'){
        page.classList.remove('page-enter');
        void page.offsetWidth;
        page.classList.add('page-enter');
      }
    });
  });
  if(home && detail) {
    switchObserver.observe(home,{attributes:true,attributeFilter:['style']});
    switchObserver.observe(detail,{attributes:true,attributeFilter:['style']});
  }

  // Animate newly created course/branch cards after a group is opened.
  const detailContent = document.querySelector('.detail-content');
  if(detailContent && !reduceMotion){
    const cardObserver = new MutationObserver(()=>{
      detailContent.querySelectorAll('.course,.branch').forEach((card,i)=>{
        card.style.animationDelay = Math.min(i * .045, .35) + 's';
      });
    });
    cardObserver.observe(detailContent,{childList:true,subtree:true});
  }
})();


// ADDITION: reveal every page section/content block as it enters the viewport.
(function enableFullPageContentAnimation(){
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce) return;
  const selectors = [
    '#homePage .section-head', '#homePage .trustitem', '#homePage .feature',
    '#homePage .founderbox', '#detailPage .section-head', '#detailPage .detail-meta',
    '#detailPage .course', '#detailPage .branch', '#detailPage .detail-note'
  ];
  const targets = document.querySelectorAll(selectors.join(','));
  if(!('IntersectionObserver' in window)){
    targets.forEach(el=>el.classList.add('visible'));
    return;
  }
  const fullObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        fullObserver.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:'0px 0px -25px 0px'});
  targets.forEach(el=>{
    el.classList.add('reveal');
    fullObserver.observe(el);
  });
})();

;
/* ===== block-43 ===== */
(function(){
  // Horizontal swipe/arrow controls for both testimonial video rows.
  document.querySelectorAll('.review-arrow').forEach(function(btn){
    btn.addEventListener('click', function(){
      var track = document.getElementById(btn.dataset.track);
      if(!track) return;
      var card = track.querySelector('.video-review-card');
      var amount = card ? card.getBoundingClientRect().width + 18 : track.clientWidth;
      track.scrollBy({left: amount * Number(btn.dataset.dir || 1), behavior:'smooth'});
    });
  });
  document.querySelectorAll('.video-review-track').forEach(function(track){
    var section = track.closest('section');
    var dots = section ? Array.from(section.querySelectorAll('.review-dots span')) : [];
    function updateDots(){
      if(!dots.length) return;
      var card = track.querySelector('.video-review-card');
      var step = card ? card.getBoundingClientRect().width + 18 : track.clientWidth;
      var index = Math.round(track.scrollLeft / step);
      dots.forEach(function(dot,i){dot.classList.toggle('active',i===index);});
    }
    track.addEventListener('scroll', function(){window.requestAnimationFrame(updateDots);});
    track.addEventListener('keydown', function(e){
      if(e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
        e.preventDefault();
        var card = track.querySelector('.video-review-card');
        var amount = card ? card.getBoundingClientRect().width + 18 : track.clientWidth;
        track.scrollBy({left:(e.key==='ArrowRight'?1:-1)*amount,behavior:'smooth'});
      }
    });
    window.addEventListener('resize', updateDots);
  });
  // Paste a YouTube embed URL in the card and press Add Video to preview it.
  document.querySelectorAll('[data-load-video]').forEach(function(btn){
    btn.addEventListener('click', function(){
      var id = btn.getAttribute('data-load-video');
      var target = document.getElementById(id);
      var card = btn.closest('.video-review-card');
      var input = card ? card.querySelector('[data-video-target="'+id+'"]') : null;
      if(!target || !input) return;
      var raw = (input.value || '').trim();
      if(!raw){input.focus();return;}
      var url;
      try{url = new URL(raw);}catch(e){alert('Please paste a valid YouTube embed URL.');return;}
      var embed = '';
      if(url.hostname === 'youtu.be'){
        embed = 'https://www.youtube-nocookie.com/embed/' + url.pathname.replace(/^\//,'').split('/')[0];
      } else if(url.hostname.endsWith('youtube.com') || url.hostname.endsWith('youtube-nocookie.com')){
        if(url.pathname.startsWith('/embed/')) embed = 'https://www.youtube-nocookie.com' + url.pathname;
        else if(url.pathname === '/watch' && url.searchParams.get('v')) embed = 'https://www.youtube-nocookie.com/embed/' + url.searchParams.get('v');
        else if(url.pathname.startsWith('/shorts/')) embed = 'https://www.youtube-nocookie.com/embed/' + url.pathname.split('/')[2];
      }
      if(!embed){alert('Use a YouTube video URL or embed URL. Example: https://www.youtube.com/embed/VIDEO_ID');return;}
      var frame = card.querySelector('.video-frame');
      var preview = frame.querySelector('iframe');
      var placeholder = frame.querySelector('.video-placeholder');
      preview.src = embed;
      preview.style.zIndex = '3';
      if(placeholder) placeholder.style.display = 'none';
      input.value = embed;
      btn.textContent = 'Video Added ✓';
    });
  });
})();

;
/* ===== block-44 ===== */
(function(){
  function addGroupLogoSlots(){
    var detail = document.getElementById('detailPage');
    if(!detail) return;
    var title = (document.getElementById('detailTitle')?.textContent || '').trim().toLowerCase();
    var hero = detail.querySelector('.detail-hero');
    if(!hero) return;
    hero.querySelectorAll('.group-logo-upload-slot').forEach(function(el){el.remove();});
    var isMove = title.includes('prime move') || title.includes('move and grow');
    var isDigit = title.includes('prime digit');
    if(!isMove && !isDigit) return;
    var slot = document.createElement('div');
    slot.className = 'group-logo-upload-slot';
    slot.setAttribute('aria-label', (isMove ? 'Prime Move and Grow' : 'Prime Digit') + ' logo upload placeholder');
    slot.classList.add('has-logo');slot.innerHTML = '<img src="' + window.PRIME_LOGOS[isMove?'move':'digit'] + '" alt="' + (isMove ? 'Prime Move and Grow' : 'Prime Digit') + ' logo">';
    var instituteLogo = hero.querySelector('.institute-detail-logo');
    if(instituteLogo){
      instituteLogo.insertAdjacentElement('afterend', slot);
    } else {
      var eyebrow = hero.querySelector('.eyebrow');
      if(eyebrow) eyebrow.insertAdjacentElement('beforebegin', slot);
      else hero.insertBefore(slot, hero.firstChild);
    }
  }
  var observer = new MutationObserver(function(){addGroupLogoSlots();});
  document.addEventListener('DOMContentLoaded', function(){
    var title = document.getElementById('detailTitle');
    if(title) observer.observe(title, {childList:true,subtree:true,characterData:true});
    addGroupLogoSlots();
  });
  window.addEventListener('load', addGroupLogoSlots);
})();

;
/* ===== block-45 ===== */
(function(){
  const primeCourses = {
    onegroup: [
      ["Tuition","Subject-based academic support for school students.","📚"],
      ["School Hindi","Hindi learning support for school students.","अ"],
      ["Prachar Hindi (Prathmic – Praveen)","Hindi certification preparation from Prathmic to Praveen.","📖"],
      ["Spoken English – Adults","Build confidence, vocabulary and everyday speaking fluency.","🗣️"],
      ["Spoken Hindi – Adults","Learn to speak Hindi confidently in daily conversations.","💬"],
      ["Spoken English – Students","Develop speaking, vocabulary and communication skills.","🎓"],
      ["Spoken Hindi – Students","Build Hindi speaking confidence through guided practice.","अ"],
      ["More Courses – Launching Soon","More learning programmes will be announced soon.","✨"]
    ],
    digit: [
      ["Tuition","Subject-based academic support for school students.","📚"],
      ["School Hindi","Hindi learning support for school students.","अ"],
      ["Prachar Hindi (Prathmic – Praveen)","Hindi certification preparation from Prathmic to Praveen.","📖"],
      ["Spoken English – Adults","Build confidence, vocabulary and everyday speaking fluency.","🗣️"],
      ["Spoken Hindi – Adults","Learn to speak Hindi confidently in daily conversations.","💬"],
      ["Spoken English – Students","Develop speaking, vocabulary and communication skills.","🎓"],
      ["Spoken Hindi – Students","Build Hindi speaking confidence through guided practice.","अ"],
      ["More Courses – Launching Soon","More learning programmes will be announced soon.","✨"]
    ],
    move: [
      ["Bharatanatyam – Adults & Students","Classical dance training for adults and students.","💃"],
      ["Western Dance – Adults & Students","Western dance foundations, choreography and performance.","🕺"],
      ["Freestyle – Adults & Students","Explore freestyle movement, rhythm and expression.","🎶"],
      ["Karate – Adults & Students","Build discipline, fitness and self-defence skills.","🥋"],
      ["Silambam – Adults & Students","Traditional Silambam training for adults and students.","⚔️"],
      ["Martial Arts – Adults & Students","Develop coordination, discipline and practical skills.","🥋"],
      ["Zumba – Adults & Students","Enjoy fitness through music and dance-based movement.","💪"],
      ["Instrumental – Adults & Students","Learn instrumental music with guided practice.","🎹"],
      ["Yoga – Adults & Students","Support flexibility, balance and mindful movement.","🧘"],
      ["More Courses – Launching Soon","More activities and programmes will be announced soon.","✨"]
    ]
  };
  function activeGroupKey(){
    const title = (document.getElementById('detailTitle')?.textContent || '').toLowerCase();
    if(title.includes('move')) return 'move';
    if(title.includes('digit')) return 'digit';
    if(title.includes('prime institute')) return 'onegroup';
    return null;
  }
  function renderRequestedCourses(){
    const key = activeGroupKey();
    if(!key) return;
    const list = document.querySelector('#detailPage .course-list');
    if(!list || list.dataset.primeCourseSet === key) return;
    const items = primeCourses[key];
    if(!items) return;
    list.innerHTML = '';
    items.forEach(function(item, index){
      const card = document.createElement('article');
      card.className = 'course';
      card.innerHTML =
        '<div class="course-icon" aria-hidden="true">'+item[2]+'</div>'+
        '<h3>'+item[0]+'</h3>'+
        '<p>'+item[1]+'</p>'+
        (index === items.length-1
          ? '<span class="courseEnquire course-launching">Launching Soon</span>'
          : '<button type="button" class="courseEnquire" data-course-enquire="'+item[0].replace(/"/g,'&quot;')+'">Enquire →</button>');
      list.appendChild(card);
    });
    list.dataset.primeCourseSet = key;
    list.scrollLeft = 0;
  }
  document.addEventListener('click', function(e){
    const btn = e.target.closest('[data-course-enquire]');
    if(!btn) return;
    const courseName = btn.getAttribute('data-course-enquire') || 'Course';
    const title = document.getElementById('detailTitle')?.textContent || 'Prime Group';
    const msg = 'Hello, I would like to enquire about '+courseName+' at '+title+'.';
    const url = 'https://wa.me/?text=' + encodeURIComponent(msg);
    window.open(url, '_blank', 'noopener');
  });
  const detail = document.getElementById('detailPage');
  if(detail){
    new MutationObserver(function(){renderRequestedCourses();})
      .observe(detail,{subtree:true,childList:true,attributes:true,characterData:true});
  }
  document.addEventListener('DOMContentLoaded',renderRequestedCourses);
  window.addEventListener('load',renderRequestedCourses);
  setInterval(renderRequestedCourses,800);
})();

;
/* ===== block-46 ===== */
/* Run a staggered pop-in when the hero Explore Our Groups button is clicked */
(function primeGroupsPopAnimation(){
  const exploreLink = document.querySelector('section.hero a[href="#groups"]');
  const groupCards = Array.from(document.querySelectorAll('#groups .groups .group'));
  if (!exploreLink || !groupCards.length || exploreLink.dataset.popAnimationBound === 'yes') return;
  exploreLink.dataset.popAnimationBound = 'yes';
  exploreLink.addEventListener('click', function(){
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.setTimeout(function(){
      groupCards.forEach(function(card, index){
        card.classList.remove('prime-pop-in');
        card.style.animationDelay = reducedMotion ? '0ms' : (index * 110) + 'ms';
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        void card.offsetWidth;
        card.classList.add('prime-pop-in');
      });
    }, 220);
  });
})();

;
/* ===== block-47 ===== */
(function(){
  const loginBtn=document.getElementById('galleryOwnerLogin');
  const panel=document.getElementById('galleryAdminPanel');
  const logoutBtn=document.getElementById('galleryOwnerLogout');
  const input=document.getElementById('galleryPhotoInput');
  const category=document.getElementById('galleryCategory');
  const status=document.getElementById('galleryUploadStatus');
  const tiles=Array.from(document.querySelectorAll('#imageGallery .gallery-tile'));
  if(!loginBtn||!panel||!input||!category||!tiles.length)return;
  // Prototype sign-in only. Replace with real server-side authentication before public launch.
  let ownerSession=false;
  loginBtn.addEventListener('click',function(){
    if(ownerSession){panel.hidden=!panel.hidden;return;}
    const password=window.prompt('Owner gallery access. Enter the owner password:');
    if(password===null)return;
    if(password!=='PrimeOwner2026!'){
      window.alert('Access denied. Only the website owner can manage the gallery.');
      return;
    }
    ownerSession=true;panel.hidden=false;loginBtn.textContent='Gallery Manager · Open/Close';
    status.textContent='Signed in for this browser session.';
  });
  logoutBtn.addEventListener('click',function(){ownerSession=false;panel.hidden=true;loginBtn.textContent='Owner Login · Manage Gallery';input.value='';});
  input.addEventListener('change',function(){
    if(!ownerSession){status.textContent='Please sign in as the owner first.';return;}
    const files=Array.from(input.files||[]).filter(f=>f.type.startsWith('image/'));
    if(!files.length){status.textContent='Choose one or more image files.';return;}
    const tile=tiles[Number(category.value)]||tiles[0];
    files.forEach(function(file,index){
      const reader=new FileReader();
      reader.onload=function(e){
        // Browser preview only: durable, public website uploads require a secure server/storage service.
        const img=document.createElement('img');img.className='gallery-uploaded-image';img.alt=file.name;img.src=e.target.result;
        if(index===0){const old=tile.querySelector('img.gallery-uploaded-image');if(old)old.remove();}
        tile.appendChild(img);tile.classList.add('has-uploaded-image');
        if(index===files.length-1)status.textContent=files.length+' image(s) previewed in '+tile.querySelector('strong').textContent+'. These are local previews only.';
      };
      reader.readAsDataURL(file);
    });
  });
})();

;
/* ===== block-48 ===== */
(function addHomepageSectionsToEachGroup(){
  const host = document.getElementById('groupSharedSections');
  const detail = document.getElementById('detailPage');
  // Required detail-page order: Live Regular Demo Classes, student/parent testimonials, faculty testimonials, results, gallery.
  // The older Prime Move and Grow clone script is disabled above to avoid duplicate sections.
  // Our Faculty is intentionally not duplicated in this shared sequence.
  const homeSections = [
    ['studentTestimonials','Students & Parents Testimonials'],
    ['facultyTestimonials','Teacher / Faculty Testimonials'],
    ['results','Results & Achievements'],
    ['imageGallery','Image Gallery']
  ];
  if(!host || !detail) return;
  let activeGroupKey = '';
  const sharedKeys = ['primeGroupSharedVideosStudents','primeGroupSharedVideosFaculty','primeGroupSharedResults','primeGroupSharedFaculty','primeGroupSharedGallery'];
  function makeSection(groupKey, id, title, idx){
    const original = document.getElementById(id);
    if(!original) return null;
    const clone = original.cloneNode(true);
    clone.id = 'group-' + groupKey + '-' + id;
    clone.dataset.sharedHomeSection = id;
    clone.querySelectorAll('[id]').forEach(el=>{
      const oldId=el.id;
      el.id='group-'+groupKey+'-'+oldId;
      if(el.hasAttribute('for')) el.setAttribute('for','group-'+groupKey+'-'+el.getAttribute('for'));
      if(el.hasAttribute('data-track')) el.setAttribute('data-track','group-'+groupKey+'-'+el.getAttribute('data-track'));
    });
    clone.querySelectorAll('a[href^="#"]').forEach(a=>{
      const href=a.getAttribute('href').slice(1);
      if(clone.querySelector('#group-'+groupKey+'-'+href)) a.setAttribute('href','#group-'+groupKey+'-'+href);
    });
    clone.style.display='block';
    clone.style.opacity='1';
    clone.style.visibility='visible';
    const head=clone.querySelector('.section-head');
    if(head){
      const kicker=document.createElement('div');
      kicker.className='group-section-kicker';
      kicker.textContent=title;
      head.insertBefore(kicker,head.firstChild);
    }
    clone.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
    return clone;
  }
  function render(groupKey){
    if(!groupKey) return;
    activeGroupKey=groupKey;
    // Clear any prior render first so testimonial sections cannot accumulate/duplicate.
    host.replaceChildren();
    homeSections.forEach(([id,title],idx)=>{ 
      const section=makeSection(groupKey,id,title,idx);
      if(section) host.appendChild(section);
    });
    // The section contents and upload previews are mirrored between homepage and group pages
    // within this browser. The secure live-site version needs shared server/cloud storage.
    mirrorSectionContent();
    bindMirroredGallery();
  }
  function mirrorSectionContent(){
    const mappings=[
      ['studentTestimonials','group-'+activeGroupKey+'-studentTestimonials'],
      ['facultyTestimonials','group-'+activeGroupKey+'-facultyTestimonials'],
      ['results','group-'+activeGroupKey+'-results'],
      ['ourFaculty','group-'+activeGroupKey+'-ourFaculty'],
      ['imageGallery','group-'+activeGroupKey+'-imageGallery']
    ];
    mappings.forEach(([homeId,detailId],idx)=>{
      const home=document.getElementById(homeId), copy=document.getElementById(detailId);
      if(!home||!copy)return;
      // Persist the shared section markup in localStorage so edits in this prototype can be reused.
      const key='primeSharedSectionHTML:'+homeId;
      try{
        const saved=localStorage.getItem(key);
        if(saved && homeId==='imageGallery'){
          const homeGrid=home.querySelector('.gallery-grid'), copyGrid=copy.querySelector('.gallery-grid');
          if(homeGrid&&copyGrid) copyGrid.innerHTML=homeGrid.innerHTML;
        }
      }catch(e){}
    });
  }
  function bindMirroredGallery(){
    // Gallery uploads are handled only by the unified IndexedDB gallery manager below.
    // Avoid duplicate legacy handlers on cloned group sections.
    return;
    const copy=document.getElementById('group-'+activeGroupKey+'-imageGallery');
    if(!copy)return;
    const login=copy.querySelector('[id$="galleryOwnerLogin"]');
    const panel=copy.querySelector('[id$="galleryAdminPanel"]');
    const input=copy.querySelector('[id$="galleryPhotoInput"]');
    const category=copy.querySelector('[id$="galleryCategory"]');
    const status=copy.querySelector('[id$="galleryUploadStatus"]');
    const logout=copy.querySelector('[id$="galleryOwnerLogout"]');
    const tiles=Array.from(copy.querySelectorAll('.gallery-tile'));
    if(!login||!panel||!input||!category||!tiles.length)return;
    let ownerSession=false;
    login.addEventListener('click',function(){
      if(ownerSession){panel.hidden=!panel.hidden;return;}
      const password=window.prompt('Owner gallery access. Enter the owner password:');
      if(password===null)return;
      if(password!=='PrimeOwner2026!'){window.alert('Access denied. Only the website owner can manage the gallery.');return;}
      ownerSession=true;panel.hidden=false;login.textContent='Gallery Manager · Open/Close';
      if(status)status.textContent='Signed in for this browser session.';
    });
    if(logout)logout.addEventListener('click',function(){ownerSession=false;panel.hidden=true;login.textContent='Owner Login · Manage Gallery';input.value='';});
    input.addEventListener('change',function(){
      if(!ownerSession){if(status)status.textContent='Please sign in as the owner first.';return;}
      const files=Array.from(input.files||[]).filter(f=>f.type.startsWith('image/'));
      if(!files.length){if(status)status.textContent='Choose image files.';return;}
      const tile=tiles[Number(category.value)]||tiles[0];
      files.forEach(function(file,index){
        const reader=new FileReader();
        reader.onload=function(e){
          const img=document.createElement('img');img.className='gallery-uploaded-image';img.alt=file.name;img.src=e.target.result;
          if(index===0){const old=tile.querySelector('img.gallery-uploaded-image');if(old)old.remove();}
          tile.appendChild(img);tile.classList.add('has-uploaded-image');
          // Mirror the preview into the matching homepage gallery tile and other open group view.
          const homeTile=Array.from(document.querySelectorAll('#imageGallery .gallery-tile'))[Number(category.value)];
          if(homeTile){
            const oldHome=homeTile.querySelector('img.gallery-uploaded-image');if(oldHome)oldHome.remove();
            const homeImg=img.cloneNode(true);homeTile.appendChild(homeImg);homeTile.classList.add('has-uploaded-image');
          }
          try{
            const dataKey='primeGalleryPhoto:'+Number(category.value);
            localStorage.setItem(dataKey,e.target.result);
          }catch(err){/* Large images may exceed browser localStorage quota. */}
          if(status)status.textContent='Preview updated in this group and the homepage on this browser. A live website needs server storage for permanent, cross-device updates.';
        };
        reader.readAsDataURL(file);
      });
    });
    // Restore browser-local preview if it exists.
    tiles.forEach((tile,index)=>{
      try{
        const saved=localStorage.getItem('primeGalleryPhoto:'+index);
        if(saved&&!tile.querySelector('img.gallery-uploaded-image')){
          const img=document.createElement('img');img.className='gallery-uploaded-image';img.alt='Uploaded gallery photo';img.src=saved;tile.appendChild(img);tile.classList.add('has-uploaded-image');
        }
      }catch(e){}
    });
  }
  // Intercept existing group navigation; render group sections after its detail view opens.
  document.querySelectorAll('[data-page]').forEach(btn=>btn.addEventListener('click',function(){
    setTimeout(()=>render(btn.dataset.page),80);
  }));
  window.addEventListener('popstate',function(){
    const key=location.hash.replace('#','');
    if(['institute','onegroup','digit'].includes(key))setTimeout(()=>render(key),80);
  });
  // If the page opens directly at a group hash, populate its sections.
  const initial=location.hash.replace('#','');
  if(['institute','onegroup','digit'].includes(initial))setTimeout(()=>render(initial),180);
  // Keep homepage gallery photo previews in sync with local browser storage.
  document.querySelectorAll('#imageGallery .gallery-tile').forEach((tile,index)=>{
    try{
      const saved=localStorage.getItem('primeGalleryPhoto:'+index);
      if(saved&&!tile.querySelector('img.gallery-uploaded-image')){
        const img=document.createElement('img');img.className='gallery-uploaded-image';img.alt='Uploaded gallery photo';img.src=saved;tile.appendChild(img);tile.classList.add('has-uploaded-image');
      }
    }catch(e){}
  });
})();

;
/* ===== careerApplicationLogic ===== */
(function(){
  const modal = document.getElementById('careerApplicationModal');
  const openButton = document.getElementById('openCareerForm');
  const form = document.getElementById('careerApplicationForm');
  const fileInput = form && form.querySelector('input[name="resume"]');
  const fileStatus = document.getElementById('careerFileStatus');
  const submitMessage = document.getElementById('careerSubmitMessage');
  if (!modal || !openButton || !form) return;
  function openModal(){
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
    const first=form.querySelector('input[name="fullName"]');
    if(first) setTimeout(()=>first.focus(),50);
  }
  function closeModal(){
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
    openButton.focus();
  }
  openButton.addEventListener('click',openModal);
  modal.querySelectorAll('[data-close-career]').forEach(el=>el.addEventListener('click',closeModal));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('is-open'))closeModal();});
  if(fileInput){
    fileInput.addEventListener('change',()=>{
      const file=fileInput.files&&fileInput.files[0];
      if(!file){fileStatus.textContent='Resume upload is required.';return;}
      if(!/\.(pdf|doc|docx)$/i.test(file.name)){fileInput.value='';fileStatus.textContent='Please upload a PDF, DOC or DOCX file.';return;}
      if(file.size>5242880){fileInput.value='';fileStatus.textContent='The resume must be 5 MB or smaller.';return;}
      fileStatus.textContent='Selected: '+file.name;
    });
  }
  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!form.reportValidity())return;
    const file=fileInput&&fileInput.files&&fileInput.files[0];
    if(!file){fileStatus.textContent='Please upload your resume before submitting.';fileInput.focus();return;}
    if(file.size>5242880){fileStatus.textContent='The resume must be 5 MB or smaller.';fileInput.value='';return;}
    submitMessage.textContent='The form is ready, but online submission is not connected yet. Please connect a secure backend to receive applications and resume files.';
    submitMessage.style.color='#7a3c18';
  });
})();

;
/* ===== prime-owner-manager-script ===== */
(function(){
 const $=id=>document.getElementById(id); const modal=$('primeOwnerModal'); if(!modal)return;
 const DB='primeGroupOwnerMediaDB_v1', STORE='media'; let db=null, loggedIn=false, urls=[];
 const groupNames={institute:'Prime Institute',onegroup:'Prime Move and Grow',digit:'Prime Digit',skill:'Prime Skill Institute',sport:'Prime Sport Academy'};
 const sectionNames={studentTestimonials:'Students & Parents Testimonials',facultyTestimonials:'Teachers / Faculty Testimonials',results:'Results & Achievements',ourFaculty:'Our Faculty',imageGallery:'Our Gallery'};
 function openDB(){return new Promise((resolve,reject)=>{const req=indexedDB.open(DB,1);req.onupgradeneeded=()=>req.result.createObjectStore(STORE,{keyPath:'id',autoIncrement:true});req.onsuccess=()=>{db=req.result;resolve(db)};req.onerror=()=>reject(req.error)})}
 function allMedia(){return new Promise((resolve,reject)=>{const r=db.transaction(STORE).objectStore(STORE).getAll();r.onsuccess=()=>resolve(r.result||[]);r.onerror=()=>reject(r.error)})}
 function saveMedia(item){return new Promise((resolve,reject)=>{const r=db.transaction(STORE,'readwrite').objectStore(STORE).add(item);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
 function deleteMedia(id){return new Promise((resolve,reject)=>{const r=db.transaction(STORE,'readwrite').objectStore(STORE).delete(Number(id));r.onsuccess=resolve;r.onerror=()=>reject(r.error)})}
 function setStatus(msg){$('primeOwnerStatus').textContent=msg}
 const FACULTY_DB_KEY='primeGroupFacultyProfiles_v1';
 function getFaculty(){try{return JSON.parse(localStorage.getItem(FACULTY_DB_KEY)||'[]')}catch(e){return []}}
 function saveFaculty(items){localStorage.setItem(FACULTY_DB_KEY,JSON.stringify(items))}
 function renderFaculty(){const box=$('primeFacultyList');if(!box)return;box.innerHTML='';const group=$('primeOwnerGroup').value;const list=getFaculty().filter(x=>x.group===group);if(!list.length){box.textContent='No faculty profiles added for this group yet.';return}list.forEach(item=>{const row=document.createElement('div');row.className='owner-item';const info=document.createElement('span');info.textContent=item.name+' · '+item.role+' · '+item.qualification+' · '+item.experience+' · '+item.languages;const del=document.createElement('button');del.type='button';del.className='btn ghost';del.textContent='Delete';del.addEventListener('click',()=>{if(!confirm('Delete this faculty profile?'))return;saveFaculty(getFaculty().filter(x=>x.id!==item.id));renderFaculty();applyFacultyProfiles();$('primeFacultyStatus').textContent='Faculty profile deleted from this browser.'});row.append(info,del);box.appendChild(row)})}
 function applyFacultyProfiles(){document.querySelectorAll('.prime-owner-faculty-profiles').forEach(el=>el.remove());for(const item of getFaculty()){const ids=['ourFaculty','group-'+item.group+'-ourFaculty'];for(const id of ids){const target=document.getElementById(id);if(!target)continue;let host=target.querySelector('.prime-owner-faculty-profiles');if(!host){host=document.createElement('div');host.className='prime-owner-faculty-profiles';host.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:14px;margin:18px 0';(target.querySelector('.wrap')||target).appendChild(host)}const card=document.createElement('article');card.style.cssText='background:#fff;border:1px solid #e5d8f1;border-radius:16px;padding:14px;box-shadow:0 8px 25px #32105012';if(item.photo){const img=document.createElement('img');img.src=item.photo;img.alt=item.name;img.style.cssText='width:100%;height:180px;object-fit:cover;border-radius:10px';card.appendChild(img)}const h=document.createElement('h3');h.textContent=item.name;h.style.cssText='color:#59218d;margin:10px 0 5px';card.appendChild(h);for(const val of [item.role,item.qualification,item.experience,item.languages]){if(!val)continue;const p=document.createElement('p');p.textContent=val;p.style.cssText='margin:4px 0;color:#6d6279;font-size:13px';card.appendChild(p)}host.appendChild(card)}}}
 function currentFilter(){return {group:$('primeOwnerGroup').value,section:$('primeOwnerSection').value}}
 function renderMediaCard(item,container,global=false){const card=document.createElement('article');card.className='owner-item';card.style.alignItems='center';const label=document.createElement('span');label.style.flex='1';label.textContent=(item.title||item.name)+' · '+(item.type.startsWith('video/')?'Video':'Image')+(global?' · '+(groupNames[item.group]||item.group)+' / '+(sectionNames[item.section]||item.section):'');const del=document.createElement('button');del.className='btn ghost';del.type='button';del.textContent='Remove';del.setAttribute('aria-label','Remove '+(item.title||item.name));del.addEventListener('click',async()=>{if(!confirm('Remove this existing photo/video from the website? This cannot be undone.'))return;await deleteMedia(item.id);await refreshList();await refreshAllList();await applyMedia();setStatus('Selected photo/video removed from this browser and its group section.');});card.append(label,del);container.appendChild(card)}
 async function refreshList(){const f=currentFilter(),items=(await allMedia()).filter(x=>x.group===f.group&&x.section===f.section);const box=$('primeOwnerMediaList');box.innerHTML='';if(!items.length){box.textContent='No uploads saved for this group and section.';return}items.forEach(x=>renderMediaCard(x,box))}
 async function refreshAllList(){const box=$('primeOwnerAllMediaList');if(!box)return;box.innerHTML='';const items=await allMedia();if(!items.length){box.textContent='No Owner Access uploads are currently saved in this browser.';return}items.sort((a,b)=>(b.createdAt||0)-(a.createdAt||0)).forEach(x=>renderMediaCard(x,box,true))}
 function getTargets(group,section){const ids={studentTestimonials:'studentTestimonials',facultyTestimonials:'facultyTestimonials',results:'results',ourFaculty:'ourFaculty',imageGallery:'imageGallery'};const original=document.getElementById(ids[section]);const targets=[];if(original)targets.push(original);const clone=document.getElementById('group-'+group+'-'+ids[section]);if(clone)targets.push(clone);return targets}
 function mediaHost(target,section){let host=target.querySelector('.prime-owner-media');if(!host){host=document.createElement('div');host.className='prime-owner-media';host.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px;margin:18px 0';const wrap=target.querySelector('.wrap')||target;wrap.appendChild(host)}return host}
 async function applyMedia(){const all=await allMedia();document.querySelectorAll('.prime-owner-media').forEach(el=>el.remove());document.querySelectorAll('.prime-owner-uploaded-testimonial').forEach(el=>el.remove());for(const item of all){const targets=getTargets(item.group,item.section);for(const target of targets){let host,card;if(item.section==='studentTestimonials'||item.section==='facultyTestimonials'){const track=target.querySelector(item.section==='studentTestimonials'?'#studentVideoTrack, .video-review-track':'#facultyVideoTrack, .video-review-track');if(!track)continue;host=track;card=document.createElement('article');card.className='video-review-card prime-owner-uploaded-testimonial';}else{host=mediaHost(target,item.section);card=document.createElement('article');card.style.cssText='background:#fff;border:1px solid #e5d8f1;border-radius:14px;padding:10px;overflow:hidden;box-shadow:0 8px 25px #32105012'}let media;if(item.type.startsWith('video/')){media=document.createElement('video');media.controls=true;media.playsInline=true}else{media=document.createElement('img');media.alt=item.title||item.name}media.style.cssText='display:block;width:100%;max-height:280px;object-fit:contain;border-radius:9px;background:#170d2d';const url=URL.createObjectURL(item.blob);urls.push(url);media.src=url;if(item.section==='studentTestimonials'||item.section==='facultyTestimonials'){const frame=document.createElement('div');frame.className='video-frame';frame.appendChild(media);card.appendChild(frame)}else card.appendChild(media);if(item.title){const title=document.createElement('p');title.textContent=item.title;title.style.cssText='font-weight:800;color:#50207f;margin:8px 2px 2px';card.appendChild(title)}host.appendChild(card)}}}
 $('primeOwnerAccess').addEventListener('click',()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');$('primeOwnerPassword').focus()});$('primeOwnerClose').addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')});modal.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}});
 $('primeOwnerLoginBtn').addEventListener('click',async()=>{if($('primeOwnerPassword').value!=='PrimeOwner2026!'){$('primeOwnerLoginStatus').textContent='Password incorrect.';return}try{await openDB();loggedIn=true;$('primeOwnerLoginArea').hidden=true;$('primeOwnerPanel').hidden=false;$('primeOwnerLoginStatus').textContent='';await refreshList();await refreshAllList();await applyMedia();renderFaculty();applyFacultyProfiles();setStatus('Logged in. Use Remove to delete old uploads from any group or section.')}catch(e){$('primeOwnerLoginStatus').textContent='This browser does not support local media storage.'}});
 $('primeOwnerGroup').addEventListener('change',()=>{refreshList();renderFaculty()});$('primeOwnerSection').addEventListener('change',()=>{refreshList();$('primeResultCategoryField').hidden=$('primeOwnerSection').value!=='results'});$('primeResultCategoryField').hidden=true;$('primeOwnerShowAllBtn').addEventListener('click',refreshAllList);
 $('primeFacultySaveBtn').addEventListener('click',()=>{if(!loggedIn)return;const name=$('primeFacultyName').value.trim();if(!name){$('primeFacultyStatus').textContent='Enter the faculty name first.';return}const file=$('primeFacultyPhoto').files[0];const add=photo=>{const list=getFaculty();list.push({id:Date.now()+'-'+Math.random().toString(36).slice(2),group:$('primeOwnerGroup').value,name,role:$('primeFacultyRole').value.trim(),qualification:$('primeFacultyQualification').value.trim(),experience:$('primeFacultyExperience').value.trim(),languages:$('primeFacultyLanguages').value.trim(),photo:photo||'',createdAt:Date.now()});try{saveFaculty(list);['primeFacultyName','primeFacultyRole','primeFacultyQualification','primeFacultyExperience','primeFacultyLanguages'].forEach(id=>$(id).value='');$('primeFacultyPhoto').value='';renderFaculty();applyFacultyProfiles();$('primeFacultyStatus').textContent='Faculty profile added to this browser and displayed for the selected group.'}catch(e){$('primeFacultyStatus').textContent='Storage limit reached. Try a smaller photo.'}};if(file){const reader=new FileReader();reader.onload=()=>add(reader.result);reader.onerror=()=>{$('primeFacultyStatus').textContent='Could not read the photo.'};reader.readAsDataURL(file)}else add('')});
 $('primeOwnerUploadBtn').addEventListener('click',async()=>{if(!loggedIn)return;const files=Array.from($('primeOwnerFile').files||[]);if(!files.length){setStatus('Choose one or more image/video files first.');return}const f=currentFilter(),title=$('primeOwnerTitle').value.trim();try{let saved=0;if(f.section==='imageGallery'){const photos=files.filter(file=>file.type.startsWith('image/'));if(!photos.length){setStatus('Our Gallery accepts image files only. Please choose JPG, PNG or another image.');return}if(typeof window.primeGallerySaveUpload!=='function')throw new Error('Gallery uploader is not ready. Reload this HTML file and try again.');for(const file of photos){await window.primeGallerySaveUpload(file);saved++} $('primeOwnerFile').value='';$('primeOwnerTitle').value='';await refreshList();await refreshAllList();if(window.primeGalleryRefresh)await window.primeGalleryRefresh();setStatus(saved+' photo(s) saved to Our Gallery. Open View All Photos to see them.');return;}for(let i=0;i<files.length;i++){const file=files[i];if(!file.type.startsWith('image/')&&!file.type.startsWith('video/'))continue;await saveMedia({group:f.group,section:f.section,name:file.name,title:files.length===1?title:(title?title+' '+(i+1):file.name),resultCategory:f.section==='results'?$('primeResultCategory').value:'',type:file.type,blob:file,createdAt:Date.now()});saved++} $('primeOwnerFile').value='';$('primeOwnerTitle').value='';await refreshList();await refreshAllList();await applyMedia();setStatus(saved+' file(s) saved. You can remove them later from Manage All Existing Photos & Videos.')}catch(e){setStatus('Upload failed: '+(e&&e.message?e.message:'storage unavailable')+'. Try a smaller image or reload the HTML file.')}});
 $('primeOwnerLogoutBtn').addEventListener('click',()=>{loggedIn=false;$('primeOwnerPanel').hidden=true;$('primeOwnerLoginArea').hidden=false;$('primeOwnerPassword').value='';setStatus('Logged out.')});
 // Keep group-specific uploaded media visible when a group page is opened/re-rendered.
 // Avoid a document-wide rerender: it replaced testimonial cards and removed their three-dot delete controls. Direct owner controls re-render after upload/delete and section navigation.
}());

;
/* ===== prime-direct-owner-controls-script ===== */
(function(){
 const modal=document.getElementById('primeOwnerModal'), loginBtn=document.getElementById('primeOwnerLoginBtn'), logoutBtn=document.getElementById('primeOwnerLogoutBtn');
 if(!modal||!loginBtn)return;
 const DB='primeGroupOwnerMediaDB_v1', STORE='media'; let db=null, signedIn=false, urls=[];
 const sectionInfo={studentTestimonials:{title:'Students & Parents Testimonials',home:'studentTestimonials'},facultyTestimonials:{title:'Teachers Testimonials',home:'facultyTestimonials'},results:{title:'Results & Achievements',home:'results'},ourFaculty:{title:'Our Faculty',home:'ourFaculty'},imageGallery:{title:'Our Gallery',home:'imageGallery'}};
 function groupKey(){let h=(location.hash||'').slice(1);if(['institute','onegroup','digit','skill','sport'].includes(h))return h;return window.__primeActiveGroup||'institute'}
 function openDB(){return new Promise((resolve,reject)=>{const req=indexedDB.open(DB,1);req.onupgradeneeded=()=>req.result.createObjectStore(STORE,{keyPath:'id',autoIncrement:true});req.onsuccess=()=>{db=req.result;resolve(db)};req.onerror=()=>reject(req.error)})}
 function allMedia(){return new Promise((resolve,reject)=>{const req=db.transaction(STORE).objectStore(STORE).getAll();req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error)})}
 function saveMedia(item){return new Promise((resolve,reject)=>{const req=db.transaction(STORE,'readwrite').objectStore(STORE).add(item);req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
 function deleteMedia(id){return new Promise((resolve,reject)=>{const req=db.transaction(STORE,'readwrite').objectStore(STORE).delete(Number(id));req.onsuccess=resolve;req.onerror=()=>reject(req.error)})}
 function targets(){const list=[];Object.entries(sectionInfo).forEach(([key,v])=>{const home=document.getElementById(v.home);if(home)list.push({el:home,group:'home',section:key});const clone=document.getElementById('group-'+groupKey()+'-'+v.home);if(clone)list.push({el:clone,group:groupKey(),section:key})});return list}
 function ensureControls(){if(!signedIn)return;document.body.classList.add('prime-owner-logged-in');let logout=document.getElementById('primeDirectLogout');if(!logout){logout=document.createElement('button');logout.id='primeDirectLogout';logout.type='button';logout.textContent='Owner Logout';logout.style.cssText='position:fixed;right:12px;bottom:76px;z-index:99990;border:1px solid #e2d3f1;border-radius:20px;padding:8px 12px;background:#fff;color:#59218d;font-weight:800;box-shadow:0 5px 18px #0002';logout.addEventListener('click',()=>{signedIn=false;document.body.classList.remove('prime-owner-logged-in');document.querySelectorAll('.prime-section-owner-bar').forEach(el=>el.remove());document.querySelectorAll('.prime-owner-media-menu').forEach(el=>el.remove());logout.remove()});document.body.appendChild(logout)}targets().forEach(({el,group,section})=>{if(el.querySelector(':scope > .wrap .prime-section-owner-bar'))return;const wrap=el.querySelector('.wrap')||el;const bar=document.createElement('div');bar.className='prime-section-owner-bar';bar.innerHTML='<span class="prime-section-owner-hint">Owner mode · '+sectionInfo[section].title+'</span><button type="button" class="prime-section-owner-add" aria-label="Add media" title="Add photo or video">+</button><input type="file" accept="image/*,video/*" multiple hidden>';const btn=bar.querySelector('button'),input=bar.querySelector('input');btn.addEventListener('click',()=>{if(section==='ourFaculty'){openFacultyQuickAdd(group);return}input.click()});input.addEventListener('change',async()=>{const files=Array.from(input.files||[]);if(!files.length)return;try{let resultCategory='';if(section==='results'){const options=['Tuition Classes','Hindi Classes','Spoken English','Spoken Hindi','Tutorial NIOS','NEET Coaching','JEE Coaching'];const answer=prompt('Choose Results & Achievements category by number:\n'+options.map((v,i)=>(i+1)+'. '+v).join('\n'),'1');if(answer===null){input.value='';return}const index=Number(answer)-1;if(!Number.isInteger(index)||index<0||index>=options.length){alert('Invalid category selection. Upload cancelled.');input.value='';return}resultCategory=options[index]}if(section==='imageGallery'){for(const file of files){if(!file.type.startsWith('image/'))continue;await window.primeGallerySaveUpload(file)}input.value='';if(window.primeGalleryRefresh)await window.primeGalleryRefresh();return;}for(const file of files){if(!file.type.startsWith('image/')&&!file.type.startsWith('video/'))continue;await saveMedia({group,section,name:file.name,title:file.name,resultCategory:section==='results'?resultCategory:'',type:file.type,blob:file,createdAt:Date.now()})}input.value='';await renderMedia();}catch(e){alert('Could not save files. Try smaller photos/videos or free browser storage.')}});const head=wrap.querySelector('.section-head');if(head)head.insertAdjacentElement('afterend',bar);else wrap.insertBefore(bar,wrap.firstChild)});renderMedia();renderFacultyProfiles();applyLegacyCardControls()}
 async function renderMedia(){if(!db)return;const all=await allMedia();document.querySelectorAll('.prime-owner-media').forEach(el=>el.remove());document.querySelectorAll('.prime-owner-uploaded-testimonial').forEach(el=>el.remove());all.forEach(item=>{const sec=sectionInfo[item.section];if(!sec||item.section==='imageGallery'||item.section==='results')return;const relevant=targets().filter(t=>t.section===item.section&&t.group===item.group);relevant.forEach(({el})=>{const isTestimonial=item.section==='studentTestimonials'||item.section==='facultyTestimonials';let host,card;if(isTestimonial){host=el.querySelector(item.section==='studentTestimonials'?'#studentVideoTrack, .video-review-track':'#facultyVideoTrack, .video-review-track');if(!host)return;card=document.createElement('article');card.className='video-review-card prime-owner-uploaded-testimonial'}else{const wrap=el.querySelector('.wrap')||el;host=wrap.querySelector(':scope > .prime-owner-media');if(!host){host=document.createElement('div');host.className='prime-owner-media';host.dataset.section=item.section;const bar=wrap.querySelector('.prime-section-owner-bar');if(bar)bar.insertAdjacentElement('afterend',host);else wrap.appendChild(host)}host.dataset.section=item.section;card=document.createElement('article');card.className='prime-owner-media-card'}let media;if((item.type||'').startsWith('video/')){media=document.createElement('video');media.controls=true;media.playsInline=true}else{media=document.createElement('img');media.alt=item.title||item.name||'Uploaded image'}media.src=URL.createObjectURL(item.blob);urls.push(media.src);if(isTestimonial){const frame=document.createElement('div');frame.className='video-frame';frame.appendChild(media);card.appendChild(frame)}else card.appendChild(media);if(item.title){const title=document.createElement('p');title.className='prime-owner-media-title';title.textContent=item.title;card.appendChild(title)}if(signedIn){const menu=document.createElement('details');menu.className='prime-owner-media-menu';const summary=document.createElement('summary');summary.textContent='⋮';summary.setAttribute('aria-label','Media options');summary.addEventListener('click',e=>e.stopPropagation());const del=document.createElement('button');del.type='button';del.className='prime-owner-media-delete';del.textContent='Delete';del.addEventListener('click',async e=>{e.preventDefault();e.stopPropagation();if(!confirm('Delete this photo/video?'))return;try{await deleteMedia(item.id);menu.open=false;await renderMedia()}catch(err){alert('Could not delete this file in browser storage. Please try again.')}});menu.append(summary,del);card.appendChild(menu)}host.appendChild(card)})})}
 function applyLegacyCardControls(){if(!signedIn)return;targets().forEach(({el,group,section})=>{let selector='';if(section==='studentTestimonials'||section==='facultyTestimonials')selector='.video-review-card';else if(section==='results')selector='.result-card';else if(section==='imageGallery')selector='.gallery-tile';else return;Array.from(el.querySelectorAll(selector)).forEach((card,index)=>{const key='primeLegacyHidden:'+group+':'+section+':'+index;try{if(localStorage.getItem(key)==='1'){card.style.display='none';return}}catch(e){}if(card.querySelector('.prime-owner-media-menu'))return;const menu=document.createElement('details');menu.className='prime-owner-media-menu';const sum=document.createElement('summary');sum.textContent='⋮';sum.setAttribute('aria-label','Card options');const del=document.createElement('button');del.type='button';del.className='prime-owner-media-delete';del.textContent='Delete';del.addEventListener('click',e=>{e.preventDefault();if(!confirm('Remove this existing card from this group section?'))return;try{localStorage.setItem(key,'1')}catch(err){}card.remove()});menu.append(sum,del);card.style.position='relative';card.appendChild(menu)})})}
 function renderFacultyProfiles(){document.querySelectorAll('.prime-owner-faculty-profiles').forEach(x=>x.remove());let list=[];try{list=JSON.parse(localStorage.getItem('primeGroupFacultyProfiles_v1')||'[]')}catch(e){};list.forEach(item=>{const ids=['ourFaculty','group-'+item.group+'-ourFaculty'];ids.forEach(id=>{const target=document.getElementById(id);if(!target)return;const wrap=target.querySelector('.wrap')||target;let host=wrap.querySelector('.prime-owner-faculty-profiles');if(!host){host=document.createElement('div');host.className='prime-owner-faculty-profiles prime-owner-media';wrap.appendChild(host)}const card=document.createElement('article');card.className='prime-owner-media-card';if(item.photo){const img=document.createElement('img');img.src=item.photo;img.alt=item.name;card.appendChild(img)}const h=document.createElement('h3');h.className='prime-owner-media-title';h.textContent=item.name;card.appendChild(h);[item.role,item.qualification,item.experience,item.languages].filter(Boolean).forEach(v=>{const p=document.createElement('p');p.textContent=v;p.style.cssText='font-size:13px;color:#6d6279;margin:4px 2px';card.appendChild(p)});if(signedIn){const menu=document.createElement('details');menu.className='prime-owner-media-menu';const sum=document.createElement('summary');sum.textContent='⋮';const del=document.createElement('button');del.type='button';del.className='prime-owner-media-delete';del.textContent='Delete';del.addEventListener('click',e=>{e.preventDefault();if(!confirm('Delete this faculty profile?'))return;let current=[];try{current=JSON.parse(localStorage.getItem('primeGroupFacultyProfiles_v1')||'[]')}catch(err){};localStorage.setItem('primeGroupFacultyProfiles_v1',JSON.stringify(current.filter(x=>x.id!==item.id)));renderFacultyProfiles()});menu.append(sum,del);card.appendChild(menu)}host.appendChild(card)})})}
 function openFacultyQuickAdd(group){const name=prompt('Faculty full name:');if(!name||!name.trim())return;const role=prompt('Designation / Subject:','')||'';const qualification=prompt('Qualification:','')||'';const experience=prompt('Experience:','')||'';const languages=prompt('Languages known:','')||'';const picker=document.createElement('input');picker.type='file';picker.accept='image/*';picker.onchange=()=>{const f=picker.files&&picker.files[0];const add=photo=>{let list=[];try{list=JSON.parse(localStorage.getItem('primeGroupFacultyProfiles_v1')||'[]')}catch(e){};list.push({id:Date.now()+'-'+Math.random().toString(36).slice(2),group,name:name.trim(),role,qualification,experience,languages,photo:photo||'',createdAt:Date.now()});try{localStorage.setItem('primeGroupFacultyProfiles_v1',JSON.stringify(list));renderFacultyProfiles();alert('Faculty profile saved in Our Faculty for this group.')}catch(e){alert('Photo may be too large for browser storage. Use a smaller photo.')}};if(f){const reader=new FileReader();reader.onload=()=>add(reader.result);reader.readAsDataURL(f)}else add('')};picker.click()}
 // Reuse the existing password-only login. On success, close the login and reveal controls in each section.
 loginBtn.addEventListener('click',()=>{setTimeout(async()=>{const status=document.getElementById('primeOwnerLoginStatus');if(status&&status.textContent.trim())return;try{await openDB();signedIn=true;const panel=document.getElementById('primeOwnerPanel');if(panel)panel.hidden=true;document.getElementById('primeOwnerLoginArea').hidden=false;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');ensureControls();}catch(e){if(status)status.textContent='Browser storage is unavailable.'}},450)});
 if(logoutBtn)logoutBtn.addEventListener('click',()=>{signedIn=false;document.body.classList.remove('prime-owner-logged-in');document.querySelectorAll('.prime-section-owner-bar').forEach(el=>el.remove());document.querySelectorAll('.prime-owner-media-menu').forEach(el=>el.remove());});
 // Keep direct controls available after each group card opens; all sections remain grouped by the active group.
 document.querySelectorAll('[data-page]').forEach(btn=>btn.addEventListener('click',()=>{window.__primeActiveGroup=btn.dataset.page;setTimeout(()=>{if(signedIn)ensureControls()},180)}));
 window.addEventListener('hashchange',()=>setTimeout(()=>{if(signedIn)ensureControls()},200));
 const oldShow=window.showGroup;if(typeof oldShow==='function'){window.showGroup=function(key,...args){window.__primeActiveGroup=key;const r=oldShow.apply(this,[key,...args]);setTimeout(()=>{if(signedIn)ensureControls()},200);return r}}
})();

;
/* ===== primeGalleryViewAllLogic ===== */
(function(){
 const DB='primeGalleryAllUploadsDB', STORE='photos'; let dbPromise;
 function db(){if(dbPromise)return dbPromise;dbPromise=new Promise((resolve,reject)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains(STORE))r.result.createObjectStore(STORE,{keyPath:'id',autoIncrement:true})};r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)});return dbPromise}
 async function allPhotos(){const d=await db();return new Promise((resolve,reject)=>{const r=d.transaction(STORE).objectStore(STORE).getAll();r.onsuccess=()=>resolve(r.result||[]);r.onerror=()=>reject(r.error)})}
 async function savePhoto(file){const d=await db();return new Promise((resolve,reject)=>{const r=d.transaction(STORE,'readwrite').objectStore(STORE).add({name:file.name,type:file.type,blob:file,createdAt:Date.now()});r.onsuccess=resolve;r.onerror=()=>reject(r.error)})}
 async function savePhotoRecord(record){const d=await db();return new Promise((resolve,reject)=>{const r=d.transaction(STORE,'readwrite').objectStore(STORE).add(record);r.onsuccess=resolve;r.onerror=()=>reject(r.error)})}
 window.primeGallerySaveUpload=savePhoto;
 async function migrateOlderGalleryUploads(){try{const d=await new Promise((resolve,reject)=>{const r=indexedDB.open('primeGroupOwnerMediaDB_v1',1);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)});if(!d.objectStoreNames.contains('media'))return;const old=await new Promise((resolve,reject)=>{const r=d.transaction('media').objectStore('media').getAll();r.onsuccess=()=>resolve(r.result||[]);r.onerror=()=>reject(r.error)});const mark='primeGalleryMigratedOwnerMediaIds_v1';let done=[];try{done=JSON.parse(localStorage.getItem(mark)||'[]')}catch(e){};const next=old.filter(x=>x.section==='imageGallery'&&(x.type||'').startsWith('image/')&&x.blob&&!done.includes(x.id));for(const x of next){await savePhotoRecord({name:x.name||x.title||'Gallery photo',type:x.type,blob:x.blob,createdAt:x.createdAt||Date.now()});done.push(x.id)}localStorage.setItem(mark,JSON.stringify(done));d.close()}catch(e){/* migration is best-effort; new uploads use the shared gallery store */}}
 let modal,grid,lightbox,lightImg;
 function ensureUI(){if(!modal){modal=document.createElement('div');modal.className='prime-gallery-modal';modal.innerHTML='<div class="prime-gallery-modal-head"><h2>Image Gallery · View All</h2><button type="button" class="prime-gallery-close">✕ Close</button></div><div class="prime-gallery-all-grid"></div>';document.body.appendChild(modal);grid=modal.querySelector('.prime-gallery-all-grid');modal.querySelector('.prime-gallery-close').onclick=()=>modal.classList.remove('is-open');modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('is-open')});document.addEventListener('keydown',e=>{if(e.key==='Escape'){modal.classList.remove('is-open');lightbox?.classList.remove('is-open')}})}if(!lightbox){lightbox=document.createElement('div');lightbox.className='prime-gallery-lightbox';lightImg=document.createElement('img');lightImg.alt='Expanded gallery image';lightbox.appendChild(lightImg);lightbox.onclick=()=>lightbox.classList.remove('is-open');document.body.appendChild(lightbox)}}
 function showLarge(src){ensureUI();lightImg.src=src;lightbox.classList.add('is-open')}
 async function render(){ensureUI();await migrateOlderGalleryUploads();const sections=Array.from(document.querySelectorAll('#imageGallery,[id$="-imageGallery"]'));const photos=await allPhotos().catch(()=>[]);photos.sort((a,b)=>(a.order??a.createdAt)-(b.order??b.createdAt));const sources=[];
   photos.forEach(p=>{const url=URL.createObjectURL(p.blob);sources.push({src:url,name:p.name||'Gallery image',id:p.id})});
   sections.forEach(sec=>{
     const tiles=Array.from(sec.querySelectorAll('.gallery-tile'));
     // Keep the six original preview cards unchanged by uploads; labels stay hidden as requested.
     tiles.forEach(tile=>{tile.querySelectorAll('strong,small,span').forEach(n=>n.style.display='none');tile.setAttribute('aria-label','Open gallery image');tile.onclick=()=>{const img=tile.querySelector('img');if(img)showLarge(img.src);else openAll()}});
     let strip=sec.querySelector('#primeGalleryUploadedStrip');if(!strip){strip=document.createElement('div');strip.id='primeGalleryUploadedStrip';strip.className='prime-gallery-uploaded-strip';const gridEl=sec.querySelector('.gallery-grid');if(gridEl)gridEl.insertAdjacentElement('afterend',strip);else (sec.querySelector('.wrap')||sec).appendChild(strip)}
     strip.innerHTML='';if(photos.length){const note=document.createElement('p');note.className='prime-gallery-reorder-note';note.textContent='Uploaded photos · Owner: long-press and drag to reorder';strip.appendChild(note)}
     photos.forEach((photo,index)=>{const card=document.createElement('div');card.className='prime-gallery-uploaded-item';card.draggable=true;card.dataset.id=photo.id;const img=document.createElement('img');img.src=URL.createObjectURL(photo.blob);img.alt=photo.name||'Uploaded gallery photo';card.appendChild(img);card.addEventListener('click',()=>showLarge(img.src));card.addEventListener('dragstart',e=>{card.classList.add('is-dragging');e.dataTransfer.setData('text/plain',String(photo.id));e.dataTransfer.effectAllowed='move'});card.addEventListener('dragend',()=>card.classList.remove('is-dragging'));card.addEventListener('dragover',e=>{e.preventDefault();e.dataTransfer.dropEffect='move'});card.addEventListener('drop',async e=>{e.preventDefault();const from=Number(e.dataTransfer.getData('text/plain')),to=Number(card.dataset.id);if(!from||!to||from===to)return;const arr=await allPhotos();arr.sort((a,b)=>(a.order??a.createdAt)-(b.order??b.createdAt));const fi=arr.findIndex(x=>x.id===from),ti=arr.findIndex(x=>x.id===to);if(fi<0||ti<0)return;const moved=arr.splice(fi,1)[0];arr.splice(ti,0,moved);const d=await db();await new Promise((resolve,reject)=>{const tx=d.transaction(STORE,'readwrite'),st=tx.objectStore(STORE);arr.forEach((x,i)=>{x.order=i;st.put(x)});tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});await render()});strip.appendChild(card)});
     let button=sec.querySelector(':scope .prime-gallery-viewall');if(!button){button=document.createElement('button');button.type='button';button.className='prime-gallery-viewall';button.textContent='View All Photos';const gallery=sec.querySelector('.gallery-grid');if(gallery)gallery.insertAdjacentElement('afterend',button);else (sec.querySelector('.wrap')||sec).appendChild(button);}button.onclick=function(e){e.preventDefault();e.stopPropagation();openAll().catch(()=>{ensureUI();grid.innerHTML='<div class="prime-gallery-empty">Gallery could not be opened. Please refresh the website and try again.</div>';modal.classList.add('is-open');});};
   });
   async function openAll(){
     ensureUI(); grid.innerHTML='';
     const ownerMode=document.body.classList.contains('prime-owner-logged-in');
     if(ownerMode){const hint=document.createElement('p');hint.className='prime-gallery-owner-hint';hint.textContent='Owner Access: use Remove on any photo to delete it. Changes save in this browser.';grid.appendChild(hint)}
     let current=[];
     try{current=await allPhotos();current.sort((a,b)=>(a.order??a.createdAt)-(b.order??b.createdAt));}
     catch(err){const error=document.createElement('div');error.className='prime-gallery-empty';error.textContent='Gallery could not be loaded. Close this window and try again.';grid.appendChild(error);modal.classList.add('is-open');return;}
     if(!current.length){const empty=document.createElement('div');empty.className='prime-gallery-empty';empty.textContent='No photos uploaded yet. Sign in as the owner and add photos to see them here.';grid.appendChild(empty);modal.classList.add('is-open');return;}
     current.forEach(item=>{
       const card=document.createElement('div');card.className='prime-gallery-all-item';
       const open=document.createElement('button');open.type='button';open.className='prime-gallery-photo-open';open.setAttribute('aria-label','View '+(item.name||'photo')+' larger');
       const im=document.createElement('img');im.src=URL.createObjectURL(item.blob);im.alt=item.name||'Gallery photo';open.appendChild(im);open.onclick=()=>showLarge(im.src);card.appendChild(open);
       if(ownerMode){const remove=document.createElement('button');remove.type='button';remove.className='prime-gallery-photo-remove';remove.textContent='Remove';remove.setAttribute('aria-label','Remove '+(item.name||'photo'));remove.onclick=async e=>{e.preventDefault();e.stopPropagation();if(remove.disabled)return;if(!document.body.classList.contains('prime-owner-logged-in')){alert('Please sign in through Owner Access before removing photos.');return;}if(!confirm('Permanently remove this photo? This cannot be undone.'))return;remove.disabled=true;remove.textContent='Removing…';try{const d=await db();await new Promise((resolve,reject)=>{const tx=d.transaction(STORE,'readwrite');const req=tx.objectStore(STORE).delete(item.id);req.onerror=()=>reject(req.error||new Error('Delete failed'));tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error||new Error('Delete failed'));tx.onabort=()=>reject(tx.error||new Error('Delete aborted'));});await render();await openAll();}catch(err){remove.disabled=false;remove.textContent='Remove';alert('Could not remove this photo. The browser may be low on storage or the database is unavailable. Close View All, reopen it, and try again.')}};card.appendChild(remove)}
       grid.appendChild(card);
     });
     modal.classList.add('is-open');
   }
 }
 window.primeGalleryRefresh=render;
 // Take control of the gallery uploader so every selected photo becomes a new gallery item,
 // instead of replacing one of the six preview cards.
 document.addEventListener('change',async function(e){const input=e.target;if(!input.matches||!input.matches('input[id$="galleryPhotoInput"]'))return;const panel=input.closest('[id$="galleryAdminPanel"]');if(panel&&panel.hidden)return;const files=Array.from(input.files||[]).filter(f=>f.type.startsWith('image/'));if(!files.length)return;e.stopImmediatePropagation();e.preventDefault();const status=(panel&&panel.querySelector('[id$="galleryUploadStatus"]'))||document.getElementById('galleryUploadStatus');try{for(const file of files)await savePhoto(file);input.value='';if(status)status.textContent=files.length+' photo(s) added to the gallery. They will appear in View All.';await render()}catch(err){if(status)status.textContent='Could not save these photos. Try fewer or smaller images.'}},true);
 // Refresh on each group detail opening, and ensure the same UI is present on the home gallery.
 function laterRender(){setTimeout(()=>render().catch(()=>{}),250)}
 document.querySelectorAll('[data-page]').forEach(btn=>btn.addEventListener('click',laterRender));window.addEventListener('hashchange',laterRender);window.addEventListener('popstate',laterRender);document.addEventListener('DOMContentLoaded',laterRender);laterRender();
})();

;
/* ===== prime-results-category-script ===== */
(function(){
 const defaultCategories=['Tuition Classes','Hindi Classes','Spoken English','Spoken Hindi','Tutorial NIOS','NEET Coaching','JEE Coaching'];
 const moveGrowCategories=['Dance','Silambam','Freestyle','Western Dance','Bharatanatyam','Performance & Events'];
 function categoriesFor(group){return group==='onegroup'?moveGrowCategories:defaultCategories}
 const modal=document.getElementById('primeResultsDetailModal'),grid=document.getElementById('primeResultsDetailGrid'),title=document.getElementById('primeResultsDetailTitle'),ownerTools=document.getElementById('primeResultsOwnerTools'),inlineUpload=document.getElementById('primeResultsInlineUpload'),inlineCategory=document.getElementById('primeResultsInlineCategory'),inlineStatus=document.getElementById('primeResultsInlineStatus');if(!modal||!grid)return;let active='';
 function openDB(){return new Promise((resolve,reject)=>{const req=indexedDB.open('primeGroupOwnerMediaDB_v1',1);req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
 function readAll(db){return new Promise((resolve,reject)=>{const req=db.transaction('media').objectStore('media').getAll();req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error)})}
 function activeGroup(){let hash=(location.hash||'').slice(1);if(['institute','onegroup','digit','skill','sport'].includes(hash))return hash;return window.__primeActiveGroup||'home'}
 function show(){modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';if(inlineCategory)inlineCategory.textContent=active;if(ownerTools)ownerTools.hidden=!document.body.classList.contains('prime-owner-logged-in');if(inlineStatus)inlineStatus.textContent='';render()}
 function close(){modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';grid.innerHTML=''}
 async function render(){grid.innerHTML='';title.textContent=active+' — Results & Achievements';if(ownerTools)ownerTools.hidden=!document.body.classList.contains('prime-owner-logged-in');if(inlineCategory)inlineCategory.textContent=active;try{const db=await openDB();const all=await readAll(db);const group=activeGroup();let items=all.filter(x=>x.section==='results'&&(x.resultCategory===active||(!x.resultCategory&&active==='Tuition Classes'))&&(x.group===group||(group==='home'&&x.group==='home')));items.sort((a,b)=>(a.createdAt||0)-(b.createdAt||0));if(!items.length){const empty=document.createElement('div');empty.className='prime-results-detail-empty';const h=document.createElement('h3');h.textContent='No photos or videos yet';const p=document.createElement('p');p.textContent='This category is ready for results, achievement photos and videos. Owner: open Owner Access, select Results & Achievements, choose “'+active+'”, then upload your media.';empty.append(h,p);grid.appendChild(empty);return}for(const item of items){const card=document.createElement('article');card.className='prime-results-detail-item';let media;if((item.type||'').startsWith('video/')){media=document.createElement('video');media.controls=true;media.playsInline=true}else{media=document.createElement('img');media.alt=item.title||item.name||active+' result'}media.src=URL.createObjectURL(item.blob);card.appendChild(media);if(item.title||item.name){const caption=document.createElement('h3');caption.textContent=item.title||item.name;card.appendChild(caption)}if(document.body.classList.contains('prime-owner-logged-in')){const remove=document.createElement('button');remove.type='button';remove.className='prime-gallery-photo-remove';remove.textContent='Remove';remove.addEventListener('click',async e=>{e.stopPropagation();if(!confirm('Remove this result photo/video?'))return;try{const db=await openDB();await new Promise((resolve,reject)=>{const tx=db.transaction('media','readwrite');tx.objectStore('media').delete(Number(item.id));tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});render()}catch(err){alert('Could not remove this media. Please retry.')}});card.appendChild(remove)}grid.appendChild(card)}}catch(e){const empty=document.createElement('div');empty.className='prime-results-detail-empty';empty.textContent='Could not load saved media. Please close and reopen this category.';grid.appendChild(empty)}}
 if(inlineUpload)inlineUpload.addEventListener('change',async()=>{const files=Array.from(inlineUpload.files||[]);if(!files.length)return;if(!document.body.classList.contains('prime-owner-logged-in')){if(inlineStatus)inlineStatus.textContent='Please log in through Owner Access first.';inlineUpload.value='';return}try{const db=await openDB();let saved=0;for(const file of files){if(!file.type.startsWith('image/')&&!file.type.startsWith('video/'))continue;await new Promise((resolve,reject)=>{const tx=db.transaction('media','readwrite');tx.objectStore('media').add({group:activeGroup(),section:'results',resultCategory:active,name:file.name,title:file.name,type:file.type,blob:file,createdAt:Date.now()});tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});saved++}inlineUpload.value='';if(inlineStatus)inlineStatus.textContent=saved+' file(s) uploaded directly to '+active+'.';await render()}catch(err){if(inlineStatus)inlineStatus.textContent='Upload failed. Try a smaller file or reload the website.'}});
 document.addEventListener('click',e=>{const card=e.target.closest('[data-result-category]');if(!card)return;active=card.getAttribute('data-result-category');show()});document.getElementById('primeResultsDetailClose').addEventListener('click',close);modal.addEventListener('click',e=>{if(e.target===modal)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('is-open'))close()});
})();

;
/* ===== prime-move-grow-owner-category-options ===== */
(function(){const group=document.getElementById('primeOwnerGroup'),category=document.getElementById('primeResultCategory');if(!group||!category)return;const institute=['Tuition Classes','Hindi Classes','Spoken English','Spoken Hindi','Tutorial NIOS','NEET Coaching','JEE Coaching'];const moveGrow=['Dance','Silambam','Freestyle','Western Dance','Bharatanatyam','Performance & Events'];function update(){const vals=group.value==='onegroup'?moveGrow:institute;const previous=category.value;category.innerHTML=vals.map(v=>'<option>'+v+'</option>').join('');if(vals.includes(previous))category.value=previous;}group.addEventListener('change',update);update();})();

;
/* ===== prime-free-demo-cta-script ===== */
(function(){
  const cta=document.getElementById('primeFreeDemoCTA');
  if(!cta)return;
  function update(){
    const detail=document.getElementById('detailPage');
    const title=(document.getElementById('detailTitle')?.textContent||'').trim().toLowerCase();
    const detailVisible=!!detail && getComputedStyle(detail).display!=='none' && detail.getAttribute('aria-hidden')!=='true';
    const eligible=detailVisible && (title==='prime institute' || title==='prime move and grow' || title==='prime move & grow' || title==='prime digit');
    cta.style.display=eligible?'flex':'none';
    document.body.classList.toggle('prime-demo-cta-visible',eligible);
  }
  cta.addEventListener('click',function(e){
    e.preventDefault();
    const modal=document.getElementById('modal');
    if(!modal)return;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  });
  const title=document.getElementById('detailTitle');
  const detail=document.getElementById('detailPage');
  if(title)new MutationObserver(update).observe(title,{childList:true,subtree:true,characterData:true});
  if(detail)new MutationObserver(update).observe(detail,{attributes:true,attributeFilter:['style','class','aria-hidden']});
  document.addEventListener('click',function(e){if(e.target.closest('[data-page]'))setTimeout(update,80);if(e.target.closest('#backBtn'))setTimeout(update,80);},true);
  window.addEventListener('hashchange',()=>setTimeout(update,80));
  window.addEventListener('popstate',()=>setTimeout(update,80));
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',update);else update();
  setTimeout(update,250);setTimeout(update,900);
})();

;
/* ===== prime-enquiry-form-reliable-fix ===== */
(function(){
 const cta=document.getElementById('primeFreeDemoCTA');
 const form=document.getElementById('form');
 const modal=document.getElementById('modal');
 if(!cta||!form||!modal)return;
 // Replace the demo-only fields with the requested enquiry fields.
 form.innerHTML=`
  <label for="primeEnquiryStudent">Student Name</label><input id="primeEnquiryStudent" name="studentName" autocomplete="name" placeholder="Student name" maxlength="100" required>
  <label for="primeEnquiryParent">Parent Name</label><input id="primeEnquiryParent" name="parentName" placeholder="Parent / Guardian name" maxlength="100" required>
  <label for="primeEnquiryGroup">Group</label><select id="primeEnquiryGroup" name="group" required><option value="Prime Institute" selected>Prime Institute</option></select>
  <label for="primeEnquiryCourse">Class Required</label><select id="primeEnquiryCourse" name="course" required><option value="">Select class</option><option>Tuition Classes</option><option>Hindi Classes</option><option>Spoken English</option><option>Spoken Hindi</option><option>Tutorial NIOS</option><option>NEET Coaching</option><option>JEE Coaching</option></select>
  <label for="primeEnquiryMobile">Mobile Number</label><input id="primeEnquiryMobile" name="mobileNumber" type="tel" inputmode="tel" autocomplete="tel" placeholder="Primary mobile number" pattern="[0-9+ ()-]{8,18}" required>
  <label for="primeEnquiryWhatsApp">WhatsApp Number</label><input id="primeEnquiryWhatsApp" name="whatsappNumber" type="tel" inputmode="tel" placeholder="WhatsApp number" pattern="[0-9+ ()-]{8,18}" required>
  <button class="btn purple" type="submit">Send Enquiry →</button>
  <div class="notice" id="notice" role="status" aria-live="polite">Thank you! Your enquiry form is filled. Online submission needs a connected form service.</div>`;
 const group=document.getElementById('primeEnquiryGroup');
 function openEnquiry(){
   // Open the enquiry modal directly. Do not depend on another button's click handler.
   modal.classList.add('show');
   modal.setAttribute('aria-hidden','false');
   document.body.style.overflow='hidden';
   if(group)group.value='Prime Institute';
   const title=document.getElementById('modalTitle');
   const desc=document.getElementById('modalDesc');
   if(title)title.textContent='Book a Free Demo';
   if(desc)desc.textContent='Share your details and the class you are interested in. Our team can contact you to arrange a demo.';
   const n=document.getElementById('notice');if(n)n.style.display='none';
   setTimeout(()=>document.getElementById('primeEnquiryStudent')?.focus({preventScroll:true}),80);
 }
 cta.addEventListener('click',function(e){e.preventDefault();e.stopImmediatePropagation();openEnquiry();},true);
 form.addEventListener('submit',function(e){
   e.preventDefault();
   if(!form.reportValidity())return;
   const n=document.getElementById('notice');if(n){n.style.display='block';n.textContent='✓ Details captured in this form. To actually deliver enquiries, connect this website to an email, CRM, or form backend.';}
 },true);
 // Make the X and backdrop reliably close the same modal, even if earlier scripts conflict.
 const closeBtn=document.getElementById('closeModal');
 function closeEnquiryModal(){
   modal.classList.remove('show');
   modal.setAttribute('aria-hidden','true');
   document.body.style.overflow='';
 }
 if(closeBtn)closeBtn.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();closeEnquiryModal();},true);
 modal.addEventListener('click',function(e){if(e.target===modal)closeEnquiryModal();});
 document.addEventListener('keydown',function(e){if(e.key==='Escape'&&modal.classList.contains('show'))closeEnquiryModal();});
 // Ensure CTA is positioned slightly higher than the screen edge and only on the two requested group pages.
 function updateCta(){
   const detail=document.getElementById('detailPage');
   const title=(document.getElementById('detailTitle')?.textContent||'').trim().toLowerCase();
   const visible=!!detail&&getComputedStyle(detail).display!=='none'&&detail.getAttribute('aria-hidden')!=='true';
   const eligible=visible&&(title==='prime institute'||title==='prime move and grow'||title==='prime move & grow');
   cta.style.display=eligible?'flex':'none';
   document.body.classList.toggle('prime-demo-cta-visible',eligible);
 }
 const title=document.getElementById('detailTitle'),detail=document.getElementById('detailPage');
 if(title)new MutationObserver(updateCta).observe(title,{childList:true,subtree:true,characterData:true});
 if(detail)new MutationObserver(updateCta).observe(detail,{attributes:true,attributeFilter:['style','class','aria-hidden']});
 document.addEventListener('click',e=>{if(e.target.closest('[data-page],#backBtn'))setTimeout(updateCta,120)},true);
 window.addEventListener('hashchange',()=>setTimeout(updateCta,100));
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',updateCta);else updateCta();
 setTimeout(updateCta,300);setTimeout(updateCta,1000);
})();

;
/* ===== prime-final-cta-state-manager ===== */
(function(){
  'use strict';
  const cta=document.getElementById('primeFreeDemoCTA');
  const detail=document.getElementById('detailPage');
  const title=document.getElementById('detailTitle');
  const branch=document.getElementById('branchContactSheet');
  const modal=document.getElementById('modal');
  if(!cta||!detail||!title)return;
  function isVisible(el){return !!el && getComputedStyle(el).display!=='none' && el.getAttribute('aria-hidden')!=='true';}
  function isOverlayOpen(){return (branch && (branch.classList.contains('show')||branch.classList.contains('branch-popup-open'))) || (modal && modal.classList.contains('show'));}
  function update(){
    const name=(title.textContent||'').trim().toLowerCase();
    const isDigit=name==='prime digit' || name.includes('prime digit');
    const eligible=isVisible(detail) && (name==='prime institute'||name==='prime move and grow'||name==='prime move & grow'||isDigit);
    const blocked=isOverlayOpen();
    cta.textContent=isDigit?'Register Now':'Book Free Demo';
    cta.setAttribute('aria-label',isDigit?'Register Now':'Book Free Demo');
    cta.dataset.ctaMode=isDigit?'register':'demo';
    cta.style.display=eligible&&!blocked?'flex':'none';
    cta.style.visibility=eligible&&!blocked?'visible':'hidden';
    cta.style.pointerEvents=eligible&&!blocked?'auto':'none';
    document.body.classList.toggle('prime-demo-cta-visible',eligible&&!blocked);
    document.body.classList.toggle('prime-overlay-open',blocked);
  }
  const mo=new MutationObserver(update);
  mo.observe(title,{subtree:true,childList:true,characterData:true});
  mo.observe(detail,{attributes:true,attributeFilter:['style','class','aria-hidden']});
  if(branch)mo.observe(branch,{attributes:true,attributeFilter:['class','style','aria-hidden']});
  if(modal)mo.observe(modal,{attributes:true,attributeFilter:['class','style','aria-hidden']});
  document.addEventListener('click',e=>{
    if(e.target.closest('[data-page]')||e.target.closest('#backBtn'))setTimeout(update,0);
    if(e.target.closest('#closeModal')||e.target.closest('#closeBranchSheet'))setTimeout(update,0);
  },true);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')setTimeout(update,0);},true);
  window.addEventListener('hashchange',update);
  window.addEventListener('popstate',update);
  update();
  setTimeout(update,100);setTimeout(update,500);
})();

;
/* ===== prime-live-demo-section-script ===== */
(function(){
  function addLiveDemoSection(){
    return; /* Live Regular Demo Classes section removed */
    const detail=document.querySelector('#detailPage .detail-content');
    if(!detail || document.getElementById('liveRegularDemoClasses')) return;
    const section=document.createElement('section');
    section.className='section community-section soft-section';
    section.id='liveRegularDemoClasses';
    section.innerHTML=`
      <div class="wrap">
        <div class="section-head">
          <div class="kicker">Learn with us live</div>
          <h2>Our Live Regular Demo Classes</h2>
          <p>Explore our regular demo classes and get a feel for the learning experience.</p>
        </div>
        <div class="video-review-wrap">
          <button class="review-arrow review-prev" type="button" aria-label="Previous demo classes" data-live-demo-dir="-1">‹</button>
          <div class="video-review-track" id="liveRegularDemoTrack" tabindex="0" aria-label="Our live regular demo classes">
            <article class="video-review-card"><div class="video-frame"><div class="video-placeholder"><span>▶</span><strong>Live Demo Class 1</strong><small>Demo class video will appear here</small></div></div></article>
            <article class="video-review-card"><div class="video-frame"><div class="video-placeholder"><span>▶</span><strong>Live Demo Class 2</strong><small>Demo class video will appear here</small></div></div></article>
            <article class="video-review-card"><div class="video-frame"><div class="video-placeholder"><span>▶</span><strong>Live Demo Class 3</strong><small>Demo class video will appear here</small></div></div></article>
          </div>
          <button class="review-arrow review-next" type="button" aria-label="Next demo classes" data-live-demo-dir="1">›</button>
        </div>
        <div class="review-dots" aria-label="Demo classes navigation"><span class="active"></span><span></span><span></span></div>
      </div>`;
    const shared=document.getElementById('groupSharedSections');
     if(shared && shared.parentElement===detail){ detail.insertBefore(section,shared); }
     else { const branchList=document.getElementById('branchList'); const mainWrap=branchList&&branchList.closest('.wrap'); if(mainWrap && mainWrap.parentElement===detail) detail.insertBefore(section,mainWrap.nextSibling); else detail.appendChild(section); }
    section.querySelectorAll('[data-live-demo-dir]').forEach(btn=>btn.addEventListener('click',()=>{
      const track=section.querySelector('#liveRegularDemoTrack');
      if(!track)return;
      const card=track.querySelector('.video-review-card');
      const gap=parseFloat(getComputedStyle(track).columnGap||getComputedStyle(track).gap)||14;
      track.scrollBy({left:(card?card.getBoundingClientRect().width:280)+gap * Number(btn.dataset.liveDemoDir),behavior:'smooth'});
    }));
    const track=section.querySelector('#liveRegularDemoTrack');
    const dots=Array.from(section.querySelectorAll('.review-dots span'));
    if(track&&dots.length)track.addEventListener('scroll',()=>{
      const card=track.querySelector('.video-review-card'); if(!card)return;
      const gap=parseFloat(getComputedStyle(track).gap)||14;
      const index=Math.max(0,Math.min(dots.length-1,Math.round(track.scrollLeft/(card.getBoundingClientRect().width+gap))));
      dots.forEach((dot,i)=>dot.classList.toggle('active',i===index));
    },{passive:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addLiveDemoSection,{once:true});else addLiveDemoSection();
  window.addEventListener('pageshow',addLiveDemoSection);
})();

;
/* ===== block-59 ===== */
(function(){try{
const $=(q,r=document)=>r.querySelector(q),$$=(q,r=document)=>[...r.querySelectorAll(q)];
const LS={g(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},s(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}}};
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000)};
/* ---- offer banner ---- */
const DEF={text:'🎉 Admissions open — Book a demo class for just ₹99 today!',on:true};
function renderOffer(){const o=LS.g('primeOffer',DEF),b=$('#offerBar');b.textContent=o.text;b.hidden=!(o.on&&o.text)}
renderOffer();
/* ---- modals ---- */
const open=id=>{$(id).classList.add('show');document.body.style.overflow='hidden'},close=m=>{m.classList.remove('show');document.body.style.overflow=''};
$$('.mini-modal').forEach(m=>{m.addEventListener('click',e=>{if(e.target===m||e.target.hasAttribute('data-closem'))close(m)})});
document.addEventListener('keydown',e=>{if(e.key==='Escape')$$('.mini-modal.show').forEach(close)});
/* ---- demo booking: today..+2 days ---- */
const pad=n=>String(n).padStart(2,'0'),iso=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
const SLOTS=[10,11,12,14,15,16,17,18];
function fillTimes(){const d=$('#demoDate').value,sel=$('#demoTime'),now=new Date();sel.innerHTML='';
 SLOTS.forEach(h=>{const ok=d!==iso(now)||h>now.getHours();if(!ok)return;const o=document.createElement('option');o.value=pad(h)+':00';o.textContent=(h%12||12)+':00 '+(h<12?'AM':'PM');sel.appendChild(o)});
 if(!sel.options.length)sel.innerHTML='<option value="">No slots left today — pick another date</option>'}
$('#demoBtn').addEventListener('click',()=>{const n=new Date(),x=new Date(n.getTime()+2*864e5),di=$('#demoDate');di.min=iso(n);di.max=iso(x);di.value=iso(n);fillTimes();$('#demoNotice').style.display='none';open('#demoModal')});
$('#demoDate').addEventListener('change',fillTimes);
$('#demoForm').addEventListener('submit',e=>{e.preventDefault();const f=e.target,n=$('#demoNotice');
 const d=f.date.value,mn=f.date.min,mx=f.date.max;if(d<mn||d>mx||!f.time.value){toast('Please pick a date within the next 3 days and a time.');return}
 n.style.display='block';n.textContent='✓ Demo requested for '+d+' at '+f.time.value+'. (Demo form — connect to your email/Sheet to receive it.)';
 const reqs=LS.g('primeDemoRequests',[]);reqs.push({name:f.name.value,phone:f.phone.value,group:f.group.value,date:d,time:f.time.value});LS.s('primeDemoRequests',reqs)});
/* ---- notify me ---- */
document.addEventListener('click',e=>{const b=e.target.closest('[data-notify]');if(!b)return;e.stopPropagation();e.preventDefault();$('#notifyTitle').textContent='Notify me: '+b.dataset.notify;open('#notifyModal')},true);
$('#notifyForm').addEventListener('submit',e=>{e.preventDefault();toast('Thanks! We will notify you when it launches.');e.target.reset();close($('#notifyModal'))});
/* ---- trust counters ---- */
const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;io.unobserve(en.target);const st=$('strong',en.target),m=st.textContent.match(/^([\d,]+)(.*)$/);if(!m||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 const end=+m[1].replace(/,/g,''),t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/1200);st.textContent=Math.round(end*(1-Math.pow(1-p,3))).toLocaleString('en-IN')+m[2];if(p<1)requestAnimationFrame(f)})(t0)}),{threshold:.6});
$$('.trustitem').forEach(i=>io.observe(i));
/* ---- quiz ---- */
const REC={tuition:['Prime Institute','School Tuition','Subject-based academic support for your class.'],neet:['Prime Institute','NEET Coaching','Focused NEET preparation.'],jee:['Prime Institute','JEE Coaching','Focused JEE preparation.'],english:['Prime Institute','Spoken English','Build speaking confidence (also available online).'],hindi:['Prime Institute','Spoken Hindi','Learn useful Hindi, written and spoken.'],dance:['Prime Move and Grow','Dance','Dance, movement and performance programmes.'],online:['Prime Digit','Online Classes','Flexible online learning from home.']};
$('#quizGo').addEventListener('click',()=>{const r=REC[$('#quizGoal').value],o=$('#quizResult');o.style.display='block';o.innerHTML='<b>Recommended: '+r[1]+'</b> <small>('+r[0]+')</small><br>'+r[2]+' <small>For '+$('#quizClass').value+'.</small><br><button class="btn purple" id="quizEnq" type="button" style="margin-top:10px">Enquire about '+r[1]+' →</button>';
 $('#quizEnq').onclick=()=>{$('#headerEnquire').click();const g=$('#formGroup')||$('#primeEnquiryGroup'),c=$('#formCourse')||$('#primeEnquiryCourse');if(!g||!c)return;g.value=r[0];if(![...c.options].some(x=>x.text===r[1])){const op=document.createElement('option');op.textContent=r[1];c.appendChild(op)}c.value=r[1]}});
/* ---- course info on detail pages ---- */
const INFO={fees:'Fees on request',timings:'Morning & evening batches (confirm at enquiry)',duration:'Ongoing / term-based',age:'Based on programme — ask us'};
const dp=$('#detailPage');if(dp)new MutationObserver(()=>{const m=$('.detail-meta',dp);if(m&&!$('.course-info',dp))m.insertAdjacentHTML('afterend','<div class="course-info"><div><b>Fees</b>'+INFO.fees+'</div><div><b>Batch timings</b>'+INFO.timings+'</div><div><b>Duration</b>'+INFO.duration+'</div><div><b>Age / class group</b>'+INFO.age+'</div></div>')}).observe(dp,{childList:true,subtree:true});
/* ---- toppers ---- */
function renderToppers(){const list=LS.g('primeToppers',[]);$$('.results-section').forEach(sec=>{let w=$('.topper-strip',sec);if(!w){w=document.createElement('div');w.className='topper-strip';sec.querySelector('.wrap').appendChild(w)}
 w.innerHTML=list.map(t=>'<div class="topper"><img src="'+t.photo+'" alt="'+t.name.replace(/"/g,'')+'"><b>'+t.name.replace(/</g,'&lt;')+'</b><span>'+t.score.replace(/</g,'&lt;')+'</span><br><small>'+t.year+'</small></div>').join('');w.style.display=list.length?'flex':'none'})}
renderToppers();
/* ---- owner panel additions ---- */
const panel=$('#primeOwnerPanel');if(panel){const o=LS.g('primeOffer',DEF);panel.insertAdjacentHTML('afterbegin','<div class="owner-v2"><h3>Offers banner (home page)</h3><input type="text" id="offTxt" maxlength="140" value="'+o.text.replace(/"/g,'&quot;')+'"><label><input type="checkbox" id="offOn" '+(o.on?'checked':'')+'> Show banner</label><div class="owner-actions"><button class="btn purple" type="button" id="offSave">Save banner</button></div></div><div class="owner-v2"><h3>Add topper (real photo, name, score, year)</h3><input type="text" id="tpName" placeholder="Student name"><input type="text" id="tpScore" placeholder="Score / rank, e.g. 612/720"><input type="number" id="tpYear" placeholder="Year" value="'+new Date().getFullYear()+'"><input type="file" id="tpPhoto" accept="image/*"><label><input type="checkbox" id="tpOk"> I have the parent’s permission to publish this photo</label><div class="owner-actions"><button class="btn purple" type="button" id="tpAdd">Add topper</button><button class="btn ghost" type="button" id="tpClear">Remove all</button></div></div>');
 $('#offSave').onclick=()=>{LS.s('primeOffer',{text:$('#offTxt').value.trim(),on:$('#offOn').checked});renderOffer();toast('Banner updated')};
 $('#tpAdd').onclick=()=>{const f=$('#tpPhoto').files[0],n=$('#tpName').value.trim(),sc=$('#tpScore').value.trim();if(!f||!n||!sc){toast('Photo, name and score are required');return}if(!$('#tpOk').checked){toast('Parent permission must be confirmed');return}
  const r=new FileReader();r.onload=ev=>{const im=new Image();im.onload=()=>{const c=document.createElement('canvas'),k=Math.min(1,360/Math.max(im.width,im.height));c.width=im.width*k;c.height=im.height*k;c.getContext('2d').drawImage(im,0,0,c.width,c.height);const l=LS.g('primeToppers',[]);l.push({name:n,score:sc,year:$('#tpYear').value,photo:c.toDataURL('image/jpeg',.8)});if(LS.s('primeToppers',l)){renderToppers();toast('Topper added')}else toast('Storage full')};im.src=ev.target.result};r.readAsDataURL(f)};
 $('#tpClear').onclick=()=>{LS.s('primeToppers',[]);renderToppers()}}
/* ---- Tamil / English ---- */
const D={'Our Groups':'எங்கள் குழுமங்கள்','Founder & Results':'நிறுவனர் & முடிவுகள்','Enquire Now':'இப்போது விசாரிக்க','✉ Enquire Now':'✉ இப்போது விசாரிக்க','Explore our family':'எங்கள் குடும்பத்தை அறியுங்கள்','Choose a group to explore its courses, programmes and branches.':'ஒரு பிரிவைத் தேர்ந்தெடுத்து அதன் படிப்புகள், திட்டங்கள், கிளைகளைப் பாருங்கள்.','Meet Our Founder':'நிறுவனரை சந்திக்கவும்','About Us':'எங்களைப் பற்றி','Of Experience':'அனுபவம்','Enrolled Across Our Groups':'எங்கள் பிரிவுகளில் சேர்ந்தவர்கள்','Learning & Talent Programmes':'கற்றல் & திறன் திட்டங்கள்','Dedicated Teaching & Training Team':'அர்ப்பணிப்புள்ள ஆசிரியர் குழு','LAUNCHING SOON':'விரைவில் தொடக்கம்','Coming soon':'விரைவில்','Building Every Student’s Potential':'ஒவ்வொரு மாணவரின் திறனையும் உருவாக்குதல்','Our Vision':'எங்கள் நோக்கு','Our Mission':'எங்கள் பணி'};
$$('header a,header .btn,.floating button,main *,footer *').forEach(e=>{if(e.children.length||e.dataset.ta)return;const t=e.textContent.trim();if(D[t])e.dataset.ta=D[t]});
function setLang(l){$$('[data-ta]').forEach(e=>{if(!e.dataset.en)e.dataset.en=e.textContent;e.textContent=l==='ta'?e.dataset.ta:e.dataset.en});$('#langBtn').textContent=l==='ta'?'English':'தமிழ்';document.documentElement.lang=l==='ta'?'ta':'en';LS.s('primeLang',l)}
$('#langBtn').onclick=()=>setLang(LS.g('primeLang','en')==='ta'?'en':'ta');
if(LS.g('primeLang','en')==='ta')setLang('ta');
}catch(err){console.error('v2 upgrades',err)}})();

;
/* ===== v2-testimonial-links ===== */
(function(){try{
const $=(q,r=document)=>r.querySelector(q),$$=(q,r=document)=>[...r.querySelectorAll(q)];
const TK='primeTestimonialLinks',SECS={studentTestimonials:'Student & Parent',facultyTestimonials:'Faculty'};
const GN={institute:'Prime Institute',onegroup:'Prime Move and Grow',digit:'Prime Digit'};
const get=()=>{try{return JSON.parse(localStorage.getItem(TK))||{}}catch(e){return {}}};
const put=o=>{try{localStorage.setItem(TK,JSON.stringify(o));return true}catch(e){return false}};
const esc=t=>String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function yt(u){const m=u.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([\w-]{6,})/);return m?m[1]:null}
function cardHTML(u,sec,n){const y=yt(u),tag=SECS[sec];
 if(y)return '<article class="video-review-card"><div class="video-frame"><iframe src="https://www.youtube.com/embed/'+esc(y)+'" title="'+tag+' video '+n+'" loading="lazy" allowfullscreen style="width:100%;height:100%;border:0"></iframe></div></article>';
 const ig=/instagram\.com/.test(u);
 return '<article class="video-review-card"><a class="video-frame ig igcard" href="'+esc(u)+'" target="_blank" rel="noopener"><span class="ig-badge">'+(ig?'Instagram Reel':'Video')+'</span><span class="ig-play">▶</span><strong>'+tag+' Story '+n+'</strong><small>Real experiences from Prime Group</small><span class="ig-btn">Watch ↗</span></a></article>'}
const emptyHTML=sec=>'<article class="video-review-card"><div class="video-frame emptycard"><span class="e-badge">Coming soon</span><span class="e-play"><i>▶</i></span><strong>Video coming soon</strong><small>'+SECS[sec]+' stories will be shared here</small><span class="e-bar"><b></b></span><span class="e-note">🔔 Stay tuned</span></div></article>';
function apply(){const L=get();
 Object.keys(SECS).forEach(sec=>$$('[id^="group-"][id$="-'+sec+'"]').forEach(cl=>{
  const g=cl.id.slice(6,-(sec.length+1)),tr=$('.video-review-track',cl);if(!tr)return;
  const items=(L[g]||{})[sec]||[],sig=JSON.stringify(items);if(tr.dataset.v2===sig)return;tr.dataset.v2=sig;
  if(g==='institute'){$$('.v2-added',tr).forEach(x=>x.remove());items.forEach((u,i)=>tr.insertAdjacentHTML('beforeend',cardHTML(u,sec,i+4).replace('video-review-card','video-review-card v2-added')))}
  else tr.innerHTML=items.length?items.map((u,i)=>cardHTML(u,sec,i+1)).join(''):[1,2,3].map(()=>emptyHTML(sec)).join('')}))}
const host=$('#groupSharedSections');if(host)new MutationObserver(apply).observe(host,{childList:true,subtree:true});
apply();
/* owner access */
const panel=$('#primeOwnerPanel');if(panel){
 panel.insertAdjacentHTML('afterbegin','<div class="owner-v2"><h3>Testimonial video links (Instagram / YouTube)</h3><select id="tlG">'+Object.keys(GN).map(k=>'<option value="'+k+'">'+GN[k]+'</option>').join('')+'</select><select id="tlS">'+Object.keys(SECS).map(k=>'<option value="'+k+'">'+SECS[k]+' testimonials</option>').join('')+'</select><input type="text" id="tlU" placeholder="Paste video / reel link (https://...)"><div class="owner-actions"><button class="btn purple" type="button" id="tlAdd">Add link</button></div><div id="tlList"></div></div>');
 const list=()=>{const g=$('#tlG').value,s=$('#tlS').value,items=(get()[g]||{})[s]||[];$('#tlList').innerHTML=items.length?items.map((u,i)=>'<div class="tl-row"><span>'+esc(u)+'</span><button type="button" data-i="'+i+'">Remove</button></div>').join(''):'<div class="tl-row">No links added yet for this group/section.</div>'};
 $('#tlG').onchange=$('#tlS').onchange=list;list();
 $('#tlAdd').onclick=()=>{const u=$('#tlU').value.trim();if(!/^https?:\/\//i.test(u)){alert('Please paste a full link starting with https://');return}
  const L=get(),g=$('#tlG').value,s=$('#tlS').value;(L[g]=L[g]||{})[s]=(L[g][s]||[]).concat(u.split('?')[0]);if(put(L)){$('#tlU').value='';$$('[data-v2]').forEach(t=>delete t.dataset.v2);apply();list()}};
 $('#tlList').onclick=e=>{const b=e.target.closest('button[data-i]');if(!b)return;const L=get(),g=$('#tlG').value,s=$('#tlS').value;L[g][s].splice(+b.dataset.i,1);put(L);$$('[data-v2]').forEach(t=>delete t.dataset.v2);apply();list()}}
}catch(err){console.error('testimonial links',err)}})();

;
/* ===== v2-media ===== */
(function(){try{
const DATA={institute:[{"src": "images/gallery-institute-1.webp", "kind": "poster", "t": "See our work", "c": "Results, activities, events and more"}, {"src": "images/gallery-institute-2.webp", "kind": "poster", "t": "Continuous assessment", "c": "Regular assessment shows progress early"}, {"src": "images/gallery-institute-3.webp", "kind": "poster", "t": "Great faculty", "c": "We build a teaching team"}, {"src": "images/gallery-institute-4.webp", "kind": "photo", "t": "Event moment", "c": "Celebrating with the Prime family"}, {"src": "images/gallery-institute-5.webp", "kind": "photo", "t": "Celebration", "c": "Joyful moments at Prime Institute"}],onegroup:[{"src": "images/gallery-institute-6.webp", "kind": "land", "t": "Body movement & fitness", "c": "Helping you move better, live stronger"}, {"src": "images/gallery-onegroup-1.webp", "kind": "land", "t": "Our journey so far", "c": "50+ students trained · 5+ courses · 2+ years"}, {"src": "images/gallery-onegroup-2.webp", "kind": "land", "t": "Our mission", "c": "Building discipline, confidence & wellness"}, {"src": "images/gallery-onegroup-3.webp", "kind": "port", "t": "Dance performance", "c": "Prime Move and Grow"}, {"src": "images/gallery-onegroup-4.webp", "kind": "port", "t": "Dance performance", "c": "Prime Move and Grow"}, {"src": "images/gallery-onegroup-5.webp", "kind": "port", "t": "Dance performance", "c": "Prime Move and Grow"}],digit:[{"src": "images/gallery-onegroup-6.webp", "kind": "photo", "t": "Event moment", "c": "Prime Digit"}, {"src": "images/gallery-digit-1.webp", "kind": "photo", "t": "Group photo", "c": "Gift presentation with the team"}, {"src": "images/gallery-digit-2.webp", "kind": "photo", "t": "Gift presentation", "c": "Celebrating a special moment"}, {"src": "images/gallery-digit-3.webp", "kind": "photo navy", "t": "Meet our founder", "c": "Prime Group"}, {"src": "images/gallery-digit-4.webp", "kind": "port pa", "t": "Guest felicitation", "c": "Warm welcome at Prime"}, {"src": "images/gallery-digit-5.webp", "kind": "port pb", "t": "Expansion inauguration", "c": "New branches, more learning opportunities"}]};
const NAME={institute:'Prime Institute',onegroup:'Prime Move and Grow',digit:'Prime Digit',home:'Prime Group'};
const $=(q,r=document)=>r.querySelector(q),$$=(q,r=document)=>[...r.querySelectorAll(q)];
const esc=t=>String(t==null?'':t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const LSg=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}},LSs=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
let CACHE=[];
const idb=()=>new Promise((res,rej)=>{if(!window.indexedDB)return rej(new Error('no indexedDB'));const r=indexedDB.open('primeSiteMedia',1);r.onupgradeneeded=()=>r.result.createObjectStore('photos',{keyPath:'id'});r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
const tx=(mode,fn)=>idb().then(db=>new Promise((res,rej)=>{const q=fn(db.transaction('photos',mode).objectStore('photos'));q.onsuccess=()=>res(q.result);q.onerror=()=>rej(q.error)}));
const load=()=>tx('readonly',s=>s.getAll()).then(a=>{CACHE=a||[]}).catch(()=>{CACHE=[]});
function itemsFor(g,s){const hid=LSg('primeHiddenBuiltins',[]);
 const base=(s==='gallery'&&DATA[g]?DATA[g]:[]).map((p,i)=>Object.assign({},p,{id:g+':'+i,builtin:true})).filter(p=>!hid.includes(p.id));
 const add=CACHE.filter(x=>x.section===s&&(g==='home'||x.group===g)).sort((a,b)=>a.ts-b.ts).map(x=>({id:x.id,src:x.src,kind:'user',t:x.title||(s==='results'?'Result & achievement':'Gallery photo'),c:NAME[x.group]||''}));
 return base.concat(add)}
function fill(box){const g=box.dataset.g,s=box.dataset.s,its=itemsFor(g,s);
 if(!its.length){box.innerHTML=[1,2,3].map(()=>'<div class="v2-empty"><span class="e-badge">Coming soon</span><span class="e-play">'+(s==='results'?'🏆':'📷')+'</span><strong>'+(s==='results'?'Results coming soon':'Photos coming soon')+'</strong><small>'+(s==='results'?'Verified results &amp; achievements will be shared here':'Moments from Prime will be shared here')+'</small></div>').join('');return}
 box.innerHTML=its.map((p,i)=>'<button type="button" class="v2-photo '+esc(p.kind)+'" data-i="'+i+'" aria-label="View photo: '+esc(p.t)+'"><img src="'+p.src+'" alt="'+esc(NAME[g])+' — '+esc(p.t)+'" loading="lazy" decoding="async"><span class="v2-zoom">⤢</span><span class="v2-cap"><b>'+esc(p.t)+'</b><small>'+esc(p.c)+'</small></span></button>').join('')}
function targets(){const t=[];
 Object.keys(DATA).forEach(g=>{const cl=document.getElementById('group-'+g+'-imageGallery');if(cl)t.push({el:cl,g,s:'gallery',a:()=>$('.gallery-grid',cl)||$('.section-head',cl)})});
 $$('[id^="group-"][id$="-results"]').forEach(cl=>{t.push({el:cl,g:cl.id.slice(6,-8),s:'results',a:()=>$('.section-head',cl)})});
 const r=document.getElementById('results');if(r)t.push({el:r,g:'home',s:'results',a:()=>$('.section-head',r)});return t}
function apply(){targets().forEach(t=>{if($('.v2-photos',t.el))return;const a=t.a();if(!a)return;
 if(t.s==='results'){const p=$('.section-head p',t.el);if(p)p.textContent='Celebrating our students’ progress, awards and milestones.'}
 a.insertAdjacentHTML('afterend','<div class="v2-photos" data-g="'+t.g+'" data-s="'+t.s+'"></div>');fill($('.v2-photos',t.el))})}
const renderAll=()=>{apply();$$('.v2-photos').forEach(fill)};
const host=document.getElementById('groupSharedSections');if(host)new MutationObserver(apply).observe(host,{childList:true,subtree:true});
apply();load().then(renderAll);
/* lightbox */
const lb=document.createElement('div');lb.className='v2-lb';lb.innerHTML='<button class="x" aria-label="Close">×</button><button class="p" aria-label="Previous">‹</button><img alt=""><div class="cap"></div><button class="n" aria-label="Next">›</button>';document.body.appendChild(lb);
let cur=0,L=[];const show=i=>{cur=(i+L.length)%L.length;const p=L[cur];$('img',lb).src=p.src;$('.cap',lb).innerHTML=esc(p.t)+'<small>'+esc(p.c)+' · '+(cur+1)+' / '+L.length+'</small>';lb.classList.add('show')};
document.addEventListener('click',e=>{const b=e.target.closest('.v2-photo');if(b){const bx=b.closest('.v2-photos');L=itemsFor(bx.dataset.g,bx.dataset.s);show(+b.dataset.i);return}
 if(!lb.classList.contains('show'))return;if(e.target.closest('.p')){show(cur-1);return}if(e.target.closest('.n')){show(cur+1);return}lb.classList.remove('show')});
document.addEventListener('keydown',e=>{if(!lb.classList.contains('show'))return;if(e.key==='Escape')lb.classList.remove('show');if(e.key==='ArrowRight')show(cur+1);if(e.key==='ArrowLeft')show(cur-1)});
/* owner: photo manager */
const panel=$('#primeOwnerPanel');
if(panel){panel.insertAdjacentHTML('afterbegin','<div class="owner-v2" id="mediaMgr"><h3>Photos: Image Gallery &amp; Results &amp; Achievements</h3><select id="pmG"><option value="institute">Prime Institute</option><option value="onegroup">Prime Move and Grow</option><option value="digit">Prime Digit</option></select><select id="pmS"><option value="gallery">Image Gallery</option><option value="results">Results &amp; Achievements (home page shows all groups)</option></select><input type="text" id="pmCap" placeholder="Caption (optional)"><input type="file" id="pmFile" accept="image/*" multiple><label><input type="checkbox" id="pmOk"> I have permission to publish these photos</label><div class="owner-actions"><button class="btn purple" type="button" id="pmAdd">Add photos</button><button class="btn ghost" type="button" id="pmRestore">Restore default photos</button></div><div id="pmList"></div></div>');
 const g=()=>$('#pmG').value,sec=()=>$('#pmS').value;
 const list=()=>{const its=itemsFor(g(),sec());$('#pmList').innerHTML=its.length?its.map(p=>'<div class="pm-row"><img src="'+p.src+'" alt=""><span>'+esc(p.t)+(p.builtin?' <small>(default)</small>':'')+'</span><button type="button" data-id="'+esc(p.id)+'">Remove</button></div>').join(''):'<div class="pm-row">No photos here yet.</div>'};
 const refresh=()=>{$$('.v2-photos').forEach(fill);list()};
 $('#pmG').onchange=$('#pmS').onchange=list;list();
 const shrink=f=>new Promise((res,rej)=>{const r=new FileReader();r.onload=e=>{const im=new Image();im.onload=()=>{const k=Math.min(1,1600/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);res(c.toDataURL('image/jpeg',.86))};im.onerror=rej;im.src=e.target.result};r.onerror=rej;r.readAsDataURL(f)});
 $('#pmAdd').onclick=async()=>{const fs=[...$('#pmFile').files];if(!fs.length){alert('Choose one or more photos first.');return}if(!$('#pmOk').checked){alert('Please confirm you have permission to publish these photos.');return}
  try{let n=0;for(const f of fs){const src=await shrink(f);const id='u'+Date.now()+'-'+(n++);await tx('readwrite',s=>s.put({id,group:g(),section:sec(),src,title:$('#pmCap').value.trim(),ts:Date.now()+n}))}
   await load();$('#pmFile').value='';$('#pmCap').value='';refresh()}catch(err){alert('Could not save the photos in this browser: '+(err&&err.message||err))}};
 $('#pmList').onclick=async e=>{const b=e.target.closest('button[data-id]');if(!b)return;const id=b.dataset.id;
  if(/^(institute|onegroup|digit):\d+$/.test(id)){const h=LSg('primeHiddenBuiltins',[]);h.push(id);LSs('primeHiddenBuiltins',h)}
  else{try{await tx('readwrite',s=>s.delete(id));await load()}catch(err){alert('Could not remove it.')}}
  refresh()};
 $('#pmRestore').onclick=()=>{LSs('primeHiddenBuiltins',[]);refresh()}}
/* click ripple */
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.addEventListener('pointerdown',e=>{if(rm||e.button>0)return;const b=e.target.closest('.btn,button,[role="button"],.notifybtn');if(!b||b.disabled||b.matches('.v2-photo,.v2-lb *,.group'))return;
 if(getComputedStyle(b).position==='static')b.style.position='relative';
 const r=b.getBoundingClientRect(),d=Math.max(r.width,r.height)*2,w=document.createElement('span');w.className='v2-rw';
 const p=document.createElement('span');p.className='v2-rp';p.style.cssText='width:'+d+'px;height:'+d+'px;left:'+(e.clientX-r.left-d/2)+'px;top:'+(e.clientY-r.top-d/2)+'px';
 w.appendChild(p);b.appendChild(w);setTimeout(()=>w.remove(),700)},{passive:true});
}catch(err){console.error('v2 media',err)}})();

;
/* ===== v2-payment-config ===== */
/* ===== PAYMENT SETTINGS — edit here =====
   payLink  : your hosted ₹99 payment link (Razorpay / Cashfree / PhonePe / Instamojo payment link). Must start with https://
   upi      : your UPI ID, e.g. name@bank  (used only when payLink is empty)
   payeeName: name shown in the UPI app                                        */
window.PRIME_PAY={amount:99,payLink:"",upi:"",payeeName:"Prime Group"};

;
/* ===== v2-contact ===== */
(function(){try{
const PHONE='7094563929',WA='917094563929';
const $=(q,r=document)=>r.querySelector(q);
const when=()=>new Date().toLocaleString('en-IN',{dateStyle:'medium',timeStyle:'short'});
function sendWA(msg){const url='https://wa.me/'+WA+'?text='+encodeURIComponent(msg);const w=window.open(url,'_blank');if(w){try{w.opener=null}catch(e){}}else{location.href=url}}
const val=(f,n)=>{const el=f.elements[n];if(!el)return '';const v=el.tagName==='SELECT'?(el.selectedOptions[0]?el.selectedOptions[0].text:''):el.value;return String(v||'').trim()};
function lines(form){const out=[];[...form.elements].forEach(el=>{if(!el.name||el.type==='submit'||el.type==='button'||el.type==='hidden')return;
 let v=el.tagName==='SELECT'?(el.selectedOptions[0]?el.selectedOptions[0].text:''):el.value;v=String(v||'').trim();if(!v||/^select/i.test(v))return;
 const lb=el.id&&form.querySelector('label[for="'+el.id+'"]');let name=(lb&&lb.firstChild?lb.firstChild.textContent:(lb?lb.textContent:''))||el.getAttribute('placeholder')||el.name;
 out.push('• '+String(name).replace(/\s*\(.*?\)\s*$/,'').trim()+': '+v)});return out}
/* Enquire Now / Book Free Demo (original enquiry form) */
document.addEventListener('submit',e=>{const f=e.target;
 if(f.id==='form'){e.preventDefault();e.stopImmediatePropagation();if(!f.reportValidity())return;
  const t=($('#modalTitle')||{}).textContent||'Enquiry';
  const nm=val(f,'studentName')||val(f,'name')||'a student',cs=val(f,'course')||val(f,'group')||'your courses';
  sendWA('Hey there, I am '+nm+'. I need to enquire about '+cs+'.\n\n*'+t.trim()+' details*\n'+lines(f).join('\n')+'\n\n🕒 '+when()+'\n(Sent from the Prime Group website)');
  const n=$('#notice');if(n){n.style.display='block';n.textContent='✓ Opening WhatsApp — just press Send to deliver your enquiry.'}
  setTimeout(()=>{const c=$('#closeModal');if(c)c.click();f.reset()},1500);return}
 if(f.id==='demoForm'){e.preventDefault();e.stopImmediatePropagation();if(!f.reportValidity())return;
  const d=f.date.value;if(d<f.date.min||d>f.date.max||!f.time.value){alert('Please pick a date within the next 3 days and a time.');return}
  const P=window.PRIME_PAY||{},amt=P.amount||99,nm=val(f,'name')||'a student',gp=val(f,'group')||'Prime Group',tm=f.time.selectedOptions[0].text;
  let url='',via='';
  if(/^https:\/\//i.test(P.payLink||'')){url=P.payLink;via='the payment link'}
  else if(/^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(P.upi||'')){url='upi://pay?pa='+encodeURIComponent(P.upi)+'&pn='+encodeURIComponent(P.payeeName||'Prime Group')+'&am='+amt+'&cu=INR&tn='+encodeURIComponent('Demo '+gp+' '+nm);via='UPI ('+P.upi+')'}
  const n=$('#demoNotice');
  if(!url){n.style.display='block';n.textContent='Online payment is being set up. Please call or WhatsApp '+PHONE+' to book your ₹'+amt+' demo.';return}
  PENDING={url,rec:{name:nm,phone:val(f,'phone'),group:gp,date:d,time:f.time.value,paid:amt},msg:'Hey there, I am '+nm+'. I have booked a demo class for '+gp+' on '+d+' at '+tm+' (₹'+amt+' demo fee).\n\n*Demo booking details*\n'+lines(f).join('\n')+'\n\n💳 Payment: ₹'+amt+' paid via '+via+' (please verify in your payment dashboard)\n🕒 '+when()+'\n(Sent from the Prime Group website)'};
  n.style.display='none';f.querySelector('button[type="submit"]').hidden=true;$('#demoPay').hidden=false;
  $('#demoPayInfo').textContent=/^upi:/.test(url)?'Approve ₹'+amt+' in your UPI app (UPI ID: '+P.upi+'), then tap the button below.':'Finish your ₹'+amt+' payment in the page that just opened, then tap the button below.';
  if(/^upi:/.test(url))location.href=url;else window.open(url,'_blank');return}
 if(f.id==='notifyForm'){e.preventDefault();e.stopImmediatePropagation();if(!f.reportValidity())return;
  const t=(($('#notifyTitle')||{}).textContent||'').replace(/^Notify me:\s*/,'');
  sendWA('Hey there, I am '+(val(f,'name')||'interested')+'. Please notify me when '+(t||'your new programme')+' opens.\n\n*Contact details*\n'+lines(f).join('\n')+'\n\n🕒 '+when()+'\n(Sent from the Prime Group website)');
  setTimeout(()=>{const m=$('#notifyModal');if(m){m.classList.remove('show');document.body.style.overflow=''}f.reset()},1200)}
},true);
let PENDING=null;
document.addEventListener('click',e=>{
 if(e.target.closest('#demoPaid')&&PENDING){const reqs=JSON.parse(localStorage.getItem('primeDemoRequests')||'[]');reqs.push(PENDING.rec);try{localStorage.setItem('primeDemoRequests',JSON.stringify(reqs))}catch(x){}
  sendWA(PENDING.msg);PENDING=null;setTimeout(()=>{const m=$('#demoModal');if(m){m.classList.remove('show');document.body.style.overflow=''}const fm=$('#demoForm');if(fm)fm.reset()},1200)}
 if(e.target.closest('#demoRepay')&&PENDING){/^upi:/.test(PENDING.url)?(location.href=PENDING.url):window.open(PENDING.url,'_blank')}});
const dm=$('#demoModal');if(dm)new MutationObserver(()=>{if(dm.classList.contains('show')){PENDING=null;const p=$('#demoPay');if(p)p.hidden=true;const b=dm.querySelector('button[type="submit"]');if(b)b.hidden=false}}).observe(dm,{attributes:true,attributeFilter:['class']});
/* floating CTA label for every group */
const LABEL='Book Demo at ₹99',cta=document.getElementById('primeFreeDemoCTA');
if(cta){const fix=()=>{if(cta.textContent.trim()!==LABEL)cta.textContent=LABEL;if(cta.getAttribute('aria-label')!==LABEL)cta.setAttribute('aria-label',LABEL)};fix();new MutationObserver(fix).observe(cta,{childList:true,characterData:true,subtree:true,attributes:true,attributeFilter:['aria-label']})}
/* floating WhatsApp button */
document.addEventListener('click',e=>{if(!e.target.closest('#whatsapp'))return;e.preventDefault();e.stopImmediatePropagation();
 sendWA('Hello Prime Group! 👋 I would like to know more about your courses.')},true);
/* branch sheet: Call + WhatsApp use the main number */
const sh=$('#branchContactSheet');if(sh)new MutationObserver(()=>{if(!sh.classList.contains('show'))return;
 const c=$('#branchCallAction'),w=$('#branchWhatsAppAction');
 [[c,'tel:+91'+PHONE],[w,'https://wa.me/'+WA+'?text='+encodeURIComponent('Hello Prime Group! 👋 I would like to know more.')]].forEach(([a,u])=>{if(!a)return;a.href=u;a.removeAttribute('aria-disabled');a.style.opacity='1';a.style.pointerEvents='auto'})}).observe(sh,{attributes:true,attributeFilter:['class']});
}catch(err){console.error('v2 contact',err)}})();

;
/* ===== block-64 ===== */
document.addEventListener("DOMContentLoaded",function(){var r=function(){var e=document.getElementById("liveRegularDemoClasses");if(e)e.remove()};r();new MutationObserver(r).observe(document.body,{childList:true,subtree:true})});

;
/* ===== v2-tap ===== */
/* Group cards: the animation plays only when the card is TAPPED/CLICKED (never while touching or swiping) */
(function(){try{
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;let busy=false;
function sheen(card){const sp=document.createElement('span');sp.setAttribute('aria-hidden','true');
 sp.style.cssText='position:absolute;z-index:0;top:-65%;left:-75%;width:55%;height:230%;pointer-events:none;background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.10) 28%,rgba(255,255,255,.42) 50%,rgba(255,255,255,.12) 70%,transparent 100%);opacity:0;will-change:transform,opacity';
 card.appendChild(sp);
 const a=sp.animate([{transform:'rotate(24deg) translateX(-180%)',opacity:0},{opacity:.95,offset:.25},{transform:'rotate(24deg) translateX(430%)',opacity:0}],{duration:620,easing:'cubic-bezier(.3,.6,.3,1)'});
 a.onfinish=a.oncancel=()=>sp.remove()}
function pop(card){card.animate([{scale:'1'},{scale:'.95',offset:.3},{scale:'1.03',offset:.65},{scale:'1'}],{duration:440,easing:'cubic-bezier(.3,.7,.3,1)'});sheen(card)}
document.addEventListener('click',function(e){const card=e.target.closest&&e.target.closest('#groups .groups .group');if(!card)return;
 if(card.__go){card.__go=false;return}
 if(rm){return}
 if(card.classList.contains('disabled')||card.hasAttribute('data-soon')){pop(card);return}
 e.preventDefault();e.stopImmediatePropagation();if(busy)return;busy=true;pop(card);
 setTimeout(function(){busy=false;card.__go=true;card.click()},300)},true);
}catch(err){console.error('v2 tap',err)}})();

;
/* ===== v2-motion ===== */
/* Scroll-in animations for text, boxes and photos. Skips the hero (PRIME title), header, group cards and popups. */
(function(){try{
if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window))return;
const $$=(q,r=document)=>[...r.querySelectorAll(q)];
const KINDS=[
 ['v2t','.section-head .kicker,.section-head h2,.section-head p,.about-prime-card h3,.about-prime-card p,.faq summary'],
 ['v2b','.about-prime-card,.quiz-card,.faq details,.video-review-wrap,.course-info > div,.v2-empty'],
 ['v2p','.v2-photo,.founder-preview-photo,.institute-detail-logo']
];
const SKIP='section.hero,header,.hero-art,#groups .groups,.v2-lb,.modal,.backdrop,#branchContactSheet,#primeOwnerPanel,.owner-v2,.detail-hero,.video-review-track,.topper-strip,.results-swipe-wrap';
const io=new IntersectionObserver(es=>es.forEach(en=>{
 if(!en.isIntersecting)return;const e=en.target;io.unobserve(e);
 requestAnimationFrame(()=>{e.classList.add('v2-in');
  setTimeout(()=>{e.classList.remove('v2a','v2t','v2b','v2p','v2-in');e.style.removeProperty('--d')},1700+(parseInt(e.style.getPropertyValue('--d'))||0))})
}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
function scan(){
 KINDS.forEach(([cls,sel])=>$$(sel).forEach(e=>{
  if(e.dataset.v2m||e.closest(SKIP))return;
  if(cls!=='v2t'&&(e.classList.contains('reveal')||e.closest('.reveal')))return;      /* already has the older reveal */
  if(!e.offsetParent&&getComputedStyle(e).position!=='fixed')return;                  /* not on screen yet (hidden page) */
  const r=e.getBoundingClientRect();if(r.top<innerHeight*0.92)return;                  /* already visible: leave untouched */
  e.dataset.v2m='1';
  const sib=[...(e.parentElement?e.parentElement.children:[])].filter(x=>x.matches(sel)),i=Math.max(0,sib.indexOf(e));
  e.style.setProperty('--d',Math.min(i,6)*70+'ms');
  e.classList.add('v2a',cls);io.observe(e)}))}
let t=null;const later=ms=>{clearTimeout(t);t=setTimeout(scan,ms)};
const mo=new MutationObserver(()=>later(180));
['homePage','detailPage','groupSharedSections'].forEach(id=>{const n=document.getElementById(id);if(n)mo.observe(n,{childList:true,subtree:true})});
document.addEventListener('click',e=>{if(e.target.closest('.group,#backBtn,#quizGo'))later(900)},true);
addEventListener('popstate',()=>later(500));addEventListener('load',()=>later(300));later(400);
}catch(err){console.error('v2 motion',err)}})();

;
/* ===== v2-group-demo ===== */
(function(){try{
document.addEventListener('click',function(e){
 const c=e.target.closest&&e.target.closest('#primeFreeDemoCTA');if(!c)return;
 e.preventDefault();e.stopImmediatePropagation();
 const t=((document.getElementById('detailTitle')||{}).textContent||'').trim().toLowerCase();
 document.getElementById('demoBtn').click();
 const g=document.querySelector('#demoForm select[name="group"]');
 if(g)g.value=t.indexOf('move')>-1?'Prime Move and Grow':t.indexOf('digit')>-1?'Prime Digit':'Prime Institute';
},true);
}catch(err){console.error(err)}})();

;
/* ===== branch-popup-reliability-script ===== */
(function(){
  const config={
    'Anaiyur':{maps:'',phone:'',whatsapp:''},
    'Anaiyur Branch':{maps:'',phone:'',whatsapp:''},
    'Iyer Bungalow':{maps:'',phone:'',whatsapp:''},
    'Iyer Bungalow Branch':{maps:'',phone:'',whatsapp:''},
    'Madurai':{maps:'',phone:'',whatsapp:''}
  };
  function init(){
    const sheet=document.getElementById('branchContactSheet');
    if(!sheet)return;
    const title=document.getElementById('branchSheetTitle');
    const subtitle=document.getElementById('branchSheetSubtitle');
    const close=document.getElementById('closeBranchSheet');
    function closeSheet(){sheet.classList.remove('branch-popup-open','show');sheet.setAttribute('aria-hidden','true');document.body.style.overflow='';}
    function openSheet(branch){
      const c=config[branch]||{maps:'',phone:'',whatsapp:''};
      if(title)title.textContent=branch+' — Branch Details';
      if(subtitle)subtitle.textContent='Choose how you would like to connect with '+branch+'.';
      const actions=[
        ['branchMapsAction',c.maps,'Google Maps','Add the Google Maps link for this branch'],
        ['branchCallAction',c.phone?(String(c.phone).startsWith('tel:')?c.phone:'tel:'+c.phone):'','Call','Add the branch phone number'],
        ['branchWhatsAppAction',c.whatsapp?(String(c.whatsapp).startsWith('http')?c.whatsapp:'https://wa.me/'+String(c.whatsapp).replace(/\D/g,'')):'','WhatsApp','Add the WhatsApp number with country code']
      ];
      actions.forEach(([id,url,label,help])=>{const a=document.getElementById(id);if(!a)return;a.href=url||'#';a.removeAttribute('aria-disabled');a.style.opacity='1';a.style.pointerEvents='auto';const small=a.querySelector('small');if(small)small.textContent=url?({'Google Maps':'Open this branch location on the map','Call':'Call the branch directly','WhatsApp':'Message the branch on WhatsApp'}[label]):help;a.dataset.branchConfigured=url?'yes':'no';});
      sheet.classList.add('branch-popup-open');sheet.setAttribute('aria-hidden','false');sheet.style.display='flex';document.body.style.overflow='hidden';
    }
    // Capture click before other website handlers, including if the main script failed.
    document.addEventListener('click',function(e){
      const btn=e.target&&e.target.closest?e.target.closest('.branchBtn'):null;
      if(btn){e.preventDefault();openSheet(btn.getAttribute('data-branch')||'Branch');return;}
      const action=e.target&&e.target.closest?e.target.closest('#branchContactSheet .branch-contact-action'):null;
      if(action&&action.dataset.branchConfigured==='no'){e.preventDefault();const label=action.querySelector('strong')?.textContent||'Contact';const note=action.querySelector('small')?.textContent||'Contact details will be added later.';let toast=document.getElementById('branchPopupHint');if(!toast){toast=document.createElement('div');toast.id='branchPopupHint';toast.style.cssText='position:fixed;z-index:2147483647;left:16px;right:16px;bottom:20px;padding:14px 16px;border-radius:14px;background:#24133d;color:#fff;font:14px/1.4 sans-serif;box-shadow:0 8px 28px #0003;text-align:center';document.body.appendChild(toast);}toast.textContent=label+': '+note;toast.style.display='block';clearTimeout(window.__branchPopupHintTimer);window.__branchPopupHintTimer=setTimeout(()=>toast.style.display='none',2800);}
    },true);
    if(close)close.addEventListener('click',closeSheet);
    sheet.addEventListener('click',e=>{if(e.target===sheet)closeSheet();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&(sheet.classList.contains('branch-popup-open')||sheet.classList.contains('show')))closeSheet();});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

;
/* ===== prime-enquiry-routing-final ===== */
(function(){
 const modal=document.getElementById('modal'), form=document.getElementById('form');
 if(!modal||!form)return;
 const groups={
  'Prime Institute':['School Tuition','Hindi Classes','Spoken English','Spoken Hindi','Prasar Hindi','Student Programmes','Common Student Activities'],
  'Prime Move and Grow':['Dance','Silambam','Freestyle','Western Dance','Bharatanatyam','Performance & Events'],
  'Prime Digit':['School Tuition','Spoken English','Spoken Hindi','Prasar Hindi','Student Batches','Online Classes']
 };
 form.innerHTML=`
 <div class="prime-enquiry-field"><label for="primeEnquiryStudent">Student Name</label><input id="primeEnquiryStudent" name="studentName" autocomplete="name" placeholder="Student name" maxlength="100" required></div>
 <div class="prime-enquiry-field"><label for="primeEnquiryParent">Parent Name</label><input id="primeEnquiryParent" name="parentName" placeholder="Parent / Guardian name" maxlength="100" required></div>
 <div class="prime-enquiry-field"><label for="primeEnquiryGroup">Group</label><select id="primeEnquiryGroup" name="group" required><option value="">Select group</option>${Object.keys(groups).map(g=>`<option value="${g}">${g}</option>`).join('')}</select></div>
 <div class="prime-enquiry-field"><label for="primeEnquiryCourse">Class / Course Required</label><select id="primeEnquiryCourse" name="course" required><option value="">Select group first</option></select></div>
 <div class="prime-enquiry-field"><label for="primeEnquiryMobile">Mobile Number</label><input id="primeEnquiryMobile" name="mobileNumber" type="tel" inputmode="tel" autocomplete="tel" placeholder="Primary mobile number" pattern="[0-9+ ()-]{8,18}" required></div>
 <div class="prime-enquiry-field"><label for="primeEnquiryWhatsApp">WhatsApp Number</label><input id="primeEnquiryWhatsApp" name="whatsappNumber" type="tel" inputmode="tel" placeholder="WhatsApp number" pattern="[0-9+ ()-]{8,18}" required></div>
 <button class="btn purple" type="submit">Send Enquiry →</button>
 <div class="notice" id="notice" role="status" aria-live="polite">Thank you! Your enquiry has been prepared.</div>`;
 const groupSel=document.getElementById('primeEnquiryGroup');
 const courseSel=document.getElementById('primeEnquiryCourse');
 function setGroup(value,course){
  if(!groups[value]) value='';
  groupSel.value=value;
  courseSel.innerHTML='<option value="">Select course</option>'+(groups[value]||[]).map(c=>`<option value="${c}">${c}</option>`).join('');
  if(course && (groups[value]||[]).includes(course))courseSel.value=course;
 }
 function openEnquiry(course){
  const title=document.getElementById('modalTitle'), desc=document.getElementById('modalDesc');
  form.reset();setGroup('', '');
  let currentName='';
  try { currentName=window.current && window.data && window.data[window.current] ? window.data[window.current].name : ''; } catch(e){}
  if(groups[currentName])setGroup(currentName,course||'');
  else if(course){
    for(const [g,cs] of Object.entries(groups)){if(cs.includes(course)){setGroup(g,course);break;}}
  }
  if(title)title.textContent=course?'Enquire: '+course:'Enquire Now';
  if(desc)desc.textContent='Choose a group and course, then share your contact details. Our team can follow up with you.';
  const notice=document.getElementById('notice');if(notice)notice.style.display='none';
  modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  setTimeout(()=>document.getElementById('primeEnquiryStudent')?.focus({preventScroll:true}),80);
 }
 groupSel.addEventListener('change',()=>setGroup(groupSel.value,''));
 function intercept(id,fn){
  const el=document.getElementById(id);if(!el)return;
  el.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();fn();},true);
 }
 ['headerEnquire','detailEnquire','footContact','floatingEnquire','heroEnquire'].forEach(id=>intercept(id,()=>openEnquiry('')));
 document.addEventListener('click',function(e){
  const courseBtn=e.target.closest('.courseEnquire[data-course], [data-course-enquire]');
  if(courseBtn && !courseBtn.classList.contains('course-launching')){
   e.preventDefault();e.stopImmediatePropagation();
   openEnquiry(courseBtn.getAttribute('data-course')||courseBtn.getAttribute('data-course-enquire')||'');
  }
 },true);
 const cta=document.getElementById('primeFreeDemoCTA');
 if(cta)cta.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();openEnquiry('');},true);
 const closeBtn=document.getElementById('closeModal');
 function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
 if(closeBtn)closeBtn.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();closeModal();},true);
 modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('show'))closeModal();});
 form.addEventListener('submit',e=>{
  e.preventDefault();e.stopImmediatePropagation();
  if(!form.reportValidity())return;
  const n=document.getElementById('notice');
  if(n){n.style.display='block';n.textContent='✓ Your details are filled in. To receive enquiries, connect an email, CRM or backend form service.';}
 },true);
})();

;
/* ===== prime-popup-exit-final-script ===== */
(function(){
 const sheet=document.getElementById('branchContactSheet');
 const modal=document.getElementById('modal');
 const cta=document.getElementById('primeFreeDemoCTA');
 if(!sheet)return;
 let savedScrollY=0, previousOverflow='';
 function isOpen(el){return !!el && (el.classList.contains('show') || el.classList.contains('branch-popup-open'));}
 function refresh(){
   const opened=isOpen(sheet)||isOpen(modal);
   document.body.classList.toggle('prime-overlay-open',opened);
   if(cta){
     const detail=document.getElementById('detailPage');
     const title=(document.getElementById('detailTitle')?.textContent||'').trim().toLowerCase();
     const detailVisible=!!detail && getComputedStyle(detail).display!=='none' && detail.getAttribute('aria-hidden')!=='true';
     const eligible=detailVisible && (title==='prime institute'||title==='prime move and grow'||title==='prime move & grow'||title==='prime digit');
     cta.style.display=opened?'none':(eligible?'flex':'none');
     cta.style.visibility=opened?'hidden':'visible';
     cta.style.pointerEvents=opened?'none':'auto';
     document.body.classList.toggle('prime-demo-cta-visible',eligible&&!opened);
   }
 }
 function openSheet(branch){
   if(!branch)return;
   if(!isOpen(sheet)){savedScrollY=window.scrollY||window.pageYOffset||0;previousOverflow=document.body.style.overflow||'';}
   const title=document.getElementById('branchSheetTitle');
   const subtitle=document.getElementById('branchSheetSubtitle');
   if(title)title.textContent=branch+' — Branch Details';
   if(subtitle)subtitle.textContent='Choose how you would like to connect with '+branch+'.';
   sheet.classList.add('branch-popup-open','show');
   sheet.style.display='';
   sheet.setAttribute('aria-hidden','false');
   document.body.style.overflow='hidden';
   refresh();
 }
 function closeSheet(){
   sheet.classList.remove('branch-popup-open','show');
   sheet.setAttribute('aria-hidden','true');
   sheet.style.display='none';
   sheet.style.visibility='';sheet.style.opacity='';sheet.style.pointerEvents='';
   document.body.style.overflow=previousOverflow;
   refresh();
   // Keep the page at its previous position so galleries, videos and navigation remain usable.
   requestAnimationFrame(()=>{if(Math.abs((window.scrollY||0)-savedScrollY)>3)window.scrollTo({top:savedScrollY,behavior:'auto'});});
 }
 // Capture first, so older click handlers cannot reopen or prevent the close operation.
 document.addEventListener('click',function(e){
   const close=e.target&&e.target.closest?e.target.closest('#closeBranchSheet, #branchContactSheet .sheet-close'):null;
   if(close){e.preventDefault();e.stopImmediatePropagation();closeSheet();return;}
   if(e.target===sheet){e.preventDefault();e.stopImmediatePropagation();closeSheet();return;}
   const btn=e.target&&e.target.closest?e.target.closest('.branchBtn'):null;
   if(btn){e.preventDefault();e.stopImmediatePropagation();openSheet(btn.getAttribute('data-branch')||'Branch');return;}
 },true);
 document.addEventListener('keydown',function(e){
   if(e.key==='Escape'&&isOpen(sheet)){e.preventDefault();e.stopImmediatePropagation();closeSheet();}
 },true);
 if(modal){
   const closeModal=()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.style.overflow=previousOverflow;refresh();};
   document.addEventListener('click',function(e){
     if(e.target&&e.target.closest&&e.target.closest('#closeModal')){refresh();return;}
     if(e.target===modal){setTimeout(refresh,0);}
   },true);
   document.addEventListener('keydown',e=>{if(e.key==='Escape'&&isOpen(modal))setTimeout(refresh,0);},true);
   const observer=new MutationObserver(refresh);observer.observe(modal,{attributes:true,attributeFilter:['class','aria-hidden']});
 }
 const observer=new MutationObserver(refresh);observer.observe(sheet,{attributes:true,attributeFilter:['class','aria-hidden','style']});
 refresh();
})();

;
/* ===== prime-digit-register-cta-fix ===== */
(function(){
  const cta=document.getElementById('primeFreeDemoCTA');
  if(!cta) return;
  function updatePrimeDigitLabel(){
    const title=(document.getElementById('detailTitle')?.textContent||'').trim().toLowerCase();
    const isDigit=title.includes('prime digit');
    cta.textContent=isDigit?'Register Now':'Book Free Demo';
    cta.setAttribute('aria-label',isDigit?'Register Now':'Book Free Demo');
    cta.dataset.ctaMode=isDigit?'register':'demo';
  }
  const title=document.getElementById('detailTitle');
  if(title) new MutationObserver(updatePrimeDigitLabel).observe(title,{childList:true,subtree:true,characterData:true});
  document.addEventListener('click',e=>{if(e.target.closest('[data-page]')||e.target.closest('#backBtn'))setTimeout(updatePrimeDigitLabel,100);},true);
  window.addEventListener('hashchange',()=>setTimeout(updatePrimeDigitLabel,100));
  window.addEventListener('popstate',()=>setTimeout(updatePrimeDigitLabel,100));
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',updatePrimeDigitLabel);else updatePrimeDigitLabel();
  setTimeout(updatePrimeDigitLabel,300);setTimeout(updatePrimeDigitLabel,1000);
})();

;
/* ===== prime-digit-results-cta-final-script ===== */
(function(){
 const cta=document.getElementById('primeFreeDemoCTA');
 const detail=document.getElementById('detailPage');
 const titleEl=document.getElementById('detailTitle');
 const modal=document.getElementById('modal');
 const groupOptions={
  'Prime Institute':['School Tuition','Hindi Classes','Spoken English','Spoken Hindi','Prasar Hindi','Student Programmes','Common Student Activities'],
  'Prime Move and Grow':['Dance','Silambam','Freestyle','Western Dance','Bharatanatyam','Performance & Events'],
  'Prime Digit':['School Tuition','Spoken English','Spoken Hindi','Prasar Hindi','Student Batches','Online Classes']
 };
 const digitCategories=groupOptions['Prime Digit'];
 function title(){return (titleEl?.textContent||'').trim().toLowerCase()}
 function isDigit(){return title().includes('prime digit')}
 function showEnquiry(){
  if(!modal)return;
  const group=document.getElementById('primeEnquiryGroup');
  const course=document.getElementById('primeEnquiryCourse');
  const form=document.getElementById('form');
  if(form)form.reset();
  if(group){group.value='Prime Digit';group.dispatchEvent(new Event('change',{bubbles:true}));}
  if(course){course.value='';}
  const mt=document.getElementById('modalTitle'),md=document.getElementById('modalDesc'),notice=document.getElementById('notice');
  if(mt)mt.textContent='Enquiry Now — Prime Digit';
  if(md)md.textContent='Choose the course you are interested in and share your contact details.';
  if(notice)notice.style.display='none';
  modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  setTimeout(()=>document.getElementById('primeEnquiryStudent')?.focus({preventScroll:true}),80);
 }
 function updateCTA(){
  if(!cta)return;
  const visible=!!detail&&getComputedStyle(detail).display!=='none'&&detail.getAttribute('aria-hidden')!=='true';
  const eligible=visible&&(title()==='prime institute'||title()==='prime move and grow'||title()==='prime move & grow'||isDigit());
  const overlayOpen=!!document.querySelector('#modal.show,#branchContactSheet.show,#branchContactSheet.branch-popup-open,#primeResultsDetailModal.is-open');
  cta.textContent=isDigit()?'Enquiry Now':'Book Free Demo';
  cta.setAttribute('aria-label',isDigit()?'Enquiry Now':'Book Free Demo');
  cta.style.display=eligible&&!overlayOpen?'flex':'none';
  cta.style.visibility=eligible&&!overlayOpen?'visible':'hidden';
  cta.style.pointerEvents=eligible&&!overlayOpen?'auto':'none';
  document.body.classList.toggle('prime-demo-cta-visible',eligible&&!overlayOpen);
 }
 document.addEventListener('click',function(e){const clicked=e.target&&e.target.closest?e.target.closest('#primeFreeDemoCTA'):null;if(!clicked||!isDigit())return;e.preventDefault();e.stopImmediatePropagation();showEnquiry();},true)
 function ensureDigitResults(){
  const page=document.getElementById('detailPage');if(!page)return;
  let section=document.getElementById('primeDigitResults');
  if(!section){section=document.createElement('section');section.id='primeDigitResults';section.innerHTML='<h2>Results & Achievements</h2><p class="prime-digit-results-sub">Choose a course to view its photos, videos and learning highlights.</p><div class="prime-digit-results-track"></div>';const anchor=page.querySelector('#branchList')?.closest('section')||page.querySelector('.branches')||page.querySelector('.course-list')?.parentElement||page;page.appendChild(section)}
  const track=section.querySelector('.prime-digit-results-track');
  track.innerHTML=digitCategories.map((c,i)=>'<button type="button" class="prime-digit-result" data-prime-digit-result="'+c.replace(/&/g,'&amp;').replace(/"/g,'&quot;')+'"><strong>'+c+'</strong><span>Photos, videos and learning highlights</span><b>View results →</b></button>').join('');
  section.style.display=isDigit()?'block':'none';
 }
 document.addEventListener('click',function(e){
  const card=e.target.closest('[data-prime-digit-result]');if(!card)return;
  e.preventDefault();e.stopImmediatePropagation();
  const category=card.getAttribute('data-prime-digit-result');
  const resultsModal=document.getElementById('primeResultsDetailModal');
  const resultTitle=document.getElementById('primeResultsDetailTitle');
  const close=document.getElementById('primeResultsDetailClose');
  if(resultsModal&&resultTitle&&close){
   // Reuse the existing results viewer and its close behaviour.
   const hidden=document.createElement('button');hidden.type='button';hidden.dataset.resultCategory=category;hidden.style.display='none';document.body.appendChild(hidden);hidden.click();hidden.remove();
   // Fallback direct open in case the delegated results listener is not ready.
   if(!resultsModal.classList.contains('is-open')){resultTitle.textContent=category+' — Results & Achievements';resultsModal.classList.add('is-open');resultsModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
  }
 },true);
 function refresh(){ensureDigitResults();updateCTA()}
 if(titleEl)new MutationObserver(refresh).observe(titleEl,{childList:true,subtree:true,characterData:true});
 if(detail)new MutationObserver(refresh).observe(detail,{attributes:true,attributeFilter:['style','class','aria-hidden']});
 document.addEventListener('click',e=>{if(e.target.closest('[data-page],#backBtn'))setTimeout(refresh,80)},true);
 window.addEventListener('hashchange',()=>setTimeout(refresh,80));window.addEventListener('popstate',()=>setTimeout(refresh,80));
 document.addEventListener('click',e=>{if(e.target.closest('#closeModal,#closeBranchSheet,#primeResultsDetailClose')||e.target.id==='modal'||e.target.id==='branchContactSheet'||e.target.id==='primeResultsDetailModal')setTimeout(updateCTA,50)},true);
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',refresh);else refresh();setTimeout(refresh,300);setTimeout(refresh,1000);
})();

;
/* ===== prime-digit-enquiry-cta-stability-script ===== */
(function(){
 const cta=document.getElementById('primeFreeDemoCTA');
 const detail=document.getElementById('detailPage');
 const titleEl=document.getElementById('detailTitle');
 const modal=document.getElementById('modal');
 if(!cta||!detail||!titleEl)return;
 const norm=()=>String(titleEl.textContent||'').trim().toLowerCase();
 const isDigit=()=>norm().includes('prime digit');
 const isAllowed=()=>['prime institute','prime move and grow','prime move & grow'].includes(norm())||isDigit();
 function overlayOpen(){return !!document.querySelector('#modal.show,#branchContactSheet.show,#branchContactSheet.branch-popup-open,#primeResultsDetailModal.is-open');}
 function refresh(){
   const visible=getComputedStyle(detail).display!=='none'&&detail.getAttribute('aria-hidden')!=='true';
   const show=visible&&isAllowed()&&!overlayOpen();
   const label=isDigit()?'Enquiry Now':'Book Free Demo';
   if(cta.textContent.trim()!==label)cta.textContent=label;
   cta.setAttribute('aria-label',label);cta.setAttribute('title',label);
   cta.style.display=show?'flex':'none';cta.style.visibility=show?'visible':'hidden';cta.style.opacity=show?'1':'0';
   cta.style.pointerEvents=show?'auto':'none';cta.disabled=!show;
 }
 // Prime Digit's CTA opens the existing enquiry modal with Prime Digit preselected.
 function openDigitEnquiry(){
   if(!modal)return;
   const form=document.getElementById('form');
   const group=document.getElementById('primeEnquiryGroup');
   const course=document.getElementById('primeEnquiryCourse');
   if(form)form.reset();
   if(group){group.value='Prime Digit';group.dispatchEvent(new Event('change',{bubbles:true}));}
   if(course)course.value='';
   const heading=document.getElementById('modalTitle');
   const desc=document.getElementById('modalDesc');
   const notice=document.getElementById('notice');
   if(heading)heading.textContent='Enquiry Now — Prime Digit';
   if(desc)desc.textContent='Select your course and enter your details. Our team can follow up with you.';
   if(notice)notice.style.display='none';
   modal.classList.add('show');modal.setAttribute('aria-hidden','false');
   document.body.style.overflow='hidden';
   refresh();
   setTimeout(()=>{const input=document.getElementById('primeEnquiryStudent');if(input)input.focus({preventScroll:true});},100);
 }
 cta.addEventListener('click',function(e){
   if(!isDigit())return;
   e.preventDefault();e.stopPropagation();
   openDigitEnquiry();
 },false);
 const observer=new MutationObserver(refresh);
 observer.observe(titleEl,{subtree:true,childList:true,characterData:true});
 observer.observe(detail,{attributes:true,attributeFilter:['style','class','aria-hidden']});
 if(modal)observer.observe(modal,{attributes:true,attributeFilter:['class','aria-hidden']});
 document.addEventListener('click',function(e){
   if(e.target.closest('#closeModal,#closeBranchSheet,#primeResultsDetailClose')||e.target===modal||e.target.id==='branchContactSheet'||e.target.id==='primeResultsDetailModal')setTimeout(refresh,80);
 },true);
 window.addEventListener('hashchange',()=>setTimeout(refresh,80));
 window.addEventListener('popstate',()=>setTimeout(refresh,80));
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',refresh);else refresh();
 [100,300,700,1500].forEach(ms=>setTimeout(refresh,ms));
 // Some legacy scripts also update the sticky CTA; keep the correct label and state in sync.
 setInterval(refresh,700);
})();

;
/* ===== prime-digit-cta-hard-fix-js ===== */
(function(){
 function getEl(id){return document.getElementById(id)}
 function getTitle(){return ((getEl('detailTitle')&&getEl('detailTitle').textContent)||(getEl('crumbName')&&getEl('crumbName').textContent)||'').trim().toLowerCase()}
 function digitPage(){return getTitle().includes('prime digit')}
 function detailVisible(){const d=getEl('detailPage');return !!d && getComputedStyle(d).display!=='none' && d.getAttribute('aria-hidden')!=='true'}
 function overlayOpen(){return !!document.querySelector('#modal.show,#branchContactSheet.show,#branchContactSheet.branch-popup-open,#primeResultsDetailModal.is-open')}
 function ensureButton(){
   let b=getEl('primeFreeDemoCTA');
   if(!b){b=document.createElement('button');b.id='primeFreeDemoCTA';b.type='button';b.textContent='Book Free Demo';b.setAttribute('aria-label','Book Free Demo');document.body.appendChild(b)}
   return b;
 }
 function update(){
   const b=ensureButton();const digit=digitPage();const allowed=digit||['prime institute','prime move and grow','prime move & grow'].includes(getTitle());
   const show=detailVisible()&&allowed&&!overlayOpen();
   const label=digit?'Enquiry Now':'Book Free Demo';
   b.textContent=label;b.setAttribute('aria-label',label);b.setAttribute('title',label);
   b.style.setProperty('display',show?'flex':'none','important');
   b.style.setProperty('visibility',show?'visible':'hidden','important');
   b.style.setProperty('opacity',show?'1':'0','important');
   b.style.setProperty('pointer-events',show?'auto':'none','important');
   b.style.setProperty('position','fixed','important');
   b.style.setProperty('bottom','calc(28px + env(safe-area-inset-bottom, 0px))','important');
   b.style.setProperty('left','50%','important');b.style.setProperty('transform','translateX(-50%)','important');
   b.style.setProperty('z-index','2147483000','important');
   if(!b.dataset.digitHardFixBound){b.dataset.digitHardFixBound='1';b.addEventListener('click',function(e){
     if(!digitPage())return;
     e.preventDefault();e.stopPropagation();
     const modal=getEl('modal');if(!modal)return;
     const form=getEl('form');if(form)form.reset();
     const group=getEl('primeEnquiryGroup');const course=getEl('primeEnquiryCourse');
     if(group){group.value='Prime Digit';group.dispatchEvent(new Event('change',{bubbles:true}));}
     if(course)course.value='';
     const h=getEl('modalTitle'),desc=getEl('modalDesc'),notice=getEl('notice');
     if(h)h.textContent='Enquiry Now — Prime Digit';
     if(desc)desc.textContent='Select your course and enter your details. Our team can follow up with you.';
     if(notice)notice.style.display='none';
     modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
     update();setTimeout(()=>getEl('primeEnquiryStudent')?.focus({preventScroll:true}),100);
   },true)}
 }
 const obs=new MutationObserver(update);
 function start(){['detailTitle','crumbName','detailPage','modal'].forEach(id=>{const el=getEl(id);if(el)obs.observe(el,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['style','class','aria-hidden']})});document.addEventListener('click',e=>{if(e.target.closest('[data-page],#backBtn,#closeModal,#closeBranchSheet,#primeResultsDetailClose')||e.target.id==='modal'||e.target.id==='branchContactSheet'||e.target.id==='primeResultsDetailModal')setTimeout(update,80)},true);window.addEventListener('hashchange',()=>setTimeout(update,100));window.addEventListener('popstate',()=>setTimeout(update,100));update();[100,300,700,1500].forEach(t=>setTimeout(update,t));setInterval(update,500)}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();

;
/* ===== pg-apple-motion-js ===== */
(function(){
  'use strict';
  var rmq=window.matchMedia?matchMedia('(prefers-reduced-motion: reduce)'):{matches:false};
  var reduced=function(){return rmq.matches};
  // iOS only applies :active if a touch listener exists
  document.addEventListener('touchstart',function(){},{passive:true});

  /* ---- spring (damping ratio + response, interruptible, takes release velocity) ---- */
  function spring(o){
    var w=2*Math.PI/o.response,k=w*w,c=2*o.damping*w,x=o.from,v=o.velocity||0,last=performance.now(),raf=0;
    function step(now){
      var dt=Math.min((now-last)/1000,.032);last=now;
      var n=Math.max(1,Math.ceil(dt/.004)),h=dt/n;
      for(var i=0;i<n;i++){v+=(-k*(x-o.to)-c*v)*h;x+=v*h}
      if(Math.abs(x-o.to)<.4&&Math.abs(v)<8){o.onUpdate(o.to);o.onDone&&o.onDone();return}
      o.onUpdate(x);raf=requestAnimationFrame(step);
    }
    raf=requestAnimationFrame(step);
    return function(){cancelAnimationFrame(raf)};
  }
  function tween(dur,fn,done){
    var t0=0,raf=0;
    function f(now){if(!t0)t0=now;var t=Math.min(1,(now-t0)/dur);fn(t*t);if(t<1)raf=requestAnimationFrame(f);else done()}
    raf=requestAnimationFrame(f);
    return function(){cancelAnimationFrame(raf)};
  }

  /* ---- exit animation for show/hide overlays ---- */
  function watch(el,panel,cfg){
    var wasOpen=cfg.isOpen(),cancel=null,skip=false;
    function cleanup(){
      if(cancel){cancel();cancel=null}
      el.classList.remove('pg-exit');el.style.removeProperty('--pg-p');
      panel.style.transform='';
    }
    new MutationObserver(function(){
      var now=cfg.isOpen();
      if(wasOpen&&!now){
        if(skip){skip=false}
        else if(!reduced()){
          el.classList.add('pg-exit');el.style.setProperty('--pg-p','1');
          if(cancel)cancel();
          cancel=tween(cfg.duration,function(e){
            el.style.setProperty('--pg-p',String(1-e));
            panel.style.transform=cfg.transform(e);
          },function(){cancel=null;cleanup()});
        }
      }else if(!wasOpen&&now){
        cleanup();cfg.onOpen&&cfg.onOpen();
      }
      wasOpen=now;
    }).observe(el,{attributes:true,attributeFilter:['class']});
    return {skipNext:function(){skip=true},reset:cleanup};
  }

  /* ---- last pressed trigger, so the modal can grow from it ---- */
  var lastTap=null;
  document.addEventListener('click',function(e){
    var t=e.target&&e.target.closest&&e.target.closest('button,a,[role=button]');
    if(!t)return;var r=t.getBoundingClientRect();
    lastTap={x:r.left+r.width/2,y:r.top+r.height/2,t:performance.now()};
  },true);

  /* ---- enquiry modal: origin from trigger + exit ---- */
  var modal=document.getElementById('modal');
  if(modal){
    var mp=modal.querySelector('.modal');
    watch(modal,mp,{
      duration:200,
      isOpen:function(){return modal.classList.contains('show')},
      transform:function(e){return 'scale('+(1-.28*e)+')'},
      onOpen:function(){
        if(lastTap&&performance.now()-lastTap.t<800){
          // offsetLeft/Top ignore the running transform, unlike getBoundingClientRect
          mp.style.transformOrigin=(lastTap.x-mp.offsetLeft)+'px '+(lastTap.y-mp.offsetTop)+'px';
        }else mp.style.transformOrigin='50% 50%';
      }
    });
  }

  /* ---- branch sheet: exit + grab / throw / reverse ---- */
  var sheet=document.getElementById('branchContactSheet');
  if(sheet){
    var panel=sheet.querySelector('.branch-sheet'),grab=sheet.querySelector('.sheet-grabber'),
        head=sheet.querySelector('.sheet-head'),closeBtn=document.getElementById('closeBranchSheet');
    var y=0,stop=null,drag=null;
    var ctl=watch(sheet,panel,{
      duration:180,
      isOpen:function(){return sheet.classList.contains('show')||sheet.classList.contains('branch-popup-open')},
      transform:function(e){return 'translate3d(0,'+(e*32)+'px,0)'},
      onOpen:function(){if(stop){stop();stop=null}y=0;sheet.style.backgroundColor=''}
    });
    var scrim=null;
    function setY(v){
      y=v;panel.style.transform=v?'translate3d(0,'+v+'px,0)':'';
      if(scrim){var p=Math.min(1,Math.max(0,v/drag_dist));sheet.style.backgroundColor='rgba('+scrim[0]+','+scrim[1]+','+scrim[2]+','+(scrim[3]*(1-p))+')'}
    }
    var drag_dist=300;
    function rubber(o){return (o*300*.55)/(300+.55*o)}
    function canDrag(){return grab&&getComputedStyle(grab).display!=='none'}
    function down(e){
      if(!canDrag()||e.button>0||(e.target.closest&&e.target.closest('.sheet-close')))return;
      var cur=new DOMMatrix(getComputedStyle(panel).transform).m42||0;   // grab mid-flight
      panel.getAnimations().forEach(function(a){a.cancel()});
      if(stop){stop();stop=null}
      var m=/[\d.]+/g,c=(getComputedStyle(sheet).backgroundColor.match(m)||[17,8,39,.62]).map(Number);
      scrim=[c[0],c[1],c[2],c.length>3?c[3]:1];
      panel.style.transform=cur?'translate3d(0,'+cur+'px,0)':'';
      var r=panel.getBoundingClientRect();drag_dist=Math.max(120,innerHeight-(r.top-cur));
      setY(cur);
      drag={id:e.pointerId,startY:e.clientY,startOff:cur,hist:[{t:e.timeStamp,y:e.clientY}],moved:false,el:e.currentTarget};
      try{drag.el.setPointerCapture(e.pointerId)}catch(_){}
    }
    function move(e){
      if(!drag||e.pointerId!==drag.id)return;
      var dy=e.clientY-drag.startY;
      if(!drag.moved&&Math.abs(dy)<6)return;           // hysteresis before tracking 1:1
      drag.moved=true;
      drag.hist.push({t:e.timeStamp,y:e.clientY});
      while(drag.hist.length>1&&e.timeStamp-drag.hist[0].t>100)drag.hist.shift();
      var off=drag.startOff+dy;if(off<0)off=-rubber(-off);  // resist pulling up
      setY(off);
    }
    function up(e){
      if(!drag||e.pointerId!==drag.id)return;
      var d=drag;drag=null;
      if(!d.moved){scrim=null;return}
      var a=d.hist[0],b=d.hist[d.hist.length-1],dt=(b.t-a.t)/1000;
      var v=dt>.01?(b.y-a.y)/dt:0;                          // px/s at release
      var projected=y+(v/1000)*.998/(1-.998);               // where it would coast to
      var dismiss=e.type!=='pointercancel'&&projected>panel.offsetHeight*.5&&v>-300;
      if(dismiss){
        stop=spring({from:y,to:drag_dist+24,velocity:v,damping:1,response:.3,onUpdate:setY,onDone:function(){
          stop=null;ctl.skipNext();
          if(closeBtn)closeBtn.click();
          scrim=null;panel.style.transform='';sheet.style.backgroundColor='';y=0;
        }});
      }else{
        stop=spring({from:y,to:0,velocity:v,damping:.8,response:.3,onUpdate:setY,onDone:function(){
          stop=null;setY(0);scrim=null;sheet.style.backgroundColor='';
        }});
      }
    }
    [grab,head].forEach(function(h){
      if(!h)return;
      h.addEventListener('pointerdown',down);
      h.addEventListener('pointermove',move);
      h.addEventListener('pointerup',up);
      h.addEventListener('pointercancel',up);
    });
  }
})();
