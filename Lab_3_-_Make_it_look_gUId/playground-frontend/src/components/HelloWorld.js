import React, { Component } from 'react';

class HelloWorld extends Component {

    renderItems = (items) => {
        return items.map((item) => {
            return (
                <li key={item.key}>{item.value}</li>
            )
        });
    }

    renderPosts = (posts) => {
        return posts.map((post) => {
            return (
                <div key={post.id} style={{ margin: 20 }}>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                </div>
            );
        });
    }

    onClickHandler = () => {
        alert("I'm a button");
    }

    onClickHandlerWithData = (data) => {
        alert(`Passed in: ${data}`);
    }

    render() {
        return (
            <div className="HelloWorld">
                <div>
                    <h2>Hello World</h2>
                </div>
                <div>
                    <h2>Passing a single value:</h2> {this.props.singleValue}
                </div>
                <div>
                    <h2>Passing an object:</h2> {this.props.singleObject.message}
                </div>
                <div>
                    <h2>Rendering a list</h2>
                    <ul>
                        {this.props.randomItems ?
                            this.renderItems(this.props.randomItems)
                            :
                            (<li>No items</li>)
                        }
                    </ul>
                </div>
                <div>
                    <button onClick={this.onClickHandler}>On Click Button</button>
                </div>
                <div>
                    <button onClick={() => this.onClickHandlerWithData("I'm data")}>On Click Button with data</button>
                </div>
                <div>
                    <button onClick={this.props.randomFunction}>On Click Button with passed through function</button>
                </div>
                <div>
                    <h2>Rendering complex objects</h2>
                    {this.props.randomPosts &&
                        this.renderPosts(this.props.randomPosts)
                    }
                </div>
            </div>
        );
    }
}

export default HelloWorld;
