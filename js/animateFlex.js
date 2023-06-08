function flex(className) {
        // 运动折叠
        let animateFlex = document.querySelectorAll('.'+className+" .arrow")
        let describeBox = document.querySelector('.'+className+" .describe")
        let downArrow =document.querySelector('.'+className+' .downArrow');
        let upArrow =document.querySelector('.'+className+' .upArrow');
        animateFlex.forEach((item)=>{
            item.onclick=function (e){
                //折叠框展示
                if(describeBox.offsetHeight >= 116){
                    upArrow.style.display='block';
                    downArrow.style.display = 'none';
                    describeBox.style.height = 0 +'px';
                }else{
                //折叠框折叠
                    upArrow.style.display='none';
                    downArrow.style.display='block';
                    describeBox.style.height= 116+'px';
                }
            }
    
        })
}