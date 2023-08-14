import { Component } from '@angular/core';

@Component({
  selector: 'app-carrousel-telephone',
  templateUrl: './carrousel-telephone.component.html',
  styleUrls: ['./carrousel-telephone.component.css']
})

export class CarrouselTelephoneComponent {
  public elements:Array<any>=[  
    {image:"../../../assets/img/hologramme/diamant.gif",nom:"hologramme 1",categorie:"animaux",prix:200},
    {image:"../../../assets/img/hologramme/lion-removebg.png",nom:"hologramme 2",categorie:"animaux",prix:200},
    {image:"../../../assets/img/hologramme/Leia.gif",nom:"hologrammel 3",categorie:"animaux",prix:200},
    {image:"../../../assets/img/hologramme/NissanT.gif",nom:"hologrammel 4",categorie:"animaux",prix:200}
  ];
  private fondHolo!:HTMLDivElement|null;
  private holo!:HTMLImageElement|null;
  private i:number=0;

  handlePhoneClick(){
    console.log("test");
    this.fondHolo=document.querySelector("#fondHolo");
    this.holo=document.querySelector("#telHolo");
    if(!this.holo?.getAttribute('src')){
      this.holo!.setAttribute("src",this.elements[0].image);
    }
    this.holo!.style.width="80%";
    this.holo!.style.height="80%";
    this.holo!.style.transformOrigin="bottom center";
    this.holo!.style.transition="all 1000ms";
    this.holo!.classList.toggle("holo-hidden");
    this.fondHolo!.classList.toggle("holo-hidden");
  }

  handleRightClick(){
    this.fondHolo=document.querySelector("#fondHolo");
    this.holo=document.querySelector("#telHolo");
    this.holo!.classList.add("holo-hidden");
    this.fondHolo!.classList.add("holo-hidden");
    setTimeout(() => {
        if (this.i==this.elements.length-1) {
            this.i=0
        }else{
            this.i++
        }
        this.holo!.setAttribute("src",this.elements[this.i].image)
        this.holo!.classList.toggle("holo-hidden");
        this.fondHolo!.classList.toggle("holo-hidden");
        }, 1000);
        console.log(this.i, this.elements.length)
  }

  handleLeftClick(){
    this.fondHolo=document.querySelector("#fondHolo");
    this.holo=document.querySelector("#telHolo");
    this.holo!.classList.add("holo-hidden");
    this.fondHolo!.classList.add("holo-hidden");
    setTimeout(() => {
        if (this.i===0) {
            this.i=this.elements.length-1
        }else{
            this.i--
        }
        this.holo!.setAttribute("src",this.elements[this.i].image)
        this.holo!.classList.toggle("holo-hidden");
        this.fondHolo!.classList.toggle("holo-hidden");
        }, 1000);
        console.log(this.i, this.elements.length)
  }
}