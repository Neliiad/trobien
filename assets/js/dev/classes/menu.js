


class Menu {
  constructor(){
    this.initObserver()
   
  }
    initObserver() {
        //definition de l'observer
        const intersectionObserver = new window.IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              //entry.target est l'element html en lui meme
             
              if (entry.intersectionRatio > 0.2) {
                //dedans
                entry.target.classList.add("is-inviewport");
                
              } else {
                //dehors
                entry.target.classList.remove("is-inviewport");
              }
            });
          },
          { threshold: 0.2 }
        );
       
        //creation de l'observer
        document.querySelectorAll(".scroll-part").forEach(element => {
          intersectionObserver.observe(element);
          
        });
      }
      
}

export const menu = new Menu();