'use strict';

class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            upvote: false,
            downvote: false,
            count: Number(this.props.count),
        };
      }

    upvoteClick(){
        if (this.state.upvote && !this.state.downvote){
            this.setState({upvote:false});
            this.setState({count:this.state.count - 1});
        } else if (!this.state.upvote && this.state.downvote){
            this.setState({upvote:true});
            this.setState({downvote:false});
            this.setState({count:this.state.count + 2});
        } else{
            this.setState({upvote:true});
            this.setState({downvote:false});
            this.setState({count:this.state.count + 1});
        }
    }
    downvoteClick(){
        if (this.state.downvote && ! this.state.upvote){
            this.setState({downvote:false});
            this.setState({count:this.state.count + 1});
        } else if (!this.state.downvote && this.state.upvote){
            this.setState({downvote:true});
            this.setState({upvote:false});
            this.setState({count:this.state.count - 2});
        } else{
            this.setState({downvote:true});
            this.setState({upvote:false});
            this.setState({count:this.state.count - 1});
        }
    }
    render(){
        return(
            <div className = "posts">
                <div className = "buttons">
                <button onClick={this.upvoteClick.bind(this)}><i className={this.state.upvote === true ? "upvoted" : "up"}></i></button><br/>
                {this.state.count}<br/>
                <button onClick={this.downvoteClick.bind(this)}><i className={this.state.downvote === true ? "downvoted": "down"}></i></button>
                </div>
                <img className = "picture" src = {this.props.src}/>
                <div className = "tags">{this.props.tags}</div>

            </div>
        );
    }
}

class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts:[
                {src:'/images/burger.jpg', tags:['#food','#yum','#burger'], count:'200'},
                {src:'/images/cannon.jpg', tags:['#scenery'], count:'105'},
                {src:'/images/pasta.jpg', tags:['#food'], count:'98'},
                {src:'/images/mountains.jpg', tags:['#scenery'], count:'57'},
            ],
        };
    }

    render(){
        return(
            <div className="vertical_container">
            <input type="text" className="search" placeholder="Search..." />
            <div className="filterContain">
            <input type="radio" id="hot" name="filter" defaultChecked/><label htmlFor="hot">Popular <img src="../images/hot.png"></img></label>
            <input type="radio" id="recent" name="filter"/><label htmlFor="recent">Recent <img src="../images/recent.png"></img></label>
            </div>
                {this.state.posts.map((item,i) => (
                <Post src = {item.src} tags = {item.tags} count = {item.count} key = {i}/>
                ))}
            </div>
        );
    }
}

const postContainer = document.getElementById("posts_container");
ReactDOM.render(<Feed/>, postContainer);