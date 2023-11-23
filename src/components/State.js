import React, { Component } from 'react';

class State extends Component {
  constructor() {
    super();
    this.state = {
      answer: 'My name is Tahani and I am a front-end developer using React',
    };
  }

  render() {
    return (
      <div>
        <div class="h-screen bg-gray-50 flex items-center">
          <section
            className="w-full bg-cover bg-center py-32"
            style={{
              backgroundImage: "url('https://source.unsplash.com/random')",
            }}
          >
            <div className="container mx-auto text-center text-white">
              <h1 className="text-5xl font-medium mb-6">
                Welcome to My Agency
              </h1>
              <p className="text-xl mb-12">
                {/* <h1>State (instead of props) with constructor in app.js </h1> */}
                Who am I ? {this.state.answer}
              </p>
              <a
                href="https://tahanina.nl/"
                className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
              >
                Demo
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default State;
