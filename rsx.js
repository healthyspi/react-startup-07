**-----------
使用JSX: 的目的非常簡單，就是 取代 React.createElement 方法

比起 HTML, JSX 更接近 JavaScript
--------------------------------------

**元件的屬性
// 取代 React.createElement(MyHead, {level:3});
--->JSX:  let myComponent = <MyHead level="3"/> ;
--------------------------------------

**在JS中使用一對大括號 { JS程式碼 } 結合動態資料
render(){
	/* 
	取代 React.createElememt("div",{className:"head"},
	"Hello World" + this.props.level)
	*/
	return <div className="head">Hello World {this.props.level}</div>;
}
--------------------------------------
**曹狀結構

render(){
	return <div>
			<MyHead level="1" />
			<MyHead level="2" />
			<MyHead level="3" />
	</div>;
}