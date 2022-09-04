
function MyHeading() {
    return (<h1>I Am Curious To learn React</h1>)
};
function First() {
    return (<h2>Hello React!</h2>)
};
function Para() {
    return (<p>Hi!, My Name is POTLA.HARITHA</p>)
};
function List() {
    return(<h3><ul><li>Haritha</li><li>Venkatesh</li></ul></h3>)
};
ReactDOM.render(<div>
    <MyHeading/>
    <First/>
    <Para/>
    <List/>
    </div>, document.getElementById("root")
                );
//in react we also use query selector
ReactDOM.render(<p>my name is haritha! i love to learn react</p>, document.querySelector('#root1'));
//in react we can give a class name directly to not like a dom
ReactDOM.render(<h1 className="header">i love my country</h1>, document.getElementById("root2"))

//creawte a dom element
const har=document.createElement('h1')
har.innerText = ' I am in love with my name Haritha'
har.className='header1'
document.getElementById("root3").append(har);


//create a jsx example jsx means javascript XML
const elem=<h3>this is a JSX</h3>
console.log(elem)
ReactDOM.render(elem,document.getElementById('root4'))


//we cant place two elements in reactdom so we want to put all the elements in one parnt element
var page = (<div>
    <h1>Now i am learning about react</h1>
    <p>it is really wow to makes easy the code</p>
</div>)
ReactDOM.render(page,document.getElementById("root5"));



//challenge for creating basic nav bar
var navBar = (
    <nav>
        <h1>AP FOOD STALL</h1>
        <ul>
            <li>MENU</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            
        </ul>
    </nav>
)
ReactDOM.render(navBar, document.getElementById("root6"));


//another challenge without using reactdom use append
var page2=(
    <div>
        <h1>hi</h1>
        <h2>hello</h2>
        <h3>namaste</h3>
        <h4>danyavadhalu</h4>
    </div>
)
//document.getElementById("root7").append("JSON.stringify(page2)")
//when we are appending nothing is going to work that y we use react
ReactDOM.render(page2,document.getElementById("root7"));

//another challenge
var simplePage =(
    <div>
         <img src="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg" width="40px"></img>
    <h1>Fun facts about React</h1>
    <ul>
        <li>was first released in 2013 </li>
        <li> was originally creasted by jordan Walke</li>
        <li> has well over 100k stars in git hub</li>
        <li>is maintained by facebook</li>
        <li>powers thousands of enterprises apps, including mobile apps</li>
    </ul>
    </div>
)
ReactDOM.render(simplePage, document.getElementById("root8"));

//by using functions also we can render the elements by we must use capital letter at starting and in <> tags when we are rendering

function MyFirst() {
    return (
    <>
     <img src="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg" width="100px"></img>
    <h1>Here i will tell about my family</h1>
    <ul>
        <li>Ravi venkatesh</li>
        <li>Haritha</li>
        <li>Aahanya</li>
        <li>Srilekha</li>
        <li>Hemanth</li>
    </ul>
    </>
    )
}
ReactDOM.render(<MyFirst/>,document.getElementById('root9'));

//another challenge 
function MySecond() {
    return(
       <> <header>
            <nav>
            <img src="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg" width="90px"></img>
            </nav>
        </header>
        <h1>another challenge</h1>
        <ol>
            <li>components</li>
            <li>reusability</li>
        </ol>
        <footer>
            <small>@ this rights belongs only to haritha. all rights are reserved</small>
        </footer>
        </>
    )
}
ReactDOM.render(<MySecond/>,document.getElementById("root10"));

//look above code we wrote everything in one function
// now we are going to sepearate and create there own component itself and placing all those into one function
function Header()
{
    return(
        <header>
            <nav className="nav">
            <img src="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg" width="40px"></img>
                <ul className="nav-items">
                    <li>Menu</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            </header>
    )
}
function Footer()
{
    return(
        <footer>
            <small>@ this rights belongs only to haritha. all rights are reserved</small>
        </footer>
    )
}
function MainContent() {
    return(
        <>
        <h1>another challenge</h1>
        <ol>
            <li>components</li>
            <li>reusability</li>
        </ol>
        </>
    )
}

function EveryThing() {
    return(
        <>
        <Header/>
        <MainContent/>
        <Footer/>
        </>
    )
}
ReactDOM.render(<EveryThing/>,document.getElementById("root11"))