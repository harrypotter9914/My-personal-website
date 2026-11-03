document.querySelectorAll('[data-film]').forEach(button=>button.addEventListener('click',()=>{
 const frame=document.createElement('iframe');
 frame.src=`https://www.youtube-nocookie.com/embed/${button.dataset.film}?autoplay=1&rel=0`;
 frame.title=button.getAttribute('aria-label'); frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'; frame.allowFullscreen=true;
 button.replaceWith(frame);
}));
document.querySelectorAll('[data-reader]').forEach(reader=>{
 const buttons=[...reader.querySelectorAll('[data-reader-tab]')];
 const select=button=>{buttons.forEach(b=>{const active=b===button;b.classList.toggle('is-active',active);b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;reader.querySelector(`#${b.getAttribute('aria-controls')}`).hidden=!active;});};
 buttons.forEach((button,i)=>{button.addEventListener('click',()=>select(button));button.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%buttons.length;if(e.key==='ArrowLeft')n=(i+buttons.length-1)%buttons.length;if(e.key==='Home')n=0;if(e.key==='End')n=buttons.length-1;if(n!==undefined){e.preventDefault();select(buttons[n]);buttons[n].focus();}});});
});
const dialog=document.querySelector('.image-dialog');
if(dialog){let source;document.querySelectorAll('.page-open').forEach(button=>button.addEventListener('click',()=>{source=button;const img=button.querySelector('img'),large=dialog.querySelector('img');large.src=img.src;large.alt=img.alt;dialog.showModal();}));dialog.querySelector('button').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});dialog.addEventListener('close',()=>source?.focus());}
