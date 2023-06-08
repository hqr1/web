function display(tagID){
    let ul = document.getElementById(tagID);
let lies = ul.children ;
// 第一个 li 变宽：增加类 active
lies[0].classList.add("active");
// 查找兄弟标签函数
let findSiblings = function(tag){
    let parent = tag.parentNode ;
    let child = parent.children ;
    let sb = [];
    for(let i = 0 ; i <= child.length-1 ; i++ ){
        if( tag !== child[i]){
            sb.push( child[i]);
        }
    }
    return sb ;
};
 
for( let i = 0 ; i <= lies.length-1 ; i++  ){
    lies[i].addEventListener("mouseenter",function(){
        let siblings = findSiblings(this);
        // 当前标签变宽: 增加类 active
        this.classList.add("active");
        // 兄弟标签变窄
        for(let k = 0 ; k <= siblings.length-1 ; k++ ){
            // 兄弟标签去掉 active
            siblings[k].classList.remove("active");
        }
    })
}
}