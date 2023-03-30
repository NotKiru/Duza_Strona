const lewa = document.getElementById("banerLewy");
const prawa = document.getElementById("banerPrawy");

const onMove = e => {
    const p = (e.clientX / window.innerWidth) * 101;
    lewa.style.setProperty("width", p+"%");
}

lewa.onmousedown = e => onMove(e);
prawa.onmousedown = e => onMove(e);

lewa.ontouchmove = e => onMove(e.touches[0]);
prawa.ontouchmove = e => onMove(e.touches[0]);