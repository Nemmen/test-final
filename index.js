document.onreadystatechange = function(){
    if(this.readyState === 'complete'){
        document.getElementById('preloader').style.visibility = 'hidden'
        document.getElementById('home').style.visibility='visible'
    }else{
        document.getElementById('preloader').style.visibility = 'visible'
        document.getElementById('home').style.visibility='hidden'
    }
}