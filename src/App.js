import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

class App extends React.Component {
  state = {
    friends,
    clickedImage: [],
    highScore: 0,
    currentScore: 0
  };

  handleShuffle() {
    this.setState({ friends: friends.sort(() => Math.random() - 0.5) });
  }

  handleGuess(id) {
    if (!this.state.clickedImage.includes(id)) {
      this.setState({
        currentScore: this.state.currentScore + 1,
        highScore:
          this.state.currentScore + 1 > this.state.highScore
            ? this.state.currentScore + 1
            : this.state.highScore,
        clickedImage: [...this.state.clickedImage, id]
      });
    } else {
      alert("You guessed wrong! Start again");
      this.setState({
        currentScore: 0,
        clickedImage: []
      });
    }
    this.handleShuffle();
  }

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <h3>
          Click on the images without repeating. See if you can get to 12
          without clicking on an image twice.
        </h3>
        <div className="container">
          <p>High Score: {this.state.highScore}</p>
          <p>Current Score: {this.state.currentScore}</p>
        </div>
        <div>
          <div className="row">
            {friends.map(f => (
              <FriendCard
                image={f.image}
                id={f.id}
                clickhandler={() => this.handleGuess(f.id)}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
