import React from "react";
import prototype from "./prototypical.PNG";

const Blog = () => {
  return (
    <div className="px-24 py-8">
      <div className="mb-6">
        <h1 className="text-3xl text-blue-500 font-bold">
          What are the different ways to manage a state in a React application?
        </h1>
        <p className="text-xl mt-2">
          5 Types of Application State in React Communication plays a crucial
          role in storing information in different states.<br></br>
          <b>Communication State</b> It covers essential aspects of an
          application such as loading spinners, error messages, pop-ups, and
          many others which showcases that a communication link has been formed.
          Communication state is the “loading phase” of the transactions between
          different states. It stores the following information when used in a
          React app: 1. The error messages, given that the request failed or the
          transaction was not completed. 2. The type, selector, and expected
          change of operations requested. 3. The type of data requested to
          access or expect to receive.<br></br>
          <b> Data State</b>The Data state will receive all the information from
          the outer world. But how will it identify which information is what
          and whether it needs to be stored in the data state or not? Well,
          every piece of information will have an identifier that will help the
          Data state recognize and request for particular information that it
          can store. Every fragment of received data has a type and a selector
          which specifies the kind of data received. You can design a redux
          store for your data once you have mapped out a way to identify the
          type and id of a received object. After mapping the type of data and
          storing relevant information, you can easily access the datastore from
          anywhere via Connect. Since each state of a React app follows a
          particular set of rules, you can play around with your information as
          long as it aligns with the pre-defined rules.<br></br>
          <b> Control State</b> the control state does not represent the
          application’s environment. Instead, it refers to the state which the
          user has input into the app. For example, form inputs, selected items,
          etc. Control state is known to be more diverse and versatile when it
          comes to storing information. While form inputs are a huge bundle of
          information with multiple objects in place, selected items act as a
          single string of information representing an Id, and the control state
          efficiently stores both kinds of data without any trouble.<br></br>
          <b> Session State</b>Session state contains information about the user
          of the application such as user id, permissions, passwords, etc. It
          may also include information on how the application should work
          according to a particular user’s preferences. While Session state can
          store similar patterned components like Control state, there is a
          thick difference between both the information stored. For example, you
          may have a part of a Control state information that represents parts
          of a tree view, you can find kind of similar data in the Session
          state, but it will definitely be different from the Control state
          <br></br>
          <b> Location State</b>Location state is the UTF-8 display that appears
          in your URL bar. In fact, the L in URL stands for Locator! One of the
          most interesting facts about Location state is that you can give
          directions to a user to parts of the application that do not have
          unique URLs associated with them. Also, the HTML5 History API allows
          you to store states separately from the specific URL.
        </p>
      </div>
      <div className="mb-6">
        <h1 className="text-3xl text-blue-500 font-bold">
          How will you improve the performance of a React Application?
        </h1>
        <p className="text-xl mt-2">
          Keeping component state local where necessary.<br></br> Memoizing
          React<br></br>
          components to prevent unnecessary re-renders. <br></br>Code-splitting
          in React<br></br>
          Using dynamic import() Windowing or list virtualization in React.
          <br></br> Lazy loading images in React
        </p>
      </div>
      <div className="mb-6">
        <h1 className="text-3xl text-blue-500 font-bold">
          How does prototypical inheritance work?
        </h1>
        <p className="mt-2">
          Prototypical inheritance refers to the ability to access object
          properties from another object. We use a JavaScript prototype to add
          new properties and methods to an existing object constructor. We can
          then essentially tell our JS code to inherit properties from a
          prototype. Prototypical inheritance allows us to reuse the properties
          or methods from one JavaScript object to another through a reference
          pointer function.All JavaScript objects inherit properties and methods
          from a prototype: Date objects inherit from Date.prototype. Array
          objects inherit from Array.prototype. Player objects inherit from
          Player.prototype.
          <img src={prototype} alt="" />
        </p>
      </div>
      <div className="mb-6">
        <h1 className="text-3xl text-blue-500 font-bold">
          What is a unit test? Why should write unit tests?
        </h1>
        <p className="mt-2">
          Unit testing is a testing method that tests an individual software
          unit in isolation. This involves verifying the output of a function or
          component for a given input.For React components, this could mean
          checking that the component renders correctly for the specified props.
          <br></br>
          There are multiple reasons why unit tests can be helpful. Some of them
          being: Prevent regressions Exercise your code Faster feedback while
          developing These are valid points, but I found that the main advantage
          of writing unit tests is how it improves the way you write code. If
          you write your tests during or even before implementing a feature, it
          gives you a better picture of the requirements. You automatically end
          up writing code that's easy to test, loosely coupled, and easier to
          reason about. I first read about this way of thinking about tests in
          The Pragmatic Programmer by David Thomas and Andrew Hunt. I didn't
          know this when I started writing my first unit tests, but in
          retrospect, that's exactly what happened. When I started writing tests
          for some of the legacy code at my company, it was never only writing
          tests. It always went hand in hand with refactoring quite a bit of the
          code, so that it would be easier to test it in the first place. For
          example, I'd extract functions from components into a separate file to
          make this code easier to test. This naturally resulted in less coupled
          code.
        </p>
      </div>
      <div>
        <h1>How will you improve the performance of a React Application?</h1>
        <p></p>
      </div>
    </div>
  );
};

export default Blog;
