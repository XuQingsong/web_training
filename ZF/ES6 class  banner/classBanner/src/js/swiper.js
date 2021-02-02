  class Swiper{
    constructor(parent, options){
        this.container = this.getElement(parent); //父元素
        this.wrapper = this.getElement('.swiper-wrapper', this.container); //wrapper
        this.slides = Array.from(this.wrapper.children); //每一张轮播
        this.defalute = { //默认参数
            init: 0,
            autoplay: false,
            direction: 'horizontal',
            loop: false
        };
        this.options = Object.assign({}, this.defalute, options); //合并之后的参数
        //所有的调用方法
        this.init();
    }
    //获取元素
    getElement(n, parent){
        return typeof n === 'string' ? (parent || document).querySelector(n) : n;
    }
    init(){
        //设置默认样式
        this.setWidth();
        //自动轮播组件
        this.options.autoplay && this.autoplay();
        //分页
        this.options.pagination && this.pagination();
        //按钮
        this.options.navigation && this.navigation();
    }
    //按钮
    navigation() {
        this.prevEl = this.getElement(this.options.navigation.prevEl, this.container);
        this.nextEl = this.getElement(this.options.navigation.nextEl, this.container);
        this.prevEl.style.display = 'block';
        this.nextEl.style.display = 'block';
        
        //点击上一张
        this.prevEl.onclick =()=>{
            this.options.init--;
            this.options.init = this.options.init < 0 ? this.length - 1 : this.options.init;
            this.move();
        };
        //点击下一张
        this.nextEl.onclick = this.nextEvent.bind(this);
    }
    nextEvent(){
        this.options.init++;
        this.options.init = this.options.init % this.length;///%号求余
        this.move();
    }
    //分页
    pagination(){
        //分页器父元素
        this.paginationEl = this.getElement(this.options.pagination.el, this.container);
        for (let i = 0; i < this.length; i++) {
            let lis = document.createElement('li');
            lis.innerHTML=i+1;
            i === 0 && lis.classList.add('active');
            this.paginationEl.append(lis);
        };
        this.paginationLis = Array.from(this.paginationEl.children);
        this.paginationEl.onclick=(e)=>{
               this.options.init=e.target.innerHTML-1;
               this.move();
           }
    }
    autoplay(){
        //that.options.direction 方向
        //that.options.pagination 分页类名
        //that.options.init 当前显示轮播下标
        //this.options.autoplay 轮播切换时间
        this.timer = null;
        this.container.onmouseenter =()=>{
            clearInterval(this.timer);
        }
        this.container.onmouseleave =()=>{
            this.autoplay();
        }
        this.timer = setInterval(this.nextEvent.bind(this), this.options.autoplay);
    }
    //设置每一张轮播的宽度和高度
    setWidth(){
        //设置swiper-slide的宽度和高度
        this.width = this.container.offsetWidth; //一张图片的宽
        this.height = this.container.offsetHeight; //一张图片的高
        this.length = this.slides.length; //图片个数
        this.slides.forEach(v=> {
            v.style.width = this.width + 'px';
            v.style.height = this.height + 'px';
        });
        if (this.options.direction === 'horizontal') { //横向
            this.wrapper.style.width = this.length * this.width + 'px';
            this.wrapper.style.height = this.height + 'px';
            this.slides.forEach(v=> {
                v.style.float = 'left';
            })
        } else {
            this.wrapper.style.width = this.width + 'px';
            this.wrapper.style.height = this.height * this.length + 'px';
            this.slides.forEach(v=> {
                v.style.float = 'none';
            })
        }
    }
    move(){
        let attrTitle = this.options.direction === 'horizontal' ? 'marginLeft' : 'marginTop';
        let styleAttr = this.options.direction === 'horizontal' ? 'width' : 'height';
        this.wrapper.style.transition = 'all 300ms';
        this.wrapper.style[attrTitle] = -this.options.init * this[styleAttr] + 'px';
        if (this.options.pagination) {
            this.paginationLis.forEach((v, i)=>{
                i === this.options.init ? v.classList.add('active') : v.classList.remove('active');
            });
        };
    }
}