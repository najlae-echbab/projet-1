console.log("Script is running...");
window.addEventListener('load', () => {
    const menu = document.querySelector(".menu");
    const partie_1 = document.querySelector(".partie_1");
    const content = document.getElementById("content");
    const frame = document.getElementById("frame");
    const image=document.getElementById("image");
    menu.addEventListener('click', () => {
      partie_1.classList.toggle('mobile-menu');
      content.classList.toggle('hidden'); // Ajoutez cette ligne pour basculer la classe 'hidden' sur le contenu
      frame.classList.toggle('hidden');
      image.classList.toggle('hidden');
    });
});
