(()=>{"use strict";class t{constructor(t,e,s){this._element=t,this._numImages=e,this._width=s,this._currentIndex=0,[this._display]=t.querySelectorAll(".carousel-display"),[this._imagesContainer]=this._display.querySelectorAll(".carousel-images"),this.initButtons()}nextImage(){this._currentIndex+=1,this._currentIndex>=this._numImages&&(this._currentIndex=0),this._imagesContainer.style.transform=`translate(-${this._currentIndex*(this._width+10)}px)`,setTimeout(200)}previousImage(){this._currentIndex-=1,this._currentIndex<0&&(this._currentIndex=this._numImages-1),this._imagesContainer.style.transform=`translate(-${this._currentIndex*(this._width+10)}px)`,setTimeout(200)}goToImage(t){this._imagesContainer.style.transform=`translate(-${t*(this._width+10)}px)`,setTimeout(200)}get display(){return this._display}initButtons(){this._buttons=this._display.querySelectorAll("i"),this._buttons.forEach((t=>{t.classList.contains("fa-caret-left")?t.addEventListener("click",(()=>{this.previousImage()})):t.classList.contains("fa-caret-right")&&t.addEventListener("click",(()=>{this.nextImage()}))}))}}const e=document.querySelectorAll(".carousel"),s=[];e.forEach((e=>{s.push(new t(e,5,250))}))})();